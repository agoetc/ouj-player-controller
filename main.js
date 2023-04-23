import Player from "@vimeo/player";

window.onload = () => setTimeout(main, 500);

const main = () => {
  const player = getPlayer();

  player
    .setPlaybackRate(1.5)
    .then((_) => {})
    .catch((e) => {
      console.error(e.name);
    });
};

const getPlayer = () => {
  const iframe = document.querySelector("iframe");
  return new Player(iframe);
};
