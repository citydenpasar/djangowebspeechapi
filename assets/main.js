if (!'webkitSpeechRecognition' in window) {
    alert('Speech  Recognition Not Available')
}

let SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition
let SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList
let SpeechRecognitionEvent =
    window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent

let recognition = new SpeechRecognition()

recognition.continuous = true;
recognition.interimResults = false;
recognition.lang = 'id'

// recognition.onstart = () => {
//     console.log('start...')
// };
// recognition.onend = () => {
//     console.log('end...')
// };

recognition.onError = () => {
    console.log('error.....')
}
recognition.onresult = () => {
    console.log(event.results)

    let textResult = ''
    // for (let i = 0; i < event.results.length; i++) {
    //     textResult += event.results[i][0].transcript
    // }
    textResult = event.results[event.results.length -1][0].transcript;

    console.log(textResult);
    var txt = document.createElement("p")

    txt.innerHTML = textResult;
    document.getElementById("result").insertAdjacentElement('beforeend', txt);
}

document.querySelector('#start').onclick = () => {
    // Start the Speech Recognition
    recognition.start()
}
// Set the onClick property of the stop button
document.querySelector('#stop').onclick = () => {
    // Stop the Speech Recognition
    recognition.stop()
}
