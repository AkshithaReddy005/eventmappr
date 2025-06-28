// Seamless crossfade for hero videos using two video elements
const heroVideos = [
  "https://videos.pexels.com/video-files/4828773/4828773-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/3135808/3135808-hd_1920_1080_24fps.mp4",
  "https://videos.pexels.com/video-files/4055927/4055927-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/1510139/1510139-hd_1920_1080_24fps.mp4",
  "https://videos.pexels.com/video-files/2053565/2053565-hd_1920_1080_24fps.mp4"
];

let current = 0;
let next = 1;

const container = document.querySelector('.video-banner-container');

const videoA = document.createElement('video');
const videoB = document.createElement('video');
[videoA, videoB].forEach(v => {
  v.className = 'background-video-blur hero-fade-video';
  v.autoplay = true;
  v.muted = true;
  v.loop = true;
  v.playsInline = true;
  v.setAttribute('tabindex', '-1');
  v.style.position = 'absolute';
  v.style.top = '0';
  v.style.left = '0';
  v.style.width = '100vw';
  v.style.height = '100vh';
  v.style.minHeight = '600px';
  v.style.objectFit = 'cover';
  v.style.transition = 'opacity 0.85s';
  v.style.zIndex = '0';
  v.style.opacity = '0';
});
videoA.src = heroVideos[current];
container.appendChild(videoA);
container.appendChild(videoB);
videoA.style.opacity = '1';

function crossfadeToNext() {
  const fadeOut = current % 2 === 0 ? videoA : videoB;
  const fadeIn = current % 2 === 0 ? videoB : videoA;
  fadeIn.src = heroVideos[next];
  fadeIn.load();
  fadeIn.oncanplay = () => {
    fadeIn.style.opacity = '1';
    fadeOut.style.opacity = '0';
    fadeIn.oncanplay = null;
    setTimeout(() => {
      current = next;
      next = (next + 1) % heroVideos.length;
    }, 900);
  };
}
setInterval(crossfadeToNext, 2800);
