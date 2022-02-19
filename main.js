
Webcam.set({
    width:350,
    height:300,
    image_formate:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });
}
console.log('ml5 version',ml5.versoin);
classifier = ml5.imageClassfier('https://teachablemachine.withgoogle.com/models/YnuGSTbX-/model.json',modelLoaded);