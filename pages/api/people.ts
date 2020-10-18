import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

export default async function getPeople(req: NextApiRequest, res: NextApiResponse) {
    const db = await sqlite.open('./mydb.sqlite');
    const people = await db.all('SELECT * FROM person');


    res.json(people);
}
