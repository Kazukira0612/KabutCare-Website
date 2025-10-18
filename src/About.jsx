import HomeImage from "./assets/image.jpeg";
function About() {
    return (
        <div className="about-page" id="About">
            <section className="about-section">
                <h2 data-aos="fade-up">About Us</h2>
                <p data-aos="fade-up"> Welcome to Cat Spray, where we provide expert cat behavior solutions to help you and your cat live a happy and healthy life together.</p>
            </section>
            <section className="about-section">
                <ul>
                    <li data-aos="fade-up" data-aos-duration="1000">
                        <i className="fas fa-rocket"></i>
                        <h3>Expert cat behavior solutions</h3>
                        <p>At Cat Spray, we understand the unique needs and behaviors of cats,
                         and we offer a range of expert cat behavior solutions to help you and 
                         your cat live a happy and healthy life together.
                         </p>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1500">
                        <i className="fas fa-lightbulb"></i>
                        <h3>Personalized treatment plans</h3>
                        <p>At Cat Spray, we understand the unique needs and behaviors of cats,
                         and we offer a range of expert cat behavior solutions to help you and 
                         your cat live a happy and healthy life together.
                         </p>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="2000">
                        <i className="fas fa-bullseye"></i>
                        <h3>Positive reinforcement techniques</h3>
                        <p>At Cat Spray, we understand the unique needs and behaviors of cats,
                         and we offer a range of expert cat behavior solutions to help you and 
                         your cat live a happy and healthy life together.
                         </p>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="2500">
                        <i class="fa-solid fa-fire"></i>
                        <h3>Effective training techniques</h3>
                        <p>At Cat Spray, we understand the unique needs and behaviors of cats,
                         and we offer a range of expert cat behavior solutions to help you and 
                         your cat live a happy and healthy life together.
                         </p>
                    </li>
                </ul>
            </section> 
            <section className="why-choose" data-aos="fade-up">
                <h2>Why Choose Cat Spray?</h2>
                <ul className="why-choose-list" data-aos="fade-up">
                    <li>
                        <h3>Expert cat behavior solutions</h3>
                        <p>At Cat Spray, we understand the unique needs and behaviors of cats,
                            <br/> and we offer a range of expert cat behavior solutions to help you and 
                         </p>
                    </li>
                    <li>
                        <h3>Personalized treatment plans</h3>
                        <p>At Cat Spray, we understand the unique needs and behaviors of cats,
                            <br/>and we offer a range of expert cat behavior solutions to help you and 
                         </p>
                    </li>
                    <li>
                        <h3>Positive reinforcement techniques</h3>
                        <p>At Cat Spray, we understand the unique needs and behaviors of cats,
                            <br/> and we offer a range of expert cat behavior solutions to help you and 
                         </p>
                    </li>
                    <li>
                        <h3>Effective training techniques</h3>
                        <p>At Cat Spray, we understand the unique needs and behaviors of cats,
                            <br/> and we offer a range of expert cat behavior solutions to help you and 
                         </p>
                    </li>
                </ul>
                <div className="how-img-container">
                    <img src={HomeImage} alt="Cat Spray" className="how-img" data-aos="fade-left"/>
                </div>
            </section>
               
        </div>
    )
}

export default About