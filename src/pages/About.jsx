import React from 'react'
import './About.css'
import Card from './Card'
function About() {
  return (
    <div className='about'>
        <Card/>
        <div className='Cpurpose'>
          <h2>Purpose of creating this website</h2>
          <p className='n'>1. I create it for practicing front-end skills</p>
          <p className='n'>2. I'm using React JS library to create this website</p>
          <p className='n'>3. <a href="https://github.com/haiquyhq123/Productivity_Page">Source code</a>(click to Source code to visit my github page)</p>

        </div>
        <div class="instruction">
          <h2>Instructions</h2>
          <p>Pomodoro</p>
          <ol>
            <li className='n'>1. If you want to reset the counter on the Pomodoro page, you should click on the paragraph.</li>
            <li className='n'>2. Every time you finish 25 minutes, the counter will increase by 1.</li>
            <li className='n'>3. Check how many cycles the counter shows, and go to the to-do list page to remove your target if it meets the condition.</li>
          </ol>
          <p className='g'>Thank you!!</p>
      </div>
      
    </div>
  )
}

export default About
