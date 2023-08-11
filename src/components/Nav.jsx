import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
    </div>
  );
}
