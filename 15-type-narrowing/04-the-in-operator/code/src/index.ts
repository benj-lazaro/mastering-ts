// Narrowing With The in Operator

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow): number {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

console.log(getRuntime({ title: "Amadeus", duration: 145 }));
console.log(
  getRuntime({ title: "SpongeBob", numEpisodes: 80, episodeDuration: 30 })
);
