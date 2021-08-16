video = ""


function preload() {
    video = createVideo("video.mp4");
    video.hide();
}

function setup() {
   canvas = createCanvas(480,380);
   canvas.position(220,190);
}

function draw() {
   image(video,0,0,480,380);
}

function start() {
   object_detecter = ml5.objectDetector("cocossd",modelLoaded);
   document.getElementById("status").innerHTML = "Status: Detecting objects";
}

function modelLoaded() {
   console.log("Model loaded");
   status = true;
   video.loop();
   video.volume(0);
   video.speed(1);
}