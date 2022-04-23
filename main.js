noseX = 0;
noseY = 0;
mustacheX = 0;
mustacheY = 0;

function preload(){
my_mustache = loadImage("https://i.postimg.cc/vBkS6LbR/mustache.png")
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    
    image(my_mustache, mustacheX - 15, mustacheY + 5, 30, 30);
    
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        mustacheX = results[0].pose.nose.x;
        mustacheY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}