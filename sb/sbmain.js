const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const songName = document.querySelector("h1");
const artistName = document.querySelector("p");

const songs = [
  {
    title: "S.M. Mahamudul Hossain",
    name: "Secretary of Evnet Management & Logistics",
    source: "",
  },
  {
    title: "Nilonjana Majumder Lien",
    name: "Secretary of Evnet Management & Logistics",
    source: "",
  },
  {
    title: "Showmik Safi",
    name: "Secretary of Evnet Management & Logistics",
    source: "",
  },
  {
    title: "Rudian Ahmed",
    name: "Secretary of Human Resources ",
    source: "",
  },
  {
    title: "MD Sadman Safin Oasif",
    name: "Secretary of Human Resources",
    source: "",
  },
  {
    title: "Md. Tamejul Habib",
    name: "Secretary of Finance",
    source: "",
  },
  {
    title: "Nafisa Islam Ahona",
    name: "Secretary of Creative",
    source: "",
  },
  {
    title: "Shreya Shongbriti",
    name: "Secretary of Creative",
    source: "",
  },
  {
    title: "Avibadhan Das",
    name: "Secretary of Performance (Music)",
    source: "",
  },
  {
    title: "Andalib Mostofa Lalon",
    name: "Secretary of Performance (Music)",
    source: "",
  },
  {
    title: "Rudra Mathew Gomes",
    name: "Secretary of Performance (Music)",
    source: "",
  },
  {
    title: "Syed Ariful Aowan",
    name: "Secretary of Performance (Music)",
    source: "",
  },
  {
    title: "Rubaba Khijir Nusheen",
    name: "Secretary of Performance (Dance)",
    source: "",
  },
  {
    title: "Maria Kamal Katha",
    name: "Secretary of Performance (Dance)",
    source: "",
  },
  {
    title: "Diana Halder",
    name: "Secretary of Performance (Dance)",
    source: "",
  },
  {
    title: "Jubair Rahman",
    name: "Secretary of Performance (Dance)",
    source: "",
  },
  {
    title: "Fabiha Bushra Ali",
    name: "Secretary of Public Relation & Editorial",
    source: "",
  },
  {
    title: "MD. Ahnaf Farhan",
    name: "Secretary of Public Relation & Editorial",
    source: "",
  },
  {
    title: "Khaled Bin Taher",
    name: "Secretary of Public Relation & Editorial",
    source: "",
  },
  {
    title: "Lawrence Clifford Gomes",
    name: "Secretary of Public Relation & Editorial",
    source: "",
  },
  {
    title: "Jareen Tasnim Bushra",
    name: "Secretary of Research & Development ",
    source: "",
  },
  {
    title: "Tasnimul Hasan Samin",
    name: "Secretary of Research & Development ",
    source: "",
  },
  {
    title: "Khairul Hasan Habib",
    name: "Secretary of Marketing, IT & Archive",
    source: "",
  },
  {
    title: "Reshad Ul Karim",
    name: "Secretary of Marketing, IT & Archive",
    source: "",
  },
  {
    title: "Kazi Tawsiat Binte Ehsan",
    name: "Secretary of Administration",
    source: "",
  },
  {
    title: "Amrik Khisa",
    name: "Secretary of Administration",
    source: "",
  },
];

let swiperInstance;
let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {

  if (!song.paused) {

  }
});

song.addEventListener("loadedmetadata", function () {

});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
    swiperInstance.autoplay.start();
  } else {
    pauseSong();
    swiperInstance.autoplay.stop();
  }
}


function nextSong() {
  swiperInstance.autoplay.stop();
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playSong();
}


function previousSong() {
  swiperInstance.autoplay.stop();
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playSong();
}


swiperInstance = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 20,
  coverflowEffect: {
    rotate: 5,
    stretch: 30,
    depth: 100,
    modifier: 2,
    slideShadows: false,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
  on: {
    slideChange: function () {
      currentSongIndex = this.realIndex;
      updateSongInfo();
      if (!song.paused) {
        playSong();
      }
    },
  },
});


updateSongInfo();
