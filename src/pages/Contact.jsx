
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
    };

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] bg-gray-900 p-4">
            <div className="w-full max-w-lg bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-700 animate-zoom-in">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">Get in Touch</h1>
                    <p className="text-gray-400">Have a question or just want to say hi? We'd love to hear from you.</p>
                </div>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="group">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 transition-colors group-focus-within:text-blue-400">
                            Your Name
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe" 
                            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm"
                            required
                        />
                    </div>
                    
                    <div className="group">
                         <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 transition-colors group-focus-within:text-purple-400">
                            Email Address
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                             value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com" 
                            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-sm"
                            required
                        />
                    </div>
                    
                    <div className="group">
                         <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 transition-colors group-focus-within:text-indigo-400">
                            Message
                        </label>
                        <textarea 
                            id="message" 
                            name="message"
                             value={formData.message}
                            onChange={handleChange}
                            rows="4" 
                            placeholder="Tell us something..." 
                             className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-sm resize-none"
                             required
                        ></textarea>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                    >
                        Send Message
                    </button>
                    
                </form>
            </div>
        </div>
    );
};

export default Contact;
