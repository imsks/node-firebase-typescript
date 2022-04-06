import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.get('/', async (req: Request, res: Response) => {
  res.status(200).json({
    status: true,
  })
})

export default app
