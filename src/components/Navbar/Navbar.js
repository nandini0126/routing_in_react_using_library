import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/contact" className="link">Contact</Link>
    </div>
  )
}

export default Navbar