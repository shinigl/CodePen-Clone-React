import './App.css'
import Navbar from './components/NavBar';

function App() {
  

  return (
    <>
      <Navbar/>
       {/* main content  */}
       <div className=" p-2">
        {/* Editor  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
         {/* Html Editor */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
            HTML
          </div>

          {/* Css Editor  */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
            CSS
          </div>

          {/* JavaScript Editor  */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">JavaScript</h2>
            JAVASCRIPT
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
