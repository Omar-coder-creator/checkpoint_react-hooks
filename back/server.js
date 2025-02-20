import express from 'express'
import cors from 'cors'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    posterurl: String,
    rating: {
        type: Number,
        validate: (n) => { n >= 0 && n <= 5 }
    },
    trailerLink:String
})
const Movie = new mongoose.model('Movie', movieSchema)

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to the movies db')
}).catch((err) => { console.error('Failed to connect : ', err) })

const app = express()

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

app.get('/api/movies', async (req, res) => {
    try {
        let response = await Movie.find();
        if (!response) return res.status(404).json({ message: 'no data found' })
        res.status(200).json(response)
    } catch (err) { res.status(500).json({ message: 'server error' }) }
})

app.post('/api/movies', async (req, res) => {
    try {
        let movie = new Movie(req.body);
        let response = await movie.save()
        res.status(201).json(response)
    } catch (err) {
        res.status(500).json({ message: 'internal server error' })
    }
})

app.delete('/api/movies/:id', async (req, res) => {
    try {
        let response = await Movie.findByIdAndDelete(req.params.id)
        if (!response) return res.status(404).json({ message: 'movie not found' })
        res.status(200).json(response)
    }catch(err){res.status(500).json({message:'server internal error'})}
})

app.all('*', (req, res)=>{
    res.status(400).send('path or method incorrect')
})

app.listen(process.env.PORT, ()=>console.log('server is running on port:', process.env.PORT))