import React, { Component } from 'react';
import '../css/Form.css';

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            subject: "placeholder",
            message: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        //* rubric60 - Input values *//
        var name = this.state.name;
        var email = this.state.email;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var subject = this.state.subject;
        var message = this.state.message;
        //* rubric60 - Alert based of input*//
        const alertMessage = 'Send Message:\n\nName - ' + name + '\nEmail - ' + email + '\nSubject - ' + subject + '\nMessage - ' + message;
        
        //* rubric61 - Form validation *//
        var errors = [];
        var showErrors = document.getElementById("contact-errors");

        if (name === "" || name.length < 3) {
            errors.push("Please provide your name");
        } else if (email === "" || !email.match(mailformat)) {
            errors.push("Please provide correct email");
        } else if (subject === "placeholder") {
            errors.push("Please select Subject!");
        } else if (message === "" || message.length < 6) {
            errors.push("Your Message is too short");
        }

        //* rubric61 - If form is nod valid display errors *//
        if (errors.length > 0) {
            showErrors.innerHTML = errors;
        } else {
            alert(alertMessage);
        }
    }

    render() {
        const optionsValues = [
            'Shipping', 'Product isues', 'New In', 'Other'];

        const options = optionsValues.map((value, index) => {
            return <option key={index} value={value}>{value}</option>
        })

        return (
            <section>
                {/* rubric57- Form */}
                <form className="form-contact" onSubmit={this.handleSubmit}>
                    <div className="form-header">
                        <h3>Contact us</h3>
                        <h2>We are here For all your questions</h2>
                    </div>
                    <div className="form-content">
                        {/* rubric57 - Input fields for Name and Email with placeholders */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleChange} />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange} />
                        {/* rubric57 - Dropdown list for subject with placeholder */}
                        <select
                            name="subject"
                            value={this.state.subject}
                            onChange={this.handleChange}>
                            <option value='placeholder' disabled id="disabled-value">Subject</option>
                            {options}
                        </select>
                        {/* rubric57 - Textarea with placeholder */}
                        <textarea
                            type="text"
                            name="message"
                            placeholder="Message"
                            value={this.state.message}
                            onChange={this.handleChange}>
                        </textarea>
                    </div>
                    <div className="form-footer">
                        <div className="form-errors" id="contact-errors"></div>
                        {/* rubric59 - Button labeled Send */}
                        <button className="btn btn-primary right" type="submit">Send</button>
                    </div>
                </form>
            </section>
        );
    }
}

export default ContactForm;