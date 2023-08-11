import { Link } from "react-router-dom";
import { AiFillHome, AiFillFire } from "react-icons/ai";
import { BiWater } from "react-icons/bi";
import { GiHighGrass } from "react-icons/gi";

export default function Footer() {
  return (
    <footer>
      <div id="footer">
        <Link to="/">
          <AiFillHome />
          Home
        </Link>
        <Link to="/blue">
          <BiWater />
          Blue
        </Link>
        <Link to="/red">
          <AiFillFire />
          Red
        </Link>
        <Link to="/green">
          <GiHighGrass />
          Green
        </Link>
      </div>
    </footer>
  );
}
