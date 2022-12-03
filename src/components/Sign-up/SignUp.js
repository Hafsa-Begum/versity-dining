import React from 'react'

const SignUp = () => {
  return (
    <div class="signup">
        <form>
            <label for="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="txt" placeholder="User name" required=""/>
            <input type="text" name="role" placeholder="User role" required=""/>
            <input type="email" name="email" placeholder="Email" required=""/>
            <input type="password" name="pswd" placeholder="Password" required=""/>
            <button>Sign up</button>
        </form>
    </div>
  )
}

export default SignUp