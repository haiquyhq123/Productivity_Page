import React from 'react'
import me from '../assets/me.jpg';
import './About.css'
function Card() {
    function fb(){

        location.replace('https://www.facebook.com/quy.hai.77312/');

    }
  return (
    <div className='card-quy'>
        <h2>Name: Bui Le Hai Quy</h2>
        <img src={me} alt="Picture of Myself" onClick={()=>(fb())}/>
        <p className='j'>(Click to my image to contact with me)</p>
        <p>Hello, I'm an author of this website</p>
        <p>Currently, I'm a student of Conestoga colloge in Canada</p>
        <p>My major is Software Engineer Technology</p>
    </div>
  )
}

export default Card
