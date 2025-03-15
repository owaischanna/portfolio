import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./css/ContactForm.css";
import { FaCheckCircle } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_1c9ew4g";
    const templateID = "template_u6x9y2u";
    const userID = "nqUOQGCgaZ4ck8TrH";

    const templateParams = {
      user_name: formData.name, // Make sure to use 'user_name' in your template
      user_email: formData.email, // Use 'user_email' in your template
      user_message: formData.message, // Use 'user_message' in your template
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (result) => {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSent(false), 5000); // Hide the icon after 5 seconds
      },
      (error) => {
        alert("An error occurred, please try again.");
      }
    );
  };

  return (
    <section className="contact-form" id="contact">
      <h2 className="form-title">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-input"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      {isSent && (
        <div className="success-message">
          <FaCheckCircle className="success-icon" /> Message sent successfully!
        </div>
      )}
    </section>
  );
};

export default ContactForm;

// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import "./css/ContactForm.css";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Replace with your actual values
//     const serviceID = "service_1c9ew4g";
//     const templateID = "template_u6x9y2u";
//     const userID = "nqUOQGCgaZ4ck8TrH";

//     emailjs.send(serviceID, templateID, formData, userID).then(
//       (result) => {
//         alert("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       },
//       (error) => {
//         alert("An error occurred, please try again.");
//       }
//     );
//   };

//   return (
//     <section className="contact-form" id="contact">
//       <h2 className="form-title">Get in Touch</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <div className="form-group">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className="form-input"
//           ></textarea>
//         </div>
//         <button type="submit" className="submit-button">
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// };

// export default ContactForm;

// import React, { useState } from "react";
// import "./css/ContactForm.css";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can add functionality to send form data here
//     alert("Form submitted!");
//     setFormData({ name: "", email: "", message: "" }); // Reset form
//   };

//   return (
//     <section className="contact-form" id="contact">
//       <h2 className="form-title">Get in Touch</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <div className="form-group">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className="form-input"
//           ></textarea>
//         </div>
//         <button type="submit" className="submit-button">
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// };

// export default ContactForm;
