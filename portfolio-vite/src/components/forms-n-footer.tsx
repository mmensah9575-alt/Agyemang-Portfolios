 import { useState } from "react";


function FormsFooter() {
    const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");


    



  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setIsSending(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("Message sent successfully! 🎉");

      form.reset();

    } catch (error)
     {
      console.log(error)
      setStatus(
        "Something went wrong. Please try again."
      );

    } finally {
      setIsSending(false);
    }
  }

return(
  <>
    <section>

      <div className="forms-info">

        <p>FORM</p>

        <h2>
          Get In <span>Touch</span>
        </h2>

      </div>


      <form
        className="input-container"
        onSubmit={handleSubmit}
      >

        {/* First side */}
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
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>


          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              maxLength={10}
            />
          </div>


          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
          </div>

        </div>


        {/* Second side */}
        <div className="forms-two">

          <textarea
            name="message"
            placeholder="Message"
            className="message-inbox"
            required
          ></textarea>


          <button
            type="submit"
            className="message-box"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

        </div>

      </form>


      {/* Status message */}
      {status && (
        <p className="form-status">
          {status}
        </p>
      )}

    </section>
 


      <footer id="contact">
        <div className="footer-section">
          <div>
            <p>
              Copyright ©<strong>Ephraim </strong> all rights reserved. Powered
              by{" "}
              <a href="https://orctatech.com/" className="orcta">
                Orcta
              </a>
            </p>
          </div>
          <div className="Privacy-terms">
            <a>Privacy Policy</a>
            <a>Terms and Conditions</a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default FormsFooter