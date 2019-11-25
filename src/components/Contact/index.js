import React from 'react';
import {
    ContactWrapper,
    ContactTitle,
    ContactForm,
    ContactFormInput,
    ContactInput,
    ContactTextArea,
    ContactSubmitBtn
} from './styles.js';

const Contact = _ => {
    return (
        <ContactWrapper>
            <div className="container">
                <ContactTitle><span>Drop </span>Me A line</ContactTitle>
                <ContactForm action="" method="">
                    <ContactFormInput>
                        <ContactInput type="text" name="name" placeholder="Type your name" />
                        <ContactInput type="email" name="email" placeholder="Type your email" />
                    </ContactFormInput>
                    <ContactInput type="text" placeholder="Type your Subject" />
                    <ContactTextArea cols="30" rows="10" placeholder="Type your Message" />
                    <ContactSubmitBtn type="submit" value="Send Message" />
                </ContactForm>
            </div>
        </ContactWrapper>
    )
}

export default Contact