import { DemoValidator } from '@/app/validators/serviceCheck/DemoValidator';
import { HTTP_STATUS_CODE } from '@/config'
describe('src - validators - serviceCheck - DemoValidator', () => {
  test('TEST validate function, SHOULD throw exception WHEN id is required', async () => {
    // GIVEN
    const input = { req: { query: {} } }

    // WHEN
    const demoValidator = new DemoValidator();
    const process = new Promise((resolve, reject) => {
      try {
        demoValidator.validate(input);
        resolve(true);
      }
      catch (e) {
        reject(e)
      }
    })

    // THEN
    expect(process).rejects.toEqual({ code: HTTP_STATUS_CODE.BAD_REQUEST, msg: 'ID is Required' });
    expect(demoValidator.isValidate()).toBe(false);
  });
  test('TEST validate function, isValidate SHOULD true WHEN id is required', async () => {
    // GIVEN
    const input = { req: { query: { id: '1' } } }

    // WHEN
    const demoValidator = new DemoValidator();
    const process = new Promise((resolve, reject) => {
      try {
        demoValidator.validate(input);
        resolve(true);
      }
      catch (e) {
        reject(e)
      }
    })

    // THEN
    expect(process).resolves.toBe(true)
    expect(demoValidator.isValidate()).toBe(true);
  })
});