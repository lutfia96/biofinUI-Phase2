import { useState, useRef, useEffect } from "react";

function FaqInner() {
  const [activeIndex, setActiveIndex] = useState<any>(0);
  const contentRefs = useRef([]); // Store refs for each accordion item

  const faqs = [
    {
      question: " What are Marine Conservation Areas and Forest Protected Areas in Zanzibar?",
                
      answer:
         "These are specially designated areas aimed at preserving Zanzibar's unique biodiversity. Marine Conservation Areas protect coral reefs, sea grass beds, and marine life, while Forest Protected Areas safeguard indigenous forests, endemic species, and traditional ecosystems that are vital to the island's environmental balance.",
    },
    {
      question: "Why is conservation important in Zanzibar?",
      answer:
        "Zanzibar's marine and forest ecosystems are home to rare and endemic species found nowhere else on Earth. Conservation efforts help maintain biodiversity, support local communities through sustainable tourism, protect against climate change impacts, and preserve these natural treasures for future generations.",
    },
    {
      question: "How do I visit these protected areas?",
      answer:
        "All visits must be arranged through our official booking system. Select your preferred marine or forest attraction, choose your visit date, and book your guided tour. All visits include certified guides who ensure both your safety and the protection of these sensitive environments.",
    },
    {
      question: "What should I bring on my visit to a conservation area?",
      answer:
        "We recommend bringing comfortable clothing suitable for outdoor activities, sturdy footwear, sun protection (hat, sunscreen), insect repellent, a reusable water bottle, and a camera to capture the stunning landscapes and wildlife. Please remember to follow all guidelines provided by your guide to minimize your impact on the environment.",
    },
   
    {
      question:
        "What if there's bad weather on my visit day?",
      answer:
        "Safety is our priority. If weather conditions are unsafe, we'll contact you to reschedule your visit at no additional cost. Marine activities may be particularly affected by weather conditions, and we'll work with you to find the best alternative date.",
    },
    {
      question: "How do I make a booking?",
      answer:
        "Simply browse our marine or forest attractions, select your preferred site, choose your visit date and number of visitors, then proceed to checkout. You'll receive a confirmation email with your booking details and payment instructions.",
    },
    {
      question:
        "What payment methods do you accept?",
      answer:
        "We accept payments through mobile money agents, bank transfers, and our secure online payment gateway. After booking, you'll receive a control number for easy payment processing at any authorized agent or bank.",
    },
    {
      question:
        "Can I cancel or modify my booking?",
      answer:
        "Yes, you can cancel or modify your booking up to 48 hours before your scheduled visit. Contact our support team with your booking reference number for assistance with changes.",
    },
    {
      question:
        "How does my visit contribute to conservation?",
      answer:
        "Your visit fees directly support conservation activities, local community programs, research initiatives, and maintenance of protected areas. By choosing sustainable tourism, you're actively participating in preserving Zanzibar's natural heritage.",
    },
    {
      question:
        "What conservation guidelines should I follow?",
      answer:
        "Please follow all guide instructions, stay on designated paths, don't touch or disturb wildlife, avoid using single-use plastics, and respect local customs. Our guides will provide specific guidelines for each location to ensure minimal environmental impact.",
    },
    {
      question:
        "How can I get help with my booking?",
      answer:
        "Our support team is available to assist you. Visit our Contact page for phone numbers, email addresses, and office locations. We're here to help with bookings, payment issues, or any questions about your visit.",
    },
  ];

  const toggleAccordion = (index: number | null) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Dynamically set max-height for smooth transition
    contentRefs.current.forEach((ref: HTMLDivElement | null, index: number) => {
      if (ref) {
        ref.style.maxHeight =
          activeIndex === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [activeIndex]);

  return (
    <div className="space-top space-extra-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="title-area text-center">
              <span className="sub-title">FAQ</span>
              <h2 className="sec-title">Frequently Asked Questions</h2>
              <p>Have questions you want answers to?</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="accordion-area mb-30">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`accordion-card style2 ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div className="accordion-header">
                    <button
                      className={`accordion-button ${
                        activeIndex === index ? "" : "collapsed"
                      }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      Q{index + 1}. {faq.question}
                    </button>
                  </div>
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="accordion-collapse"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqInner;
