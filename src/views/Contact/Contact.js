import Navbar from "../../components/Navbar/Navbar"
import Button from "../../components/Button/Button"
import "../Home/Home.css"

function Contact(){
    return(
        <>
        <Navbar />
        <h1 className="heading">Contact Page</h1>
        <img src="https://cdn-icons-png.flaticon.com/128/15866/15866886.png" className="img"></img>
        <Button page="Contact Page" />
        </>
    )
}

export default Contact