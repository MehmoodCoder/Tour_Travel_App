import NavBar from '../Components/NavBar.jsx'
import Hero from '../Components/Hero.jsx'
import Footer from '../Components/Footer.jsx'
import ContactForm from '../Components/ContactForm.jsx'

function Contact(){
    return(
        <>
        <NavBar />
        <Hero 
        cName = "hero-mid"
        heroImg = "https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title = "Contact"
        btnClass = "hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact;