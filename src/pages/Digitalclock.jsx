import React, { useEffect, useState } from 'react'
import './Digitalclock.css'
function Digitalclock() {
    const [time,setTime] = useState(new Date())
    useEffect(()=>{
        const interval = setInterval(()=>(setTime(new Date())),1000);
        return ()=>{
            clearInterval(interval);
        }

    },[]);
    function timeChange(){
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();
        let note = hour>=12 ? 'PM':'AM';
        hour = hour % 12 || 12;
        return `${timeFormat(hour)}:${timeFormat(minute)}:${timeFormat(second)} ${note}`
    }
    function timeFormat(Number){
        return (Number<10 ? "0"+Number:Number);
        

    }
    return (
        <div className='digital-container'>
            <div className="clock">
                <span>{timeChange()}</span>
            </div>  
        </div>
    )
}

export default Digitalclock
