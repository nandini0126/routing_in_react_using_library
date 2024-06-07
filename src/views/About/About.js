import Navbar from "../../components/Navbar/Navbar"
import Button from "../../components/Button/Button"
import "../Home/Home.css"

function About(){
    return(
        <>
        <Navbar />
        <h1 className="heading">About Page</h1>
        <img src="https://cdn-icons-png.flaticon.com/128/15695/15695122.png" className="img"></img>
        <Button page="About page" />
        </>
    )
}

export default About