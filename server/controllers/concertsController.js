import { Concerts } from "../models/model.js";

// Add a new concert
export const addConcertDetails = async (req, res) => {
  try {
    const { concertName, artist, date, venue, city } = req.body;

    if (!concertName || !artist || !date || !venue || !city) {
      return res.status(400).send("All fields are required");
    }
    if (typeof concertName !== "string" || typeof artist !== "string" || typeof date !== "string" || typeof venue !== "string" || typeof city !== "string") {
      return res.status(400).send("Invalid data types");
    }

    const [newConcert] = await Concerts.create({
      name: concertName,
      artist: artist, 
      date: date,
      venue: venue,
      city: city
    });

    res.status(201).json(newConcert);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding concert");
  }
};

// Update existing concert
export const changeConcertDetails = async (req, res) => {
  try {
    const { concertId, concertName, artist, date, venue, city } = req.body;

    if (!concertId || !concertName || !artist || !date || !venue || !city) {
      return res.status(400).send("All fields are required");
    }

    const [updatedConcert] = await Concerts.update(concertId, {
      name: concertName,
      artist: artist,
      date: date,
      venue: venue,
      city: city
    });

    if (!updatedConcert) {
      return res.status(404).send("Concert not found");
    }

    res.json(updatedConcert);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating concert");
  }
};

// Get concert details
export const getConcertDetails = async (req, res) => {
  try {
    const concerts = await Concerts.list();
    res.json(concerts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching concert details");
  }
};