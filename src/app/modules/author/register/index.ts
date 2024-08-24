import Author, { IAuthorFields } from '@/app/models/author.models';
// export type { IAuthorFields } from '@/app/models/author.models';
export { RegistrationValidator } from '@/app/modules/author/register/register.validator';

// type TSchema<T> = { [K in keyof T]: T[K] };

class RegisterAuthor<T extends Record<string, any>> {
  async execute(input: T) {
    const { name, email, phone, gender, password } = input;

    const data: T = {
      isActive: false,
      isActivate: false,
      name, email, phone, gender, password
    } as any as T
    const author = new Author(data as any as IAuthorFields);
    const result = await author.save(data as any as IAuthorFields);
    // console.log('xr', result)

    return result;
  }
}

export default new RegisterAuthor();
