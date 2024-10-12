import React from "react";
import './FAQ.css';

const FAQ = () => {
  return (
    <div>
      {/* FAQ Page */}
      <section id="FAQ" className="FAQ">
        <h1>FAQs:</h1>
        <div>
          <h2>What makes your services unique from other similar platforms?</h2>
          <p>
            Compared to similar platforms, there's less requirements needed to use our services for menu making. Other platforms require a subscription or partnership, and we aim to not hassle restaurant owners with requirements such as those.
          </p>
        </div>

        <div>
          <h2>Where can we contact you?</h2>
          <p>
           You may contact us via the contacts provided below. 
          </p>
        </div>

        <div>
          <h1> Contact Us </h1>
        <li> Email - samplemail.gmail.Com</li>
        <li> Contact Number - 0912345678</li>
        </div>
        
      </section>
    </div>
  );
};

export default FAQ;
