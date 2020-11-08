import React from "react";
import ReactDOM from 'react-dom';
import App from './components/app'

ReactDOM.render(
    <App name="zoe" />,
    document.getElementById('app')
)

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    setTime(d: Date): void;
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {

    }
    setTime(d: Date): void {
        console.log(d)
    }
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
    constructor(m: number, h: number) {}
    setTime(d: Date) {}
}

function createClock(
    ctor: ClockConstructor,
    h: number,
    m: number
): ClockInterface {
    return new ctor(h, m)
}

let digital = createClock(DigitalClock, 34, 43)









