const sad_audio = new Audio("./sounds/Sad\ Ambient.mp3");
const romantic_audio = new Audio("./sounds/Romantic\ Ambient.mp3");
const happy_audio = new Audio("./sounds/Happy\ Ambient.mp3");
const angry_audio = new Audio("./sounds/Angry\ Ambient.mp3");

let all_boxes = document.querySelector(".sound-box-container").querySelectorAll(".sound-box");

all_boxes.forEach( box => {
    box.addEventListener("click", playPauseAudio );
    box.addEventListener("mouseover", revealType);
    box.addEventListener("mouseleave", hideType);
})

let is_playing = false;

let prev_song = "";

function playPauseAudio() {

    if (is_playing) 
        togglePlayPause(prev_song);
    else
        prev_song = "";
    
    
    if (this.id == "sad" && prev_song != "sad") {
        sad_audio.play();
        is_playing = true;
        prev_song = "sad";
    }
    else if (this.id == "heartbroken" && prev_song != "heartbroken") {
        romantic_audio.play();
        is_playing = true;
        prev_song = "heartbroken"
    }
    else if (this.id == "happy" && prev_song != "happy") {
        happy_audio.play();
        is_playing = true;
        prev_song = "happy";
    }
    else if (this.id == "angry" && prev_song != "angry") {
        angry_audio.play(); 
        is_playing = true;
        prev_song = "angry";
    }
}


function togglePlayPause(song_id) {

    if (song_id == "sad")
        sad_audio.pause();
    else if (song_id == "heartbroken")
        romantic_audio.pause();
    else if (song_id == "happy")
        happy_audio.pause();
    else
        angry_audio.pause();

    is_playing = false;
}

function revealType() {
    this.firstElementChild.style.display = "flex";
}

function hideType() {
    this.firstElementChild.style.display = "none";
}