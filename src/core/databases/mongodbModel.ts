import { MongoClient, Db, Collection, ObjectId } from 'mongodb';

import { MONGO_CONFIG } from '@/config';
const { SVR_URL, DB_NAME } = MONGO_CONFIG;

type TSchema<T> = { [K in keyof T]: T[K] };

const DB = (async function connectDb() {
    console.log('connecting to ', SVR_URL)

    const config = {
        serverSelectionTimeoutMS: 5000,
    }
    try {
        const client: MongoClient = new MongoClient(SVR_URL, config);

        await client.connect();

        const db: Db = client.db(DB_NAME);
        console.log('DB Successfully Connected!');
        return db;
    }
    catch (error) {
        console.error('Please take a check mongodb connection string');
    }
})();

async function getCollection(collectionName: string): Promise<Collection> {
    return new Promise(async (resolve, reject) => {
        DB
            .then((db) => {
                const doc: Collection = (db as Db).collection(collectionName);
                resolve(doc)
            })
            .catch(e => {
                console.error('e=>', e);
            })
    });
}

export class MongodbModel<T> {
    [index: string]: any;
    $record: T
    constructor(record: T) {
        this.$record = record;
    }

    async save(data: TSchema<T> | undefined = undefined) {
        const doc: Collection = await getCollection(this.constructor.name)
        if (data === undefined) {
            const record = await doc.insertOne(this['$record'] as TSchema<T>);
            return { ...this['$record'], _id: record.insertedId };
        }
        else {
            const record = await doc.insertOne(data as TSchema<T>);
            return { ...data, _id: record.insertedId };
        }
    }
}
