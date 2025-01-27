import React, { useState } from 'react';
import axios from 'axios';
import { FiClipboard } from 'react-icons/fi';
import Navbar from './NavBar';

function Chatbot() {

    const [ques, setQues] = useState('');
    const [ans, setAns] = useState('');
    const [loading, setLoading] = useState(false);
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;



    // Generate answers from the API
    async function generateAnswers() {
        setAns('Loading...');
        setLoading(true);
        try {
            const response = await axios({
                url: `${apiUrl}?key=${apiKey}`,
                method: 'post',
                data: {
                    "contents": [{
                        "parts": [{ "text": ques }]
                    }]
                }
            });
            setAns(response.data.candidates[0].content.parts[0].text);
        } catch (err) {
            console.log(err);
            setAns('Error generating response');
        } finally {
            setLoading(false);
        }
    }

    // Function to copy the answer to clipboard
    const copyToClipboard = () => {
        if (ans && ans !== 'Loading...' && ans !== 'Error generating response') {
            navigator.clipboard.writeText(ans)
                .then(() => {
                    alert('Answer copied to clipboard!');
                })
                .catch((err) => {
                    alert('Failed to copy answer: ' + err);
                });
        }
    };

    return (
        <>
        <Navbar/>
        <div className="min-h-screen bg-gray-800 flex justify-center items-center py-10 px-5">
            <div className="bg-gray-900 p-10 rounded-lg shadow-lg w-full max-w-3xl">
                <h1 className="text-4xl text-center text-white font-semibold mb-6">WebDevBot</h1>
                <p className="text-gray-300 text-center mb-8">Ask a question, and I’ll help you with suggestions for web development!</p>

                <div className="mb-6">
                    <textarea
                        value={ques}
                        onChange={(e) => setQues(e.target.value)}
                        placeholder="Type your question here (e.g., 'How to create a responsive layout?')"
                        className="w-full h-32 p-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="flex justify-center mb-6">
                    <button
                        onClick={generateAnswers}
                        disabled={loading}
                        className={`px-6 py-3 bg-indigo-600 text-white font-medium text-lg rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-indigo-400`}
                    >
                        {loading ? 'Generating...' : 'Get Answer'}
                    </button>
                </div>

                <div className="answer mt-8">
                    <h2 className="text-2xl text-white mb-4">Answer</h2>
                    <div className="bg-gray-700 p-4 rounded-lg max-h-64 overflow-y-auto">
                        <pre className="text-gray-200 whitespace-pre-wrap">{ans}</pre>
                    </div>

                    {/* Copy Button with React Icons */}
                    {ans && ans !== 'Loading...' && ans !== 'Error generating response' && (
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={copyToClipboard}
                                className="px-6 py-3 bg-green-600 text-white font-medium text-lg rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <FiClipboard size={20} /> {/* Clipboard icon */}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    );
}

export default Chatbot;
