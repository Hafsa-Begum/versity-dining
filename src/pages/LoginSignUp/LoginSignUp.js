import React from 'react'
import Login from '../../components/Login/Login'
import SignUp from '../../components/Sign-up/SignUp'
import './LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='body'>
	<div className='left-side'>
        <img src='/images/login.png' alt=''/>
    </div>
    <div className="right-side">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
        
            <div className='signup'>
            {/* <label for="chk" aria-hidden="true">Sign up</label> */}
                <SignUp/>
            </div>
            <div className='login'>
            {/* <label for="chk" aria-hidden="true">Login</label> */}
                <Login/>
            </div>
        
    </div>
    </div>
  )
}

export default LoginSignUp