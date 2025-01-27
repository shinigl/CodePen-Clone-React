import React, { useCallback, useState } from "react";
import Navbar from './NavBar';
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { FaCopy } from 'react-icons/fa'; 
import Result from './Result';


function Home() {
  const [html_edit, setHtml_Edit] = useState('');
  const [css_edit, setCss_Edit] = useState('');
  const [js_edit, setJs_Edit] = useState('');

  // HTML handler
  const onChangeHtml = useCallback((value) => {
    setHtml_Edit(value);
  }, []);

  // CSS handler
  const onChangeCss = useCallback((value) => {
    setCss_Edit(value);
  }, []);

  // JS handler
  const onChangeJavaScript = useCallback((value) => {
    setJs_Edit(value);
  }, []);

  const srcCode = `
  <html>
    <head>
      <style>${css_edit}</style>
    </head>
    <body>${html_edit}</body>
    <script>${js_edit}</script>
  </html>
  `;

  // Function to copy code to clipboard
  const copyToClipboard = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      alert('Code copied')
      
     } catch (error) {
      console.error("Error copying code: ", error);
      
    }
  };
  

  return (
    <>
      <Navbar />
      {/* main content */}
      <div className="p-2">
        {/* Editor */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/* HTML Editor */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow relative">
            <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={html_edit}
              height="342px"
              theme="dark"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
            <button
              onClick={() => copyToClipboard(html_edit)}
              className="absolute top-2 right-2 cursor-pointer text-white p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-300"
            >
              <FaCopy />
            </button>
          </div>

          {/* CSS Editor */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow relative">
            <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={css_edit}
              height="342px"
              theme="dark"
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
            <button
              onClick={() => copyToClipboard(css_edit)}
              className="absolute top-2 right-2 cursor-pointer text-white p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-300"
            >
              <FaCopy />
            </button>
          </div>

          {/* JavaScript Editor */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow relative">
            <h2 className="text-lg font-semibold mb-2 text-white">JavaScript</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={js_edit}
              height="342px"
              theme="dark"
              extensions={[javascript(true)]}
              onChange={onChangeJavaScript}
            />
            <button
              onClick={() => copyToClipboard(js_edit)}
              className="absolute top-2 right-2 cursor-pointer text-white p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-300"
            >
              <FaCopy />
            </button>
          </div>
        </div>
        <Result srcCode={srcCode} />
      </div>
    
    </>
  );
}

export default Home;
