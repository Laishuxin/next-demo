// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ProductApi } from '@/api'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const data = await ProductApi.getAllProduct()
  res.status(200).json(data)
}
