import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 1000); // Hide popup after 3 seconds
  };

  return (
    <>
      <Header />
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-8 md:p-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold text-center mb-4">
              Contact Us
            </h1>
            <div>
              <h2 className="text-2xl font-bold">Company Location</h2>
              <p className="text-lg">
                1234 NewsHub Street, New York, NY, 10001
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Phone Number</h2>
              <p className="text-lg">(123) 456-7890</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Email</h2>
              <p className="text-lg">support@newshub.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-white text-gray-900 border rounded-lg shadow-sm"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-white text-gray-900 border rounded-lg shadow-sm"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 bg-white text-gray-900 border rounded-lg shadow-sm"
                  placeholder="Your Message"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {isSubmitted && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-xl text-center">Response Sent!</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
