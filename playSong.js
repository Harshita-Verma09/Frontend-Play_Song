const music = document.querySelector("audio");
const img =  document.querySelector("img");
const play = document.getElementById("play");
const singer = document.getElementById("Singer");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs =[
    {
        name: "akshay",                //photo
        title: "Ek Dilruba Hai",       //title
        singer: "Udit Narayan",        //singer name
    },
    {
        name: "himesh",
        title: "Jhalak Dikhla Ja",
        singer: "Himesh Reshammiya",
    },
    {
        name: "Babaji",
        title: "Radha Soami ji",
        singer: "Gurkirat Singh Dhillon",
    },
]
const loadsong =(songs)=>{
    title.textContent =songs.title;
    singer.textContent =songs.singer;
    music.src ="./image/" +songs.name + ".mpeg";
    img.src ="./image/" +songs.name+".jpg";
};
songIndex = 0;
const nextSong=()=>{
    songIndex  = (songIndex +1)% songs.length;
    loadsong(songs[songIndex]);
    playMusic();
}
const prevSong=()=>{
    songIndex  = (songIndex -1 + songs.length)%songs.length;
    loadsong(songs[songIndex]);
    playMusic();
    
}
next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);


let playbtn = 0;
const playMusic = ()=>{
    music.play();
    play.classList.replace("fa-circle-play", "fa-pause");
    img.classList.add("animate");
    playbtn = 1;
};
const pauseMusic= () => {
    music.pause();
    play.classList.replace( "fa-pause","fa-circle-play");
    img.classList.remove("animate");
    playbtn = 0;
};

play.addEventListener('click', ()=>{
    playbtn ? pauseMusic() : playMusic();
});


// like button
// document.querySelector(".heart").style.color="transparent";
// let icon1 = document.querySelector(".icon1");
// let like = document.querySelector(".like");
// like.addEventListener("click", function(dets){
// document.querySelector(".icon1").style.display="none";
                  //   Change color after Clicked.
// setTimeout(function(){
//     document.querySelector(".heart").style.display="";
//     document.querySelector(".heart").style.color="red";
//     document.querySelector(".heart").style. marginLeft ="19.1px";
//   },10);
// });


