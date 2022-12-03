import React from 'react'
import './Login.css'

const Login = () =>{
return(
        <div class="login">
			<form>
				<label for="chk" aria-hidden="true">Login</label>
				<input type="email" name="email" placeholder="Email" required=""/>
				<input type="password" name="pswd" placeholder="Password" required=""/>
				<button>Login</button>
			</form>
		</div>
    )
}

export default Login;