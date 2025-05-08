let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '100%',
    videoId: 'dQw4w9WgXcQ',
    playerVars: { playsinline: 1 }
  });
}

function seekTo(seconds) {
  if (player && player.seekTo) {
    player.seekTo(seconds, true);
  }
}
