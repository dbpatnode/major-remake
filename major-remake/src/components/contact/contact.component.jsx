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


import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

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

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name" />
            <label>Email</label>
            <input type="email" name="senders_email_address" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default Contact;