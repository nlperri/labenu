const artists = [
  "Taylor Swift",
  "Gracie Abrams",
  "Lizzie McAlpine",
  "Olivia Rodrigo",
  "Girl in Red",
];

for (let [index, value] of artists.entries()) {
  console.log(`${+index + 1}: ${value}`);
}
