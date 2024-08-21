import Author, { IAuthorFields } from '@/app/models/author.models';


interface IAuthor {
    name: string
}

class AuthorRegister {
    async execute(input: IAuthor) {
        const name = input.name;

        const data: IAuthorFields = {
            name: name,
            isActive: false,
        }
        const author = new Author(data);
        const result = await author.save(data);
        console.log('xr', result)

        return result;
    }
}

export default new AuthorRegister();
