import React from 'react';

function Feedback() {
    const feedbacks = [
    {
        id: 1,
        name: "John Doe",
        review: "I've been using the cat spray for a few weeks now and it's been a game-changer for my cat's behavior. It's so easy to use and effective. Highly recommended!",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 2,
        name: "Jane Smith",
        review: "I've been using the cat spray for a few weeks now and it's been a game-changer for my cat's behavior. It's so easy to use and effective. Highly recommended!",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 3,
        name: "Bob Johnson",
        review: "I've been using the cat spray for a few weeks now and it's been a game-changer for my cat's behavior. It's so easy to use and effective. Highly recommended!",
        image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
];
    return (
        <section id="Feedback" className="feedback-section">
            <div className="feedback-container"> 
                <div className="feedback-header" data-aos="fade-up">
                    <h1>Feedback</h1>
                    <p>Our client speaks</p>
                </div>
                <div className="feedback-content" >
                    {feedbacks.map((feedback, index) => (
                        <div key={index} className="feedback-card" data-aos="zoom-in-up" >
                            <img src={feedback.image} alt={feedback.name} />
                            <h3>{feedback.name}</h3>
                            <p>{feedback.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Feedback