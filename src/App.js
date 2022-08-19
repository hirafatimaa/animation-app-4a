import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";


function App() {
  const sceneryFrames =   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ];

  const sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity
    
  };

  const sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity
};

  const spriteFrames = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-100%)' }   
  ];

  const { ref: b1, getAnimation: ba1 } = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingBackground
  })

  const { ref: b2, getAnimation: ba2 } = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingBackground
  })

  const { ref: f1, getAnimation: fa1 } = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingForeground
  })

  const { ref: f2, getAnimation: fa2 } = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingForeground
  })

  const { ref: rq, getAnimation: rqa } = useWebAnimations({
    keyframes: spriteFrames,
    timing:{
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 600,
      iterations: Infinity
    },
  })

  const goFaster = () =>{
    const animation1 = ba1()
    const animation2 = ba2()
    const animation3 = fa1()
    const animation4 = fa2()
    const animation5 = rqa()
    animation1.updatePlaybackRate(animation1.playbackRate * 1.1)
    animation2.updatePlaybackRate(animation2.playbackRate * 1.1)
    animation3.updatePlaybackRate(animation3.playbackRate * 1.1)
    animation4.updatePlaybackRate(animation4.playbackRate * 1.1)
    animation5.updatePlaybackRate(animation5.playbackRate * 1.1)
  }

  return (
      <div className="wrapper">
        <div className="sky"></div>
        <div className="earth">
          <div id="red-queen_and_alice">
            <img
              id="red-queen_and_alice_sprite"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
              alt="Alice and the Red Queen running to stay in place."
              ref={rq}
              onClick={goFaster}
            />
          </div>
        </div>

        <div className="scenery" id="foreground1" ref={f1}>
          <img
            id="palm3"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
            alt=" "
          />
        </div>
        <div className="scenery" id="foreground2" ref={f2}>
          <img
            id="bush"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
            alt=" "
          />
          <img
            id="w_rook_upright"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
            alt=" "
          />
        </div>
        <div className="scenery" id="background1" ref={b1}>
          <img
            id="r_pawn_upright"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
            alt=" "
          />
          <img
            id="w_rook"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
            alt=" "
          />
          <img
            id="palm1"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
            alt=" "
          />
        </div>
        <div className="scenery" id="background2" ref={b2} >
          <img
            id="r_pawn"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
            alt=" "
          />

          <img
            id="r_knight"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
            alt=" "
          />
          <img
            id="palm2"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
            alt=" "
          />
        </div>
      </div>
  );
}

export default App;