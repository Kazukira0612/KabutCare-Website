import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const QnA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'How long does it take to stop cat spraying?',
      answer: 'Most cats show improvement within 1-3 days of implementing changes, with significant reduction in 1-2 weeks. Complete resolution typically occurs within 1-3 months. The timeline depends on the underlying cause and how consistently you apply the solutions.',
    },
    {
      question: 'Will neutering stop my cat from spraying?',
      answer: 'Neutering can reduce or eliminate spraying in many male cats, especially if done early. However, it is not always effective, particularly if the behavior is well-established or related to anxiety or territory marking.',
    },
    {
      question: 'Is cat spraying the same as inappropriate urination?',
      answer: 'No, cat spraying and inappropriate urination are different behaviors. Spraying is usually a territorial behavior where cats deposit small amounts of urine on vertical surfaces. Inappropriate urination is typically a larger amount of urine deposited on horizontal surfaces and may indicate a medical or litter box issue.',
    },
    {
      question: 'Can female cats spray too?',
      answer: 'Yes, female cats can spray, although it is more commonly associated with male cats. Spraying in female cats can be related to territorial behavior, stress, or hormonal factors.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
   section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="qna-section" id="QnA">
      <div className="qna-container" >
        <div className="qna-header">
          <FontAwesomeIcon icon={faQuestionCircle} className="qna-icon" data-aos="fade-up" />
          <h2 data-aos="fade-up">Frequently Asked Questions</h2>
          <p data-aos="fade-up">Get answers to the most common questions about cat spraying behavior and solutions.</p>
        </div>
        <div className="qna-list">
          {questions.map((item, index) => (
            <div className={`qna-item ${activeIndex === index ? 'active' : ''}`} key={index}>
              <div data-aos="fade-up" className="qna-question" onClick={() => toggleAccordion(index)}>
                {item.question}
                <FontAwesomeIcon
                  icon={activeIndex === index ? faChevronUp : faChevronDown}
                  className="qna-icon"
                />
              </div>
              {activeIndex === index && (
                <div className="qna-answer" data-aos="fade-up">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="qna-footer" data-aos="fade-up">
          <p>Still have questions? <a href="#Contact" onClick={(e) => {e.preventDefault(); scrollToSection("Contact");}}>Contact us</a></p>
        </div>
      </div>
  </section>
  );
};

export default QnA;