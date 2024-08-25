import Validator from '@/core/validators';

export class RegistrationValidator extends Validator {
  validate(input: any) {
    const { req: { body: { username, password, email } } } = input;

    this.input(username, 'username')
      .isPureString('it is not pure')
      .minLength(3, 'min value must be 3')
      .maxLength(10, 'mix value must be 20')
      .required();

    this.input(password, 'password')
      .isPureString()
      .minLength(6, 'min value must be 6')
      .required('hay ');

    this.input(email, 'email')
      .isEmail('Invalid Email address');

    if (!this.isValidate()) {
      throw {
        code: 400,
        msg: this.message()
      }
    }
    return this;
  }
}
