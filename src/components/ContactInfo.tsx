import React, { useState } from "react";
import "../ContactInfo.css"; // Ensure this path is correct

const ContactInfo: React.FC = () => {
  const [notification, setNotification] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setNotification(`Copied to clipboard: ${text}`);
      // Hide notification after 3 seconds
      setTimeout(() => setNotification(null), 3000);
    });
  };

  return (
    <>
      {notification && <div className="notification">{notification}</div>}
      <div className="contact-info">
        <div className="contact-group">
          <div className="contact-item">
            <img
              src="/phoneSymb.jpg"
              alt="Phone Icon"
              className="contact-icon"
              onClick={() => copyToClipboard("206-612-6797")}
              style={{ cursor: "pointer" }} // Indicate that it's clickable
            />
            <a href="tel:206-612-6797" className="contact-link">
              206-612-6797
            </a>
          </div>
          <div className="contact-item">
            <img
              src="/emailsymbol.jpg"
              alt="Email Icon"
              className="contact-icon"
              onClick={() => copyToClipboard("arivkannagi@gmail.com")}
              style={{ cursor: "pointer" }} // Indicate that it's clickable
            />
            <a href="mailto:arivkannagi@gmail.com" className="contact-link">
              arivkannagi@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-group">
          <div className="contact-item">
            <img
              src="/linkedinSymb.jpg"
              alt="LinkedIn Icon"
              className="contact-icon"
              onClick={() =>
                copyToClipboard("https://www.linkedin.com/in/arivarasanvk/")
              }
              style={{ cursor: "pointer" }} // Indicate that it's clickable
            />
            <a
              href="https://www.linkedin.com/in/arivarasanvk/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
          </div>
          <div className="contact-item">
            <img
              src="/wasymb.jpg"
              alt="WhatsApp Icon"
              className="contact-icon"
              onClick={() => copyToClipboard("https://wa.me/+12066126797")}
              style={{ cursor: "pointer" }} // Indicate that it's clickable
            />
            <a
              href="https://wa.me/+12066126797"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              WhatsApp
            </a>
          </div>
          <div className="contact-item">
            <img
              src="/github.jpg"
              alt="GitHub Icon"
              className="contact-icon"
              onClick={() => copyToClipboard("https://github.com/vkarivu")}
              style={{ cursor: "pointer" }} // Indicate that it's clickable
            />
            <a
              href="https://github.com/vkarivu"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub
            </a>
          </div>
          <div className="contact-item">
            <img
              src="/ResumeSymb.jpg"
              alt="Resume Icon"
              className="contact-icon"
              onClick={() =>
                copyToClipboard(
                  "https://drive.google.com/drive/u/8/folders/1aLfsjHZspBbVu1kpQ3lP9GEKEgMUenDU",
                )
              }
              style={{ cursor: "pointer" }} // Indicate that it's clickable
            />
            <a
              href="https://drive.google.com/drive/u/8/folders/1aLfsjHZspBbVu1kpQ3lP9GEKEgMUenDU"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
