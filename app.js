// app.js
const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

var animalsArray = ["Elephant", "Eagle", "Dragonfly"];
const API_KEY = "ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u";

const groupedAnimals = {
  Mammals: [],
  Birds: [],
  Insects: [],
};

// Can you categorize the animalsArray into the following categories?

// Desired Output
// {
//     Mammals: [ 'Elephant' ],
//     Birds: [ 'Eagle' ],
//     Insects: [ 'Dragonfly' ]
// }

animalsArray.forEach((animal, index) => {
  if (animal === "Elephant") {
    groupedAnimals.Mammals.push(animal);
  } else if (animal === "Eagle") {
    groupedAnimals.Birds.push(animal);
  } else if (animal === "Dragonfly") {
    groupedAnimals.Insects.push(animal);
  }
});

// console.log(groupedAnimals);

//

// After you get the desired output create an API call to this API endpoint
// https://api.api-ninjas.com/v1/animals
// Or Visit this URL for more info: https://api-ninjas.com/api/animals
// API-Key to use: ccCBd7oOPGXnF/Byo9+rUw==FrPn9rqGncHCgE4u

const getAnimals = async (animalName) => {
  const inputArray = Object.values(animalName);
  inputArray.forEach(async (animal) => {
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
      console.log(error);
    }
  });
};

getAnimals(groupedAnimals);

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
