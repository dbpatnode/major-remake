// import React, { Component } from 'react';
// // import BlogItem from '../blog-item/blog-item.component';
// import ComingSoon from '../coming-soon/coming-soon.component';
// import './contact.style.scss';

// export default class Blogs extends Component {
//     render() {
//         return (
//             <div className="blogs-container">
//                 <ComingSoon page={"CONTACT"} />
//             </div>
//         )
//     }
// }


import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.style.scss';

const Contact = () => {
    const form = useRef();



    const SERVICE_KEY = process.env.REACT_APP_EMAILJS_SERVICE_KEY
    const TEMPLATE_KEY = process.env.REACT_APP_EMAILJS_TEMPLATE_KEY
    const USER_KEY = process.env.REACT_APP_EMAILJS_USER_KEY
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_KEY, TEMPLATE_KEY, form.current, USER_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    // const [firstname, setFirstname] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function SubmitButton() {
        if (name && email) {
            return <input type="submit" value="Send" />
        } else {
            return <input type="submit" value="Send" disabled />
        };
    };

    return (
        <div className="contact">
            <h2>Have a question or just want to reach out? Let's get in touch!</h2>
            <form classref={form} onSubmit={sendEmail} className="email-form">

                <label className="email-form-label">Your Name: </label>
                <input type="text" name="from_name" value={name} onChange={e => setName(e.target.value)} required />
                <label className="email-form-label">Email: </label>
                <input type="email" name="senders_email_address" value={email} onChange={e => setEmail(e.target.value)} required />


                <label className="email-form-label">Talk to me: </label>
                <textarea className="email-message-box" name="message" />
                <SubmitButton />

            </form >
        </div >

    );
};

export default Contact;