import SiteMenu from "./site_menu";

export default function Services() {
    return (<div>
        <SiteMenu />
        <section className="hero-section text-center">
            <div className="container">
                <h1 className="display-4 fw-bold">Our Courses</h1>
                <p className="lead">Master In-Demand Tech Skills with Expert-Led Training</p>
            </div>
        </section>
        {/* Courses Section */}
        <section className="course-details py-5">
            <div className="container">
                <h2 className="text-center mb-5">Explore Our Courses</h2>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="card course-card h-100">
                            <img src="https://source.unsplash.com/random/300x200?web-development" className="card-img-top" alt="Web Development" />
                            <div className="card-body">
                                <h5 className="card-title">Web Development</h5>
                                <p className="card-text">Learn to build responsive, modern websites using HTML, CSS, JavaScript, and frameworks like React and Bootstrap.</p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">Duration: 12 weeks</li>
                                    <li className="list-group-item">Level: Beginner to Advanced</li>
                                    <li className="list-group-item">Mode: Online/In-Person</li>
                                </ul>
                                <a href="#enroll" className="btn btn-primary w-100">Enroll Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card course-card h-100">
                            <img src="https://source.unsplash.com/random/300x200?mobile-app" className="card-img-top" alt="Mobile Development" />
                            <div className="card-body">
                                <h5 className="card-title">Mobile Development</h5>
                                <p className="card-text">Develop native and cross-platform mobile apps for iOS and Android using Flutter, React Native, and Swift.</p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">Duration: 10 weeks</li>
                                    <li className="list-group-item">Level: Intermediate</li>
                                    <li className="list-group-item">Mode: Online/In-Person</li>
                                </ul>
                                <a href="#enroll" className="btn btn-primary w-100">Enroll Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card course-card h-100">
                            <img src="https://source.unsplash.com/random/300x200?ai" className="card-img-top" alt="AI & Machine Learning" />
                            <div className="card-body">
                                <h5 className="card-title">AI &amp; Machine Learning</h5>
                                <p className="card-text">Master AI concepts, machine learning algorithms, and tools like TensorFlow, PyTorch, and Python for real-world applications.</p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">Duration: 14 weeks</li>
                                    <li className="list-group-item">Level: Intermediate to Advanced</li>
                                    <li className="list-group-item">Mode: Online</li>
                                </ul>
                                <a href="#enroll" className="btn btn-primary w-100">Enroll Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card course-card h-100">
                            <img src="https://source.unsplash.com/random/300x200?cybersecurity" className="card-img-top" alt="Cybersecurity" />
                            <div className="card-body">
                                <h5 className="card-title">Cybersecurity</h5>
                                <p className="card-text">Learn ethical hacking, network security, and threat detection to protect systems and data effectively.</p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">Duration: 12 weeks</li>
                                    <li className="list-group-item">Level: Beginner to Advanced</li>
                                    <li className="list-group-item">Mode: Online/In-Person</li>
                                </ul>
                                <a href="#enroll" className="btn btn-primary w-100">Enroll Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Why Our Courses Section */}
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">Why Choose Our Courses?</h2>
                <div className="row text-center">
                    <div className="col-md-4">
                        <h4>Hands-On Projects</h4>
                        <p>Build real-world projects to create a portfolio that showcases your skills to employers.</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Expert Instructors</h4>
                        <p>Learn from industry professionals with extensive experience in their fields.</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Flexible Learning</h4>
                        <p>Choose from online or in-person classes to fit your schedule and learning style.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* Call to Action Section */}
        <section id="enroll" className="py-5 bg-light text-center">
            <div className="container">
                <h2 className="mb-4">Ready to Start Your Tech Journey?</h2>
                <p className="lead mb-4">Join The Easylearn Academy and take the first step toward a successful career in technology.</p>
                <a href="index.html#contact" className="btn btn-primary btn-lg">Contact Us to Enroll</a>
            </div>
        </section>
        {/* Footer */}
        <footer className="bg-dark text-white text-center py-4">
            <div className="container">
                <p>© 2025 The Easylearn Academy. All rights reserved.</p>
                <p>
                    <a href="#" className="text-white me-3">Facebook</a>
                    <a href="#" className="text-white me-3">Twitter</a>
                    <a href="#" className="text-white">LinkedIn</a>
                </p>
            </div>
        </footer>
    </div>
    );
}