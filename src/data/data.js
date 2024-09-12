// src/data/dummyData.js

import shrekImage from "../assets/sherk2.jpg";
import spidermanImage from "../assets/spiderman.jpg";
import batman from "../assets/The-Dark-Knight-Rises-Movie.jpg";
import apple from "../assets/apple.jpg";
import disney from "../assets/disney.jpg";
import prime from "../assets/prime.png";
import hbo from "../assets/HBO-Symbol.jpg";
import hulu from "../assets/Hulu-Emblem.jpg";
import netflix from "../assets/Couleur-logo-Netflix.jpg";

export const moviesCategory = [
  { id: 1, name: "Action" },
  { id: 2, name: "Comedy" },
  { id: 3, name: "Drama" },
  { id: 4, name: "Sci-Fi" },
  { id: 5, name: "Thriller" },
  { id: 6, name: "Western" },
];

export const moviesData = [
  { id: 1, title: "Shrek 2", image: shrekImage, year: 2020 },
  { id: 2, title: "Spider-Man 2", image: spidermanImage, year: 2004 },
  { id: 3, title: "The Dark Knight", image: batman, year: 2013 },
];

export const serviceChannel = [
  { id: 1, name: "Apple Tv", image: apple },
  { id: 2, name: "Disney Tv", image: disney },
  { id: 3, name: "HBO Max", image: hbo },
  { id: 4, name: "Hulu", image: hulu },
  { id: 5, name: "Netflix", image: netflix },
  { id: 6, name: "Prime", image: prime },
];
