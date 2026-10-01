import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function FormsFooter() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<string>("");


  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setStatus("");

    try {
              const SERVICE_ID = "service_6s0te4a"; 
              const TEMPLATE_ID = "template_z9bn1v9"
              const PUBLIC_KEY = "rxwv2S76NEeJm4z0v";        


      // Sign up at emailjs.com to get these three keys
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current!,
        PUBLIC_KEY,
      );

      setStatus("Message sent successfully! 🎉");
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Error sending message. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact">
      <div className="forms-info">
        <p>FORM</p>
        <h2>
          Get In <span>Touch</span>
        </h2>
      </div>

      <form ref={formRef} className="input-container" onSubmit={handleSubmit}>
        <div className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Phone" maxLength={10} />
          </div>
          <div className="form-group">
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
        </div>

        <div className="forms-two">
          <textarea
            name="message"
            placeholder="Message"
            className="message-inbox"
            required
          />
          <button type="submit" className="message-box" disabled={isSending}>
            <p>{isSending ? "Sending..." : "Send a Message"}</p>
          </button>
        </div>
      </form>
      {status && <p className="form-status">{status}</p>}
    </section>
  );
}
