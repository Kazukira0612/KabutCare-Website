
import React from 'react';

function Feedback() {
    const feedbacks = [
    {
        id: 1,
        name: "John Doe",
        review: "I've been using the cat spray for a few weeks now and it's been a game-changer for my cat's behavior. It's so easy to use and effective. Highly recommended!",
        image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    },
    {
        id: 2,
        name: "Jane Smith",
        review: "I've been using the cat spray for a few weeks now and it's been a game-changer for my cat's behavior. It's so easy to use and effective. Highly recommended!",
        image: "https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg",
    },
    {
        id: 3,
        name: "Bob Johnson",
        review: "I've been using the cat spray for a few weeks now and it's been a game-changer for my cat's behavior. It's so easy to use and effective. Highly recommended!",
        image: "https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg",
    },
];
    return (
        <section id="Feedback" className="feedback-section" aria-labelledby="feedback-heading">
            <div className="feedback-container"> 
                <div className="feedback-header" data-aos="fade-up">
                    <h1 id="feedback-heading">Feedback</h1>
                    <p>Our client speaks</p>
                </div>
                <div className="feedback-content" >
                    {feedbacks.map((feedback) => (
                        <article key={feedback.id} className="feedback-card" data-aos="zoom-in-up" aria-label={`Feedback from ${feedback.name}`}>
                            <img src={feedback.image} alt={`${feedback.name} avatar`} className="feedback-avatar" />
                            <h3>{feedback.name}</h3>
                            <p className="feedback-review">{feedback.review}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Feedback
