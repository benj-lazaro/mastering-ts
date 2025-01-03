// Nested Objects
function calculatePayout(songTitle) {
    return songTitle.numStreams * 0.0033;
}
function printSong(songTitle) {
    console.log("".concat(songTitle.title, " - ").concat(songTitle.artist, " "));
}
// Nested object of type Song
var faveSong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    },
};
// Pass the nested object as argument value to functions
var earnings = calculatePayout(faveSong);
console.log(earnings);
printSong(faveSong);
