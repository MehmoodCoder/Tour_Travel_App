import NavBar from '../Components/NavBar.jsx'
import Hero from '../Components/Hero.jsx'
import Destination from '../Components/Destination.jsx';
import Trip from '../Components/Trip.jsx';
import Footer from '../Components/Footer.jsx';
function Home(){
    return(
        <>
        <NavBar />
        <Hero 
        cName = "hero"
        heroImg = "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title = "Welcome to Our Tour App"
        text = "Discover amazing destinations with our expertly crafted tours."
        url = "/"
        buttonText = "Explore Now"
        btnClass = "show"
        />
        <Destination />
        <Trip />
        <Footer />
        </>
    )
}

export default Home;