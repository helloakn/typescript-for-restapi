
import Validator, { IValidator } from '@/core/validators';
import { TDic } from '@/core/types';
import { HTTP_STATUS_CODE } from '@/config'

export class DemoValidator extends Validator {
    isValidID(query: TDic) {
        this.isValidate = false;
        if (!query.id) throw { code: HTTP_STATUS_CODE.BAD_REQUEST, msg: 'ID is Required' }
        this.isValidate = true;
        return this;
    }

    validate(input: any) {
        const { req: { query } } = input;
        this.Rule((v: IValidator) => {
            v.isValidID(query)
        });
    }
}