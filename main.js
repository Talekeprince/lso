var chartMsg = document.getElementById('chat-msg');

chartMsg.addEventListener('mouseenter', () => {
    chartMsg.innerHTML = '<i class="bi bi-pencil-fill"></i>'
    chartMsg.style =
        `
    box-shadow: 0 0 5px rgb(53, 106, 253);
    `
    chartMsg.firstElementChild.style =
        `color:  rgb(53, 106, 253);
    `
})

chartMsg.addEventListener('mouseleave', () => {
    chartMsg.innerHTML = '<i class="bi bi-chat-left-fill"></i>'
})


//========================================== onclick track button fuction

var trackingBtn = document.getElementById('tracking-btn');
var trackBox = document.getElementById('track-box');

trackBox.style.visibility = 'hidden'

trackingBtn.addEventListener('click', () => {
    if (trackBox.style.visibility == 'hidden') {
        trackBox.style.visibility = 'visible'
        trackingBtn.style.background = 'black'
    } else {
        trackBox.style.visibility = 'hidden'
        trackingBtn.style.background = 'rgb(0, 79, 250)'
    }
})


var triggerTrackBtn = document.getElementById('track-trigger');
const searchTrackInput = document.getElementById('search-box');

triggerTrackBtn.addEventListener('click', () => {
    if (searchTrackInput.value == '') {
        searchTrackInput.style.border = 'solid red 2px'
    } else if (searchTrackInput.value == 'WPC024345255196-CARGO'
        || 'WPC024345256207-CARGO' || 'WPC024345257318-CARGO'
        || "WPC024345258429-CARGO"
        || "WPC024345250001-CARGO" || 'WPC024345251010-CARGO'
    ) {
        location.replace('tracking.html')
    } else {
        searchTrackInput.style.border = 'solid red 2px'
    }
})


// ====================================menu overlay
const menuBtn = document.querySelector('#nav-menu');
const closeMenuBtn = document.querySelector('.close-menu');
const menuDOM = document.querySelector('.menu');
const menuOverlay = document.querySelector('.menu-overlay');
const menuItems = document.querySelector('.menu-item');
const menuContent = document.querySelector('.menu-contents');
const homeBtn = document.querySelector("#home-btn");

// menu overlay open and close start
menuBtn.addEventListener("click", function () {
    menuOverlay.classList.add("transparentBcg");
    menuDOM.classList.add("showMenu");
})
closeMenuBtn.addEventListener("click", function () {
    menuOverlay.classList.remove("transparentBcg");
    menuDOM.classList.remove("showMenu");
})


var displayChatInput = document.querySelector('chatContentDisplay');