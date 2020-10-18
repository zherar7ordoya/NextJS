import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

/**
 * Para probar PUT en Consola Chrome, use los siguientes comandos:
 * 
 * const respuesta = await fetch('http://localhost:3000/api/person/2', {
 *     method: 'PUT',
 *     headers: {
 *         'Content-Type': 'application/json'
 *     },
 *     body: JSON.stringify( { name: 'Our new Name', email: 'newemail@pm.me' } )
 * });
 * 
 * await respuesta.json();
 * 
 * @param req 
 * @param res 
 */

export default async function getPersonById(req: NextApiRequest, res: NextApiResponse) {
    const db = await sqlite.open('./mydb.sqlite');

    if (req.method === 'PUT') {
        const statement = await db.prepare(
            'UPDATE person SET name=?, email=? WHERE id=?'
        );
        const result = await statement.run(
            req.body.name,
            req.body.email,
            req.query.id
        );
        result.finalize();
    }

    const person = await db.get('SELECT * FROM person WHERE id=?', [req.query.id]);


    res.json(person);
}
