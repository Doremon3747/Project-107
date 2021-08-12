function start_classification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/t30pthKM0/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    console.log("got Result");
}


