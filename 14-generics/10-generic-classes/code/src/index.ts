// Writing Generic Classes

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

// Generic Class
class Playlist<T> {
  // Initially assign an empty array
  public queue: T[] = [];

  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
songs.add({ title: "Video Killed The Radio Star", artist: "The Buggles" });
console.log(songs.queue);

const videos = new Playlist<Video>();
videos.add({
  title: "The Matrix",
  creator: "The Wachowskis",
  resolution: "1080p",
});
console.log(videos.queue);
