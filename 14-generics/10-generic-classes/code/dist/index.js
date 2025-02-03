"use strict";
// Writing Generic Classes
// Generic Class
class Playlist {
    constructor() {
        // Initially assign an empty array
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
songs.add({ title: "Video Killed The Radio Star", artist: "The Buggles" });
console.log(songs.queue);
const videos = new Playlist();
videos.add({
    title: "The Matrix",
    creator: "The Wachowskis",
    resolution: "1080p",
});
console.log(videos.queue);
