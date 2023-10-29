import React, { useState, useEffect } from 'react';
import Timer from "./Timer";
import { BsFillPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";

function CountdownTimer() {
  
  // Used to check countdown time
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  // Check if timer is in start/stop
  const [isRunning, setIsRunning] = useState(null);

  // Use effect starts as soon as page starts
  useEffect(() => {
    let interval;

    // Starts and stops interval of countdown
    if(isRunning){
      // If countdown running decrement time
      interval = setInterval(()  =>  {
        if (milliseconds > 0) {
            setMilliseconds((milliseconds) => milliseconds - 1);
        } else if (seconds > 0) {
            setSeconds((seconds) => seconds - 1);
            setMilliseconds(99);
        } else if (minutes > 0) {
            setMinutes((minutes) => minutes - 1);
            setSeconds(59);
            setMilliseconds(99);
        } else if (hours > 0) {
            setHours((hours) => hours - 1);
            setMinutes(59);
            setSeconds(59);
            setMilliseconds(99);
        }

      }, 10); // Interval 10 for milliseconds
    }

    if(hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 0 ) {
      resetTimer();
    }
  
    return () => clearInterval(interval);

  // Return everything established in isRunning
  }, [milliseconds, seconds, minutes, hours, isRunning]);

  // Start, Pause, Stop Functions

    // Start
    function startTimer() {
      if(hours !== 0 || minutes !== 0 || seconds !== 0 || milliseconds !== 0 ) {
        setIsRunning(true);
      } 
    }

    // Pause
    function pauseTimer() {
        setIsRunning(false);
    }

    // Pause
        function stopTimer() {
          resetTimer();
      }

    // Reset
      function resetTimer() {
        setIsRunning(false);
        setMilliseconds(0);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

  // Handlers
    const changeSeconds = (e) => {
      setSeconds(e.target.value)
    }

    const changeMinutes = (e) => {
      setMinutes(e.target.value)
    }

    const changeHours = (e) => {
      setHours(e.target.value)
    }


  return ( 
        <div class="timer-helper">
          <Timer 
            seconds={seconds} 
            minutes={minutes} 
            hours={hours}
            changeSeconds={changeSeconds}
            changeMinutes={changeMinutes}
            changeHours={changeHours}
          />
          {!isRunning && (
            <button style={{marginLeft: '300px'}} type="button" class="btn big-btn btn-primary active" onClick={startTimer}>
              <BsFillPlayFill />
            </button>)}
            {isRunning && (
            <button style={{marginLeft: '300px'}} type="button" class="btn big-btn btn-primary" onClick={pauseTimer}>
              <BsPauseFill />
            </button>)}{" "}
            <button type="button" class="btn big-btn btn-secondary" onClick={stopTimer}>
              <BsStopFill />
            </button>
        </div>
    );
  }

export default CountdownTimer
  