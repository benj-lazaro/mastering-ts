// Nested Objects

// Nested object type alias
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(songTitle: Song): number {
  return songTitle.numStreams * 0.0033;
}

function printSong(songTitle: Song): void {
  console.log(`${songTitle.title} - ${songTitle.artist} `);
}

// Nested object of type Song
const faveSong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

// Pass the nested object as argument value to functions
const earnings = calculatePayout(faveSong);
console.log(earnings);

printSong(faveSong);
