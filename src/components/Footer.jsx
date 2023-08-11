import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div id="footer">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
    </footer>
  );
}
