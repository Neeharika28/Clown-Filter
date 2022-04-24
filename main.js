nosex=0;
nosey=0;

function preload(){
    clownnose=loadImage('https://i.postimg.cc/br6WZFz9/Icon-clown-nose.png')
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300)
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function draw(){
    image(video,0,0,300,300);
    image(clownnose,nosex,nosey,30,30);
}

function take_snapshot(){
    save('Filtered_Image');
}

function gotPoses(results){
    if(results.length>0){
        nosex=results[0].pose.nose.x-13;
        nosey=results[0].pose.nose.y-9;
        console.log("nose x = "+ nosex);
        console.log("nose y = "+ nosey);
    }
}