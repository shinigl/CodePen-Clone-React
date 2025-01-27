import React from 'react'

function Result(props) {
    // console.log(props);
    return (
        <div>
            <div className="bg-[#282c34] p-4 shadow mt-4 rounded-lg">
                <h2
                    className="text-lg font-semibold mb-2 text-white">
                    Result
                </h2>
                <iframe
                    className="w-full h-60 border bg-white border-gray-700 rounded-md"
                    srcDoc={props.srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                </iframe>
            </div>
        </div>
    )
}

export default Result