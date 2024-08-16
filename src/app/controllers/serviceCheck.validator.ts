
import Validator, { IValidator } from '@/core/validators';
import { TDic } from '@/core/types';

export class DemoValidator extends Validator {
    isValidID(query: TDic) {
        if (!query.id) throw { code: 500, msg: 'ID is Required' }
        this.isValidate = false;
        return this;
    }

    validate(input: any) {
        const { req: { query } } = input;
        this.Rule((v: IValidator) => {
            v.isValidID(query)
        });
    }
}