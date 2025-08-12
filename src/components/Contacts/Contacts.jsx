import React from "react";
import useContactForm from "./ContactsLogic";
import { FaTelegramPlane } from "react-icons/fa";
import contactImage from "../../assets/image/contacts.png"; // change path

function Contacts() {
  const { formData, handleChange, handleSubmit } = useContactForm();

  return (
    <section className="flex flex-col items-center font-poppins py-8 mt-30">
      <h1 className="text-4xl font-bold mb-6 text">Contact Me</h1>

      {/* Glassmorphism Card */}
      <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full md:w-1/2"
        >
          <input
            type="text"
            name="name"
            placeholder= "Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded-full bg-dust-storm text-dark placeholder-gray-500 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded-full bg-dust-storm text-dark placeholder-gray-500 focus:outline-none"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded-full bg-dust-storm text-dark placeholder-gray-500 focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded-lg bg-dust-storm text-dark placeholder-gray-500 focus:outline-none h-32 resize-none"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-granite-green text-dark px-5 py-2 rounded-full hover:bg-dust-storm transition-colors"
          >
            Send <FaTelegramPlane />
          </button>
        </form>

        {/* Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={contactImage}
            alt="Contact illustration"
            className="max-w-xs w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
