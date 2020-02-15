"use strict";
var audioContext = new AudioContext();
window.onload = function() {
    var onOff = document.getElementById("on-off");
    var span = document.getElementsByTagName("span")[0];
    var osc = false;
    var waveformTypes = document.getElementsByTagName('li');
    var selectedWaveform = "sawtooth";
    var freqSliderVal = document.getElementById("freq-slider").value;

    function select() {
        selectedWaveform = document.getElementById(this.id).id;
        var selectedWaveformElement = document.getElementById(this.id);

        for (var i = 0; i < waveformTypes.length; i += 1) {
            waveformTypes[i].classList.remove("selected-waveform");
            }
            /*_____________________________________END remove any previously
            added selected-waveform classes*/
            /*_____________________________________BEGIN add the selected-
            waveform class to the selected element*/
            selectedWaveformElement.classList.add("selected-waveform");
            /*_____________________________________END add the selected-
            waveform class to the selected element*/
        console.log(selectedWaveform); // Outputs id
        }
    for (var i = 0; i < waveformTypes.length; i++) {
        waveformTypes[i].addEventListener('click', select, false);
        }
    setInterval(function() {
        if (!osc) {
        console.log("Oscillator is stopped. Waiting for oscillator to start");
        } else {
        freqSliderVal = document.getElementById("freq-slider").value;
        osc.frequency.value = freqSliderVal*10;
        osc.type = selectedWaveform;
        console.log("Oscillator is playing. Frequency value is " +
        freqSliderVal*10);
        }
    }, 500);

    console.log(freqSliderVal);
    onOff.addEventListener("click", function() {
        if(!osc) {
            console.log("osc", osc)
            osc = audioContext.createOscillator();

            osc.frequency.value = freqSliderVal*10;
            osc.connect(audioContext.destination);
            osc.start(audioContext.currentTime);
            onOff.value = "stop";
            span.innerHTML = "Click to stop oscillator";
        } else {
            console.log(osc)
            osc.stop(audioContext.currentTime);
            osc = false;
            onOff.value = "start";
            span.innerHTML = "Click to start oscillator";
        }
    });
};

// "use strict";
// var audioContext = new AudioContext();
// window.onload = function() {
//     var onOff = document.getElementById("on-off");
//     var span = document.getElementsByTagName("span")[0];


//     //_________________________________________BEGIN set initial osc state to false
//     var osc = false;
//     //_________________________________________END set initial osc state to false


//     onOff.addEventListener("click", function() {
//         //_____________________________________BEGIN Conditional statement to check if osc is TRUE or FALSE


//         if (!osc) { //_________________________Is osc false? If so then create and assign oscillator to osc variable and play it.
//             osc = audioContext.createOscillator();
//             osc.type = "sawtooth";
//             osc.frequency.value = 300;
//             osc.connect(audioContext.destination);
//             osc.start(audioContext.currentTime);
//             onOff.value = "stop";
//             span.innerHTML = "Click to stop oscillator";
//             //_________________________________Otherwise stop it and reset osc to false for next time.
//         } else {

//             osc.stop(audioContext.currentTime);
//             osc = false;
//             onOff.value = "start";
//             span.innerHTML = "Click to start oscillator";
//         }
//         //_____________________________________END Conditional statement to check if osc is TRUE or FALSE
//     });
// };