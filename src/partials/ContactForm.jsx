import React, { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSendClick = (e) => {
        e.preventDefault();

        // Construct the mailto link with the user's input
        const email = "vaibhav.2003.rana@gmail.com";
        const subject = "I visited your website";
        const body = `Name: ${name}\n\nMessage:\n${message}`;

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        // Open the user's email client with the prefilled message
        window.location.href = mailtoLink;

        // Reset name and message fields
        setName("");
        setMessage("");
    };

    return (
        <section className="skewing">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* CTA box with transparent background and orange borders */}
                <div className=" relative bg-transparent py-10 px-8 md:py-16 md:px-12 border-2 border-orange-600 rounded-lg shadow-xl glass">
                    <div className="relative flex flex-col lg:flex-row justify-between items-center">
                        {/* CTA content */}
                        <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
                            <h3 className="text-3xl font-semibold text-white mb-4">
                                Drop a message
                            </h3>
                            <p className="text-lg text-gray-300">
                                We'd love to hear from you! Reach out with any questions or
                                feedback.
                            </p>
                        </div>

                        {/* CTA form */}
                        <form className="w-full lg:w-1/2 space-y-6" onSubmit={handleSendClick}>
                            <div>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-2 border-orange-600 rounded-sm px-4 py-3 text-white placeholder-gray-400 transition duration-300 ease-in-out"
                                    placeholder="Your name"
                                    aria-label="Your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    className="w-full bg-transparent border-2 border-orange-600 rounded-sm px-4 py-3 text-white placeholder-gray-400 resize-none transition duration-300 ease-in-out"
                                    placeholder="Your message"
                                    aria-label="Your message"
                                    rows="4"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex justify-center">
                                <button className="btn" type="submit">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
