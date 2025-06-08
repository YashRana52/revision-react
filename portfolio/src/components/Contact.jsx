import emailjs from 'emailjs-com';
import { useRef } from 'react';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_o6pfrmf',
            'template_zsh1cc3',
            form.current,
            'k7bxQB9_pAYFMgvdm'
        ).then(
            (result) => {
                alert('Message sent successfully!');
                console.log(result.text);
            },
            (error) => {
                alert('Something went wrong.');
                console.log(error.text);
            }
        );

        e.target.reset();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* Left - GitHub Info */}
                <div className="p-8 bg-gradient-to-b from-orange-100 to-orange-200">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">📬 Contact Me</h1>
                    <p className="text-lg text-gray-700 mb-6">Hello! My name is Yash Kumar Rana. Student of B.Tech CSE(REGULAR)</p>

                    <div className="flex flex-col items-center">
                        <img
                            src="https://avatars.githubusercontent.com/u/176314557?v=4"
                            alt="GitHub Avatar"
                            className="w-28 h-28 rounded-full border-4 border-white shadow-lg mb-3"
                        />
                        <h2 className="text-xl font-semibold text-gray-800">Yash Rana</h2>
                        <p className="text-gray-600">@YashRana52</p>
                    </div>

                    <div className="mt-6 space-y-2 text-gray-700 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="font-medium">📍 Location:</span> Lucknow
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-medium">📦 Public Repos:</span> 20
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-medium">👥 Followers:</span> 10
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-medium">✉️ Email:</span> yashrana@example.com
                        </div>
                    </div>
                </div>

                {/* Right - Contact Form */}
                <form ref={form} onSubmit={sendEmail} className="p-8 bg-white flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">📄 Send a Message</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        className="mb-4 py-3 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="mb-4 py-3 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        className="mb-4 py-3 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                    />


                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        required
                        className="mb-4 py-3 px-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
                    />

                    <button
                        type="submit"
                        className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition ease-in-out duration-300 shadow-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
