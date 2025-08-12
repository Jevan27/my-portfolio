import { useState } from "react";
import emailjs from "emailjs-com";

export default function useContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_wbpwa6m", // from EmailJS dashboard
        "template_xljbt37", // from EmailJS dashboard
        formData,
        "LcQZoDXG7eueEomoD" // from EmailJS dashboard
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return { formData, handleChange, handleSubmit };
}
