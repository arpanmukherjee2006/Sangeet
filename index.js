console.log("welcome to Sangeet")

//Inialize the variables
let songIndex = 0;
let audioElement = new Audio('audio/1.mp3');
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('MastersongName');
let songitems = Array.from(document.getElementsByClassName('songitems'));

let songs = [
    { songName: "Meri Zindegi Hai Tu-Jubin nautiyal", filepath: "audio/1.mp3", coverpath: "images/first.jpg" },
    { songName: "Likhe Jo khat Tujhe-Mohammad rafi", filepath: "audio/2.mp3", coverpath: "images/mohammad rafi.jpg" },
    { songName: "Pal Pal Dil Ke Pass-Kishore kumar", filepath: "audio/3.mp3", coverpath: "images/kishore.jpg" },
    { songName: "Tere Bina Zindegi Se Koi-Lata mangeskar", filepath: "audio/4.mp3", coverpath: "images/lata mangeskar.jpg" },
    { songName: "Dil Laga Liya-Alka yagnik", filepath: "audio/5.mp3", coverpath: "images/alka.jpg" },
    { songName: "Ankh Hai Bhari Bhari-Kumar sanu", filepath: "audio/6.mp3", coverpath: "images/kumar sanu.jpg" },
    { songName: "Ek Dilruba Hai-Udit narayan", filepath: "audio/7.mp3", coverpath: "images/udit.jpg" }

]

songitems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innertext = songs[i].songName;

})
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

//  listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `audio/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;

    }
    audioElement.src = `audio/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;

    }
    audioElement.src = `audio/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
