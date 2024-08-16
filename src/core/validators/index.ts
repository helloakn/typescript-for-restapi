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

        for (const [key, value] of Object.entries(functions)) {
            this[key] = function (this: IValidator, k: any) {
                return this;
            }
        }
        return this;
    }

    Rule(callBack: ICallBack) {
        callBack(this);
        return this;
    }
};

export default Validator;
