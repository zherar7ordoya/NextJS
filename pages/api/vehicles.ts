import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

export default async function getAllVehicles(req: NextApiRequest, res: NextApiResponse) {
    const db = await sqlite.open('./mydb.sqlite');
    const vehicle = await db.all('SELECT * FROM vehicle');


    res.json(vehicle);
}
