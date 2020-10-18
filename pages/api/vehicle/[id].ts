import { NextApiRequest, NextApiResponse } from 'next';

export default function getVehicleById(req: NextApiRequest, res: NextApiResponse) {
    res.json( {byId: req.query.id, name: 'Nombre de la función: getVehicleById'} )
}
