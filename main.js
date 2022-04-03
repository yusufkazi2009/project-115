function preload(){
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = creeateCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Intialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw(){
    Image(video, 0, 0, 300, 300);
}

function take_snapshot(){
    save("my_picture.png");
}