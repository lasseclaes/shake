//uses https://github.com/alexgibson/shake.js to listen for the shake event
window.onload = function() {
    document.getElementById("dev-1").innerHTML = "V. 3";
    //create a new instance of shake.js.
    var myShakeEvent = new Shake({
        threshold: 15
    });

    // start listening to device motion
    myShakeEvent.start();

    // register a shake event
    window.addEventListener('shake', shakeEventDidOccur, false);

    //shake event callback
    function shakeEventDidOccur () {
      var which = Math.floor(Math.random() * 3) + 1;
      var ssp = "";
      if (which === 1){
          ssp = "sten";
        }
      else if (which === 2){
          ssp = "saks";
        }
      else{
          ssp = "papir";
        }
      //alert (which);
      alert (ssp);
    }
};
