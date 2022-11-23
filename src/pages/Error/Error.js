import { NavLink } from "react-router-dom";
import './Error.css'

function Error() {
    return (
      <div className="error-page">
            <div className="error">
                {/* <h1> This is not the page you are looking for!</h1>
                <p>The page you are looking for doesnt exist. Looks like <br></br> you are in the wrong place. 
                    Let us guide you back!</p> */}
                <NavLink className='home-link' to='/'>
                    <p>Back to home</p>
                </NavLink>
            </div>
        </div>
    );
  }

  export default Error;