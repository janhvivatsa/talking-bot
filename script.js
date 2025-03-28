let btn=document.querySelector("#btn");
let content=document.querySelector("#content");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    window.speechSynthesis.speak(text_speak)
    text_speak.lang="hi-GB"
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good mornig maam , how may I help you")
    }
    else if(hours>12 && hours <16){
        speak("good afternoon maam , how may I help you")
    }
    else{
        
        speak("Good evening sir ,how may I help you ")
    }
}
window.addEventListener('load',()=>{
    wishMe()  
})
let speakRecognition= window.speakRecognition || window.webkitSpeechRecognition
let recognition =new webkitSpeechRecognition;
recognition.onresult=(event)=>{
    console.log(event)
}
btn.addEventListener("click",()=>{
    recognition.start() 
})

