// import { MongoClient, Db, Collection, ObjectId } from 'mongodb';
// jest.mock('MongoClient', () => {
//   return '';
// });

class MongoClient {
  async coneect() {
    console.log('hello world hahaha')
    return true;
  }
  db() {
    return Db;
  }
}
const Db = {};
const Collection = {}
const ObjectId = {}
export { MongoClient, Db, Collection, ObjectId } 