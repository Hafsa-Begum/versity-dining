import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <h1> This is home</h1>
        <Link to="about">Click to view our about page</Link> <br></br>
      <Link to="contact">Click to view our contact page</Link>
      </div>
    );
  }

  export default Home;