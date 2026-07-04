import "./ContactForm.css"

function ContactForm(){
    return (
        <>
        <div className="form-container">
            <h1>Send a message to us</h1>
            <form action="">
                <input placeholder="Enter Name" />
                <input placeholder="Enter Email" />
                <input placeholder="Enter Subject" />
                <textarea placeholder="Message ..." rows="4"></textarea>
                <button>Send</button>
            </form>
        </div>
        </>
    )
}

export default ContactForm;