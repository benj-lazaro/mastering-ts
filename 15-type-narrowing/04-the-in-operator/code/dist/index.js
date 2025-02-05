"use strict";
// Narrowing With The in Operator
function getRuntime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRuntime({ title: "Amadeus", duration: 145 }));
console.log(getRuntime({ title: "SpongeBob", numEpisodes: 80, episodeDuration: 30 }));
