var audioContext = new AudioContext(); //___Initializes web audio api
function playOsc(oscType, freq, time, duration) {
	var osc = audioContext.createOscillator();
	if (oscType == undefined) {
		oscType = "sine"
	}
	osc.type = oscType;
	osc.frequency.value = freq; //____freq is a parameter
	osc.connect(audioContext.destination);
	osc.start(audioContext.currentTime + time);
	osc.stop(audioContext.currentTime + time + duration)
}


for(i = 0; i < 13; i++) {
	fre = 50*Math.pow(2, (1/12)*i)
	playOsc("sine", fre, i+1, 0.5)
}