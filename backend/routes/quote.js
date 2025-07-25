import express from "express";
import Quote from "../models/Quote.js";

const router = express.Router();

// Get quote
router.get("/", async (req, res) => {
  const quote = await Quote.findOne();
  res.json(quote);
});

// Update/Create quote
router.post("/", async (req, res) => {
  const { text } = req.body;
  let quote = await Quote.findOne();

  if (quote) {
    quote.text = text;
  } else {
    quote = new Quote({ text });
  }

  await quote.save();
  res.json({ success: true, quote });
});

export default router;
