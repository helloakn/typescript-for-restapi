import type { TAny, TDic } from '../types';
import * as functions from './functions';
export * from './functions';

type TFunctions = typeof functions[keyof typeof functions];

export interface IValidator {
  [key: string]: TFunctions | any
}

class Validator {
  [key: string]: any
  private $inputValue: TAny[] = [];
  private $attribute: string = '';
  private $message: { [key: string]: any } = {};
  private $isValidate: boolean = true;

  constructor() {
    for (const [key, fn] of Object.entries(functions)) {
      this[key] = function (...value: any[]) {
        let result = true;
        const executeFun = (fun: any, ...arg: any[]) => fun(...arg);

        if (value.length == 0) result = executeFun(fn, this.$inputValue)
        else if (value.length == 1) result = executeFun(fn, this.$inputValue) // need to put default error message
        else result = executeFun(fn, ...[this.$inputValue, ...value]);

        if (!result) {

          let errorMessage: string = value.length === 0
            ? `${key} function : Losing Error Message Here.`
            : value[value.length - 1];

          this.$isValidate = false;
          if (!(this.$attribute in this.$message)) {
            this.$message[this.$attribute] = []
          }
          (this.$message[this.$attribute] as Array<string>).push(errorMessage);
        }
        return this;
      }
    }
  }

  input(value: TAny[], attribute?: string): Validator {
    this.$attribute = attribute || '';
    this.$inputValue = value;
    return this;
  }

  isValidate(): boolean {
    return this.$isValidate;
  }
  message(): TDic {
    return this.$message;
  }

  validate(input: TAny): void {
    console.log('It is supposed to implement in child class.')
  }
}

export default Validator;

// usage and response
// Validator.isEmail() => true false;
// Validator.isPureString()=> true false;

// const { email, username } = input;

// result = {
//   isValidate: false,
//   message: {
//     password: [
//       'password is not pure string',
//       'passwrod is lower than 10'
//     ],
//     email: [
//       'email is not pure string',
//       'email is lower than 10',
//       'not allown'
//     ]
//   }
// }
