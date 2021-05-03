const mongoose = require("mongoose");

const PlanetSchema = new mongoose.Schema(
  {
    id: String,
    title: {
      type: String,
      required: [true, "A planet must have a name."],
      unique: true,
      trim: true,
      maxlength: [
        20,
        "A planet name must have less or equal then 20 characters.",
      ],
      minlength: [
        5,
        "A planet name must have more or equal then 5 characters.",
      ],
    },
    subtitle: {
      type: String,
      required: [true, "A planet must have a name."],
      trim: true,
      maxlength: [
        40,
        "A planet name must have less or equal then 40 characters.",
      ],
      minlength: [
        5,
        "A planet name must have more or equal then 5 characters.",
      ],
    },
    headline: {
      type: String,
      required: [true, "A planet must have a headline."],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "A planet must have a category."],
      enum: {
        values: ["planets", "starships"],
        message: "category is either: planets or starships.",
      },
    },
    price: {
      type: Number,
      required: [true, "A planet must have a price."],
    },
    description: {
      type: String,
      trim: true,
    },
    slug: String,
    image: String,
    image_800: String,
    image2: String,
    bgimage: String,
    pageIntro: String,
    thumbnails: [String],
    collectionThumb: String,
    presentation: [String],
    featureImage: String,
    featureColor: String,
    feature: [Object],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Planet = mongoose.model("Planet", PlanetSchema);

module.exports = Planet;
