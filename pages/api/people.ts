import { NextApiRequest, NextApiResponse } from 'next';

export default function getPeople(req: NextApiRequest, res: NextApiResponse) {
    res.json( [ {name: 'bruno'}, {name: 'Gerardo'} ] );
}
