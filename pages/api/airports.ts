import { NextApiRequest, NextApiResponse } from 'next'

import { allAirports } from '../../models/airport'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { q } = req.query;
  
  const airports = await allAirports(q.toString().toLowerCase())

  res.status(200).json(airports)
}
