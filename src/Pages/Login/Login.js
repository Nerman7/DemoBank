import React from 'react'
import leonus from '../../assets/img_leonus_logo.svg'
import  './login.css'
import Button from '../../components/login/Button'
import bacgroundVideo from '../../assets/login_video.mp4'

export default function Login() {
  return (
    <div className='loginPage'>
        <video autoPlay loop muted playsInline className="myVideo">
        <source src={bacgroundVideo} type='video/mp4'></source>
        </video>
        <div className='centerPage'> 
        <img className='logoImg' src={leonus} alt='Please wait'></img>
        <h1>Welcome</h1>
        <h3>Please enter your credentials to login.</h3>
        <form className='loginPassAndMail'>
            <input className='loginInputs' placeholder='Your e-mail adress' type='text'></input> 
            <input className='loginInputs' placeholder='Your password' type='text'></input>
            <h3>Forgot your password?</h3>
            <a href=''>Click here to reset</a>
             <Button/>
        </form>
       
        </div>
    </div>
  )
}
