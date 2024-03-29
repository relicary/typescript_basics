interface Details {
    author: string;
    year: number;
}

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 255,
    song: "Back In Black",
    details: {
        author: "Angus Young, Malcolm Young, Brian Johnson",
        year: 1980
    }
}

console.log('Song: ', audioPlayer.song);
console.log('Duration: ', audioPlayer.songDuration);
console.log('Author: ', audioPlayer.details.author);
console.log('=========');

const { song, songDuration:duration, details } = audioPlayer;
const { author } = details;

console.log('Song: ', song);
console.log('Duration: ', duration);
console.log('Author: ', author);

console.log('=========');

const [, vegeta, trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];

console.log("Character 2: ", vegeta);
console.log("Character 3: ", trunks);

export {};