const music = document.querySelector('audio');
const play = document.querySelector('#play');
const img = document.querySelector('img');
const title = document.querySelector('#title');
const artist = document.querySelector('#artist');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
let current = document.querySelector('#current-time');
let durationTime = document.querySelector('#duration');

const songs = [
    {
        name: '1',
        title: 'Yaad piya ki aane lagi',
        artist: 'Neha kakkar'
    },
    {
        name: '2',
        title: 'Yeh jawani dewani',
        artist: 'Mohit'
    },
    {
        name: '3',
        title: 'Rockstar',
        artist: 'Mohit'
    }
];
let index = 0;
let isPlaying = false;

const loadSong = (song) => {
    title.innerText = song.title;
    artist.innerText = song.artist;
    music.src = 'music/' + song.name + '.mp3';
    img.src = 'images/' + song.name + '.jpeg';

}
loadSong(songs[index]);
const playMusic = () => {
    isPlaying = true;
    img.classList.add('anime');
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
}
const pauseMusic = () => {
    isPlaying = false;
    img.classList.remove('anime');
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
}
const prevSong = () => {
    index--;
    if (index < 0) {
        index = songs.length - 1;
    }
    loadSong(songs[index]);
    playMusic();
}
const nextSong = () => {
    index++;
    if (index > songs.length - 1) {
        index = 0;
    }
    loadSong(songs[index]);
    playMusic();
}
const updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPer = (currentTime / duration) * 100;
    progress.style.width = `${progressPer}%`;

    let min_duration = Math.floor(duration / 60);
    let min_sec = Math.floor(duration % 60);
    if (duration) {
        durationTime.textContent = `${min_duration} : ${min_sec}`;
    } else {
        durationTime.textContent = '0:00';
    }

    let min_curr = Math.floor(currentTime / 60);
    let sec_curr = Math.floor(currentTime % 60);
    if (sec_curr < 10) {
        sec_curr = '0' + sec_curr;
    }
    current.textContent = `${min_curr} : ${sec_curr}`;
}
const setProgress = (e) => {
    //console.log(e);
    const { duration } = music;
    let move_progress = (e.offsetX / e.srcElement.clientWidth) * duration;
    music.currentTime = move_progress;
    //console.log(move_progress);
}
play.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});
prev.addEventListener('click', prevSong);
next.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgress);
music.addEventListener('ended', nextSong);
progressBar.addEventListener('click', setProgress);