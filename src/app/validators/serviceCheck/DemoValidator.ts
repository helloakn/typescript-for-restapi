
import Validator from '@/core/validators';
import { TDic } from '@/core/types';
import { HTTP_STATUS_CODE } from '@/config'

export class DemoValidator extends Validator {
  isValidID(query: TDic) {
    if (!query.id) {
      this.setValidate(false);
      throw { code: HTTP_STATUS_CODE.BAD_REQUEST, msg: 'ID is Required' };
    }
    this.setValidate(true);
    return this;
  }

  validate(input: any) {
    const { req: { query } } = input;
    this.isValidID(query)
  }
}