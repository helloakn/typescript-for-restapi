import Validator from '@/core/validators';

const input = { email: 'this is email', username: 'this is username' };

type TInput = typeof input;

export class RegistrationValidator extends Validator {
  validate(input: any) {
    const { req: { body: { username, password } } } = input;

    this.input(username, 'username')
      .isPureString('it is not pure')
      .maxLength(10, 'mix value must be 20')
      .minLength(3, 'min value must be 3')
      .required();

    this.input(password, 'password')
      .isPureString()
      .minLength(6, 'min value must be 6')
      .required('hay ');

    if (!this.isValidate()) {
      throw {
        code: 400,
        msg: this.message()
      }
    }
    console.log('this', this.message())
    return this;
  }

}