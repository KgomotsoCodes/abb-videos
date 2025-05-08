let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: 'auto',
    width: '100%',
    videoId: '9d26hao-twA',
    playerVars: { playsinline: 1 }
  });
}

function seekTo(seconds) {
  if (player && player.seekTo) {
    player.seekTo(seconds, true);
  }
}
