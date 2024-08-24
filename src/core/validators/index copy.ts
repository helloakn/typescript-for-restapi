export * from './functions';
import * as functions from './functions';

type Keys = keyof typeof functions;
type TFunctions = typeof functions[Keys];

interface ICallBack {
  (rule: IValidator): void
};

export interface IValidator {
  [key: string]: TFunctions | any
}

interface Validator extends IValidator {

}

class Validator {
  isValidate: boolean;
  constructor() {
    this.isValidate = true;

    for (const [key, fn] of Object.entries(functions)) {
      console.log('key', key, fn)
      // this[key] = function (this: IValidator, k: any) {
      //   console.log('hello me', key)
      //   functions[key]()
      // }
      this[key] = fn
      // this[key] = function (this: IValidator, args as any) {
      //   fn(...args)
      // }
      console.log('=>', key)
    }
    // return this;
  }

  Rule(callBack: ICallBack) {
    callBack(this);
    return this;
  }


  validate(input: any) {
    console.log('validate function should be implemented in Child Class')
  }
};

export default Validator;
