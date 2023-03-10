import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
    res.status(200).end("OK")
})

app.listen(9898, () => console.log('Server runs on Port'))