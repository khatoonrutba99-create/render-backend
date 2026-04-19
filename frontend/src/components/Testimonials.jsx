import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const stories = [
    {
      name: "Rahul Sharma",
      treatment: "Cardiac Surgery",
      text: "The care I received at ZeeCare Hospitals was exceptional. The doctors and staff were incredibly supportive throughout my recovery.",
      rating: 5
    },
    {
      name: "Priya Singh",
      treatment: "Orthopaedic Care",
      text: "State-of-the-art facilities and a very compassionate medical team. I was back on my feet in no time after my knee replacement.",
      rating: 5
    },
    {
      name: "Amit Verma",
      treatment: "Neurology",
      text: "World-class treatment right here in our city. The precision and dedication of the neurological team is unparalleled.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container" style={{ padding: "80px 20px" }}>
        <div className="testimonials-header">
          <div>
            <h2 className="section-title" style={{ textAlign: "left", color: "var(--primary-color)" }}>Patient Stories</h2>
            <p className="section-subtitle" style={{ textAlign: "left", margin: "0", maxWidth: "600px" }}>
              Real stories from our patients who experienced life-changing treatments.
            </p>
          </div>
          <button className="btn btn-secondary nav-btn-outline" style={{ height: "fit-content" }}>View All Stories</button>
        </div>

        <div className="stories-grid">
          {stories.map((story, index) => (
            <div key={index} className="story-card">
              <div className="quote-icon">"</div>
              <p className="story-text">{story.text}</p>
              <div className="story-author">
                <div className="author-avatar">{story.name.charAt(0)}</div>
                <div>
                  <h4 className="author-name">{story.name}</h4>
                  <span className="author-treatment">{story.treatment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
