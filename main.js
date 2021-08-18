video = ""
objects = [];

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
   if(status != "") {
      object_detecter.detect(video,gotresult);

      for(var i = 0; i < objects.length; i++) {
         document.getElementById("status").innerHTML = "Status: Objects Detected";
         document.getElementById("number-of-objects").innerHTML = "Number of Objects detected are: " + objects.length;
         rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
         fill("#ff0000");
         percent = floor(objects[i].confidence * 100);
         text(objects[i].label + " " + percent + "%", objects[i].x,objects[i].y);
         nofill();
         stroke("#ff0000");
      }
   }
}

function start() {
   object_detecter = ml5.objectDetector("cocossd",modelLoaded);
}

function modelLoaded() {
   console.log("Model loaded");
   status = true;
   video.loop();
   video.volume(0);
   video.speed(1);
}

function gotresult(error,results) {
     if(error) {
        console.log(error);
     }
     else{
        console.log(results);
        objects = results;
     }
}