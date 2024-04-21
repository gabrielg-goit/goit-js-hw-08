import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = throttle(function (data) {
  const actualTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', actualTime);
}, 1000);

player.on('timeupdate', onPlay);

const startAgain = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(startAgain);
