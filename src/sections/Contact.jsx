import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
      setAlert({ type: "success", text: "Message sent successfully!" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setAlert({ type: "danger", text: "Failed to send message. Please try again." });
    } finally {
      setLoading(false);
      setTimeout(() => setAlert(null), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="c-space section-spacing bg-[#030412]"
    >
      <div className="max-w-7xl mx-auto w-full h-full">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mt-16">
          <div className="xl:col-span-5 flex items-center">
            <div className="w-full flex flex-col gap-7 bg-transparent">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name" className="block mb-2 text-white font-semibold">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name!"
                    required
                    className="w-full px-4 py-3 rounded-md bg-[#191926] text-white border-none outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-white font-semibold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address!"
                    required
                    className="w-full px-4 py-3 rounded-md bg-[#191926] text-white border-none outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-white font-semibold">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-md bg-[#191926] text-white border-none outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-lg transition-all hover:opacity-90"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <span className="ml-2">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96 flex items-center">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden flex items-center justify-center">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
      {alert && <Alert type={alert.type} text={alert.text} />}
    </section>
  );
};

export default Contact;