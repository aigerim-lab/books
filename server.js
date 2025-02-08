require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB is connected'))
.catch(err => console.log(err));

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: Number,
    genre: String
  });


const Book = mongoose.model('Book', bookSchema);

app.get('/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
  });

app.post('/books', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put('/books/:id', async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedBook) return res.status(404).send("Книга не найдена");
      res.json(updatedBook);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

app.delete('/books/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).send("Книга не найдена");
    res.json(deletedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//API path 
const axios = require('axios');

app.get('/weather/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(weatherUrl);
    const data = response.data;

    const weatherInfo = {
      city: data.name,
      temperature: `${data.main.temp}°C`,
      condition: data.weather[0].description,
    };

    res.json(weatherInfo);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data.' });
  }
});
