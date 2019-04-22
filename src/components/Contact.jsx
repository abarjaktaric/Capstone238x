import React from 'react';
import ContactForm from './ContactForm';
import '../css/Contact.css';
//* rubric79 - Used internal css *//

const Contact = () => {
    return (
        <main>
            <div className="page contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <ContactForm />
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-info">
                                {/* rubric58 - Email and Phone info */}
                                <h2>Contact Info</h2>
                                <img src="img/logo_dark.png" alt="Grocery Cloud" />
                                <div><span>Email:</span>&nbsp;<a href="/">grocerycloud@email.com</a></div>
                                <div><span>Phone:</span>&nbsp;<a href="/">+ 345 01 234-567</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;