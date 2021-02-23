const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const hero = document.querySelector('.hero');
const announcment = document.querySelector('.Announcement');
const slider = document.querySelector('.slider');

const timeLine= new TimelineMax();

timeLine.fromTo(hero,1,{height:"0%"},{height:"60%"});
timeLine.fromTo(hero,1.5,{width:"100%"},{width:"80%"});
timeLine.fromTo(slider,1,{x:"-100%"},{x:"0%"});
timeLine.fromTo(logo,1,{x:"30"},{x:"0%"});
timeLine.fromTo(hamburger,1,{opacity:"0"},{opacity:"1"});