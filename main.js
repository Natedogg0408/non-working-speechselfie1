var SpeechRecognition = window.webkitSpeechReconition; 

var recognition = new SpeechRecognition(); 

function begin()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event){
    console.log(event);

    var Content = event.results[0][0].transcript; 
    console.log(Content); 

    document.getElementById("textbox").innerHTML = Content;
}