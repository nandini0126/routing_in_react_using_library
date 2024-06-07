import Navbar from "../../components/Navbar/Navbar"
import Button from "../../components/Button/Button"
import "./Home.css"
function Home(){
    return(
        <>
        <Navbar />
        <h1 className="heading">Home Page</h1>
        <img src="https://cdn-icons-png.flaticon.com/128/8843/8843462.png" className="img"></img>
        <Button page="Home page" className="button" />
        </>
    )
}

export default Home