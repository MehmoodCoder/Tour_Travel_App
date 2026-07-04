import NavBar from '../Components/NavBar.jsx'
import Hero from '../Components/Hero.jsx'
import Footer from '../Components/Footer.jsx'
import Trip from "../Components/Trip.jsx"

function Services(){
    return(
        <>
        <NavBar />
        <Hero 
        cName = "hero-mid"
        heroImg = "https://images.unsplash.com/photo-1570692111688-be3d16f59c1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title = "Services"
        btnClass = "hide"
        />
        <Trip/>
        <Footer/>
        </>
    )
}

export default Services;