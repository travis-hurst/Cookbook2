import React from 'react';
import './Timer.css'
import {Tooltip} from "react-tooltip";
import {BsStopwatch} from "react-icons/bs";

function Timer({milliseconds, seconds, minutes, hours, changeSeconds, changeMinutes, changeHours}) {

    return (
        <div class="timerWrapper" data-tooltip-id="my-tooltip" data-tooltip-content="Enter step time and hit play to start timer!">
            <Tooltip id="my-tooltip" />
            <BsStopwatch class="stop-watch"/>
            <div class="d-flex flex-column">
                <label class="label-watch">hr</label>
                <input class="input-watch" value={hours} onChange={changeHours} />
            </div>{" "}
            <div class="d-flex flex-column">
                <label class="label-watch">min</label>
                <input class="input-watch" value={minutes} onChange={changeMinutes} />
            </div>{" "}
            <div class="d-flex flex-column">
                <label class="label-watch">sec</label>
                <input class="input-watch" value={seconds} onChange={changeSeconds} />
            </div>{" "}
        </div>
    )
}

export default Timer