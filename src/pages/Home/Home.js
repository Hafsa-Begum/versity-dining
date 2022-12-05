import { Link } from "react-router-dom";
import MenuItem from "../../components/MenuItem/MenuItem";

function Home() {
    return (
      <div>
        <MenuItem/>
        <Link to="about">Click to view our about page</Link> <br></br>
      <Link to="contact">Click to view our contact page</Link>
      </div>
    );
  }

  export default Home;