let listento=document.querySelector(".listen");
let textarea= document.querySelector(".textarea");

listento.addEventListener("click",()=>{
    let recognition= new webkitSpeechRecognition();
    recognition.lang="en-GB";
    recognition.onresult=(event)=>{
        console.log(event);
        textarea.value=event.results[0][0].transcript;
    }
    recognition.start();
});

let speech= new SpeechSynthesisUtterance();


let voices= [];

let voiceselect=document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () =>
{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];
    voices.forEach((voice,i) => (voiceselect.options[i])= new Option(voice.name ,i));
}
voiceselect.addEventListener("change" ,() =>{
    speech.voice= voices[voiceselect.value];
})
document.querySelector(".convert").addEventListener("click" ,() =>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})