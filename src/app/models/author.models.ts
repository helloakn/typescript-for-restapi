import { MongodbModel } from '@/core/databases';

export type IAuthorFields = {
  name: string
  isActive?: boolean
  email?: string
  phone?: string
  gender?: 'male' | 'female'
  isActivate: boolean
  password?: string
  position?: string
  address?: {
    township: string
    street: string
  }
}

export default class Author extends MongodbModel<IAuthorFields> {
  constructor(record: IAuthorFields) {
    super(record);
  }
  hello() {
    console.log('hello world')
  }
}
