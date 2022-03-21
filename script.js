function sequencer() {
    const kick = new Tone.Player("./drums/kick.wav").toDestination();
    const snare = new Tone.Player("./drums/snare.wav").toDestination();
    let index = 0;
  
    Tone.Transport.scheduleRepeat(repeat,"8n");
    Tone.start();
  
    function repeat() {
      let step = index % 8;
      let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`
      );
      if (kickInputs.checked) {
        kick.start();
      let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`
      );
      }
      if (snareInputs.checked) {
        snare.start();
      }
      index++;
    }
  }
  
  sequencer();