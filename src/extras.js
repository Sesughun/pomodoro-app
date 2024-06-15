<div className="offcanvas offcanvas-end" id="demo1">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title">Create Timer</h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>Some text lorem ipsum.</p>
          <p>Some text lorem ipsum.</p>
          <p>Some text lorem ipsum.</p>
          <button className="btn btn-secondary" type="button">
            A Button
          </button>
        </div>
      </div>
      <div className="container-fluid mt-3">
        <h3>Right Offcanvas</h3>
        <p>
          The .offcanvas-end class positions the offcanvas to the right of the
          page.
        </p>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#demo1"
        >
          Toggle Right Offcanvas
        </button>
      </div>





const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const addTimer = () => {};




  what if I am using react and bootstrap and I used a card. If i right click the card, a menu should show what I want to do  to it.

  

  //import React, { useContext } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
//import TimerContext from "./TimerContext";

//function AddTimer({ addComponent }) {
// const { setWorkMinutes, setBreakMinutes } = useContext(TimerContext);

//return (
//<div>
//<button
//type="button"
//className="btn btn-primary rounded-circle floating-button"
//data-bs-toggle="offcanvas"
//data-bs-target="#demo1"
//>
// +
//</button>
//
//    <div className="offcanvas offcanvas-end" id="demo1">
//    <div className="offcanvas-header">
//    <h1 className="offcanvas-title">Create Timer</h1>
//  <button
//  type="button"
//className="btn-close"
//            data-bs-dismiss="offcanvas"
//        ></button>
//    </div>
//  <div className="offcanvas-body">
//  <div className="side-by-side">
//  <h3>Title:</h3>
//<input type="text" className="" />
//</div>
//<div>
//          <input
//          type="number"
//        max={300}
//      min={20}
//    onChange={() => setWorkMinutes}
///>
//         </div>
//          <div className="side-by-side">
//          <h3>Break</h3>
//        <input
//        type="number"
//      max={60}
//   min={5}
//  onChange={() => setBreakMinutes}
///>
//</div>
//          <button
//          onClick={addComponent}
//       className="btn btn-danger"
//       type="button"
//   >
//   Create
//</button>
//        </div>
//    </div>
//</div>
//  );
//}

//export default AddTimer;




// import React, { useContext } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import TimerContext from "./TimerContext";

// function AddTimer({ addComponent }) {
//   const { setWorkMinutes, setBreakMinutes } = useContext(TimerContext);

//   return (
//     <div>
//       <button
//         type="button"
//         className="btn btn-primary rounded-circle floating-button"
//         data-bs-toggle="offcanvas"
//         data-bs-target="#demo1"
//       >
//         +
//       </button>

//       <div className="offcanvas offcanvas-end" id="demo1">
//         <div className="offcanvas-header">
//           <h1 className="offcanvas-title">Create Timer</h1>
//           <button
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="offcanvas"
//           ></button>
//         </div>
//         <div className="offcanvas-body">
//           <div className="side-by-side">
//             <h3>Title:</h3>
//             <input type="text" className="" />
//           </div>
//           <div>
//             <h3>Work:</h3>
//             <input
//               type="number"
//               max={300}
//               min={20}
//               onChange={() => setWorkMinutes}
//             />
//           </div>
//           <div className="side-by-side">
//             <h3>Break</h3>
//             <input
//               type="number"
//               max={60}
//               min={5}
//               onChange={() => setBreakMinutes}
//             />
//           </div>
//           <button
//             onClick={addComponent}
//             className="btn btn-danger"
//             type="button"
//           >
//             Create
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddTimer;




// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import Play from "./Play";
// import Pause from "./Pause";
// import { useContext, useState, useEffect } from "react";
// import TimerContext from "./TimerContext";

// function Timer() {
//   const timerInfo = useContext(TimerContext);

//   const [isPaused, setIsPaused] = useState(true);
//   const [isBreak, setBreak] = useState(false);
//   const [mode, setMode] = useState("work");
//   const [secondsLeft, setSecondsLeft] = useState(timerInfo.workMinutes * 60);

//   useEffect(() => {
//     let interval = null;

//     if (!isPaused) {
//       interval = setInterval(() => {
//         if (secondsLeft === 0) {
//           const nextMode = mode === "work" ? "break" : "work";
//           const nextSeconds =
//             nextMode === "work"
//               ? timerInfo.workMinutes * 60 && setBreak(false)
//               : timerInfo.breakMinutes * 60 && setBreak(true);

//           setMode(nextMode);
//           setSecondsLeft(nextSeconds);
//         } else {
//           setSecondsLeft(secondsLeft - 1);
//         }
//       }, 1000);
//     }

//     return () => clearInterval(interval);
//   }, [isPaused, secondsLeft, mode, timerInfo]);
//   const playTimer = () => {
//     setIsPaused(false);
//     // nextMode = "work";

//     console.log("i was clicked");
//   };
//   const pauseTimer = () => {
//     setIsPaused(true);
//     // nextMode = "work";

//     console.log("i was clicked");
//   };
//   const totalSeconds =
//     mode === "work" ? timerInfo.workMinutes * 60 : timerInfo.breakMinutes * 60;
//   const percentage = Math.round((secondsLeft / totalSeconds) * 100);
//   const minutes = Math.floor(secondsLeft / 60);
//   let seconds = secondsLeft % 60;
//   if (seconds < 10) seconds = "0" + seconds;

//   return (
//     <div>
//       <div className="card">
//         <div className="card-header">
//           <input type="text" className="inputBox1" />
//         </div>

//         <div className="card-body">
//           {isBreak ? <h2>Break:</h2> : <h2>Work:</h2>}
//           <br />
//           <CircularProgressbar
//             value={percentage}
//             text={minutes + ":" + seconds}
//             styles={buildStyles({
//               textColor: "blue",
//               pathColor: "darkblue",
//               trailColor: "grey",
//             })}
//           />
//         </div>

//         <div className="card-footer">
//           <div>
//             {isPaused ? (
//               <Play onClick={playTimer} className="btn btn-primary" />
//             ) : (
//               <Pause onClick={pauseTimer} className="btn btn-primary" />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Timer;


const Quotes = () => {
  return (
    <>
      <div
        id="demoxx"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner carousel-vertical">
          <div class="carousel-item active">
            <div className="mb3">
              <div className="card floating-card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <h5 className="card-footer">Whomever</h5>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div className="mb3">
              <div className="card floating-card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <h5 className="card-footer">Whomeve22r</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#demoxx"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#demoxx"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
};
export default Quotes;


