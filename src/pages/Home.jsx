import React, { useEffect, useState } from 'react';
import Digitalclock from './Digitalclock';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './Home.css';
import alarm from "../assets/alarm.mp3"
function Home() {
  const [aim, setAim] = useState(25);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(aim * 60);
  const [num,setNum] = useState(0);
  const [remainingTime, setRemainingTime] = useState(duration);
  useEffect(()=>{
    document.title = `Productivity: ${remainingTime}`
    if(remainingTime===0){
      new Audio(alarm).play();
    }
  },[remainingTime])
  
  function changeBut() {
    if ((aim === 25) && !isPlaying) {
      setAim(5);
      setDuration(5 * 60);
      setNum(num+1);
    } else if ((aim === 5) && !isPlaying) {
      setAim(25);
      setDuration(25 * 60);
    }
  }

  function startBut() {
    setIsPlaying(true);
  }

  function stopBut() {
    setIsPlaying(false);
  }
  function resetNum(){
    setNum(0);
  }
  function resBut(){
    setRemainingTime(1500);
  }

  return (
    <div className="home">
      <h1>Pomodoro</h1>
      <Digitalclock />
      <h2>Aim: {aim} Minutes</h2>
      <p className ="po" onClick={resetNum} >Total Pomodoro You Have Done Tody: {num}</p>
      <p className='t'><span className='no'>Note:</span> (If you dont know to use please read instrucion in about section)</p>
      <p className='t'><span className='no'>Note:</span> (Click to the paragraph to reset the counter)</p>
      <p className='ti'><span className='no'>Note:</span>(Always check your to-do list and hit the finish button to mark your task as done)</p>
      <CountdownCircleTimer
        className="pomodoro"
        isPlaying={isPlaying}
        duration={duration}
        key={duration}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[aim * 60 * 0.7, aim * 60 * 0.5, aim * 60 * 0.2, 0]}
      >
        {({ remainingTime }) => {
          setRemainingTime(remainingTime);
          const minutes = Math.floor(remainingTime / 60);
          const seconds = remainingTime % 60;
          return `${minutes}:${seconds}`;
        }}
      </CountdownCircleTimer>
      <button className='change' onClick={changeBut}>Change</button>
      <button className='start' onClick={startBut}>Start</button>
      <button className='stop' onClick={stopBut}>Stop</button>
    </div>
  );
}

export default Home;
