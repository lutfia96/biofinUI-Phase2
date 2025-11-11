import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const EmergencyContact = () => {
  return (
    <div className="emergency-contact-card">
      <h2>🚨 Emergency Contact</h2>
      <div className="contact-item">
        <FaPhoneAlt className="icon" />
        <span>+255 123 456 789</span>
      </div>
      <div className="contact-item">
        <FaEnvelope className="icon" />
        <span>emergency@yourdomain.com</span>
      </div>
      <div className="contact-item">
        <FaMapMarkerAlt className="icon" />
        <span>123 Hospital Rd, Zanzibar</span>
      </div>
    </div>
  );
};

export default EmergencyContact;
