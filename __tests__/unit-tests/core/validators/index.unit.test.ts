
import Validator, { IValidator } from '@/core/validators';
import { TDic } from '@/core/types';
import { HTTP_STATUS_CODE } from '@/config'

describe('src / core / validators / index', () => {
    it('Test validate function, it should execute when inherient object does not implement validate method', () => {
        // GIVEN
        class TestValidator extends Validator {

        }
        const testValidator = new TestValidator();
        const spyValidatorValidate = jest.spyOn(Validator.prototype, 'validate');
        const spyConsoleLog = jest.spyOn(console, 'log');

        // WHEN
        testValidator.validate(null);

        // THEN
        expect(spyValidatorValidate).toHaveBeenCalledTimes(1);
        expect(spyConsoleLog).toHaveBeenCalledWith('validate function should be implemented in Child Class');
    });

    // it('Test validate function, it should execute when inherient object does not implement validate method', () => {
    //     // GIVEN
    //     class DemoValidator extends Validator {
    //         isValidID(query: TDic) {
    //             this.isValidate = false;
    //             if (!query.id) throw { code: HTTP_STATUS_CODE.BAD_REQUEST, msg: 'ID is Required' }
    //             this.isValidate = true;
    //             return this;
    //         }

    //         validate(input: any) {
    //             const { req: { query } } = input;
    //             this.Rule((v: IValidator) => {
    //                 v.isValidID(query)
    //             });
    //         }
    //     }

    //     // WHEN
    //     // testValidator.validate(null);

    //     // THEN
    //     // expect(spyValidatorValidate).toHaveBeenCalledTimes(1);
    //     // expect(spyConsoleLog).toHaveBeenCalledWith('validate function should be implemented in Child Class');
    // });
});
