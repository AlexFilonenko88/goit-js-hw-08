import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

const x = localStorage.getItem("videoplayer-current-time");
const y = JSON.parse(x);

player.on("timeupdate", throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
};

player.setCurrentTime(y);
