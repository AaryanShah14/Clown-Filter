noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/FF65pSq7/Clown-Nose.png");
}

function draw(){
image(video, 0, 0, 400, 400);
circle(noseX, noseY, 20);
fill(150, 6, 6);
stroke(161, 79, 8);
}

function setup(){
    canvas=createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO);
video.size(400, 400);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)
}

function take_snapshot(){
    save("myfilterimage.png");
}

function modelLoaded(){
    console.log("poseNet is initilized");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX= " + noseX);
    console.log("noseY= " + noseY);
}
}