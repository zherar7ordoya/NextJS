import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

export default async function getVehicleById(req: NextApiRequest, res: NextApiResponse) {
    const db = await sqlite.open('./mydb.sqlite');
    const vehicle = await db.get( 'SELECT * FROM vehicle WHERE id=?', [req.query.id] );


    res.json(vehicle);
}
