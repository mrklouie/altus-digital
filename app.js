// app.js
const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

var animalsArray = ["Elephant", "Eagle", "Dragonfly"];

// Can you categorize the animalsArray into the following categories?

// Desired Output
// {
//     Mammals: [ 'Elephant' ],
//     Birds: [ 'Eagle' ],
//     Insects: [ 'Dragonfly' ]
// }
//
const categorizedAnimal = {
  Mammals: [],
  Birds: [],
  Insects: [],
};

animalsArray.map((animal, index) => {
  if (animal === "Elephant") {
    categorizedAnimal.Mammals.push(animal);
  } else if (animal === "Eagle") {
    categorizedAnimal.Birds.push(animal);
  } else if (animal === "Dragonfly") {
    categorizedAnimal.Insects.push(animal);
  }
});

// After you get the desired output create an API call to this API endpoint
// https://api.api-ninjas.com/v1/animals
// Or Visit this URL for more info: https://api-ninjas.com/api/animals
// API-Key to use: ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u

const API_KEY = "ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u";

const getAnimals = async (groupedAnimals) => {
  const inputAnimals = Object.values(groupedAnimals);

  inputAnimals.forEach(async (animal, index) => {
    try {
      const data = await axios(
        `https://api.api-ninjas.com/v1/animals?name=${animal}`,
        {
          headers: {
            "X-Api-Key": API_KEY,
          },
        }
      );
      console.log(data.data);
    } catch (error) {
      console.log(error.message || error);
      throw new Error(error.message || error);
    }
  });
};

getAnimals(categorizedAnimal);

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
