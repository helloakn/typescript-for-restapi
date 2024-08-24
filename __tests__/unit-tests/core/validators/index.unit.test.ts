
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
    expect(spyConsoleLog).toHaveBeenCalledWith('It is supposed to implement in child class.');
  });
});
