import { NextApiRequest, NextApiResponse } from 'next';

export default function getAllVehiclesByPersonId(req: NextApiRequest, res: NextApiResponse) {
    res.json( {byId: req.query.id, name: 'Nombre de la función: getAllVehiclesByPersonId'} )
}
