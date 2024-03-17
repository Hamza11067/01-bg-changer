import { useState } from "react"

function App() {
  const [color, setColor] = useState('black');

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center max-w-[1400px] relative"
           style={{backgroundColor : color}}
      >
        <div className="w-[90%] absolute bottom-12 ">
          <div className="w-full min-h-12 p-2 gap-[13px] bg-white flex flex-wrap items-center px-3 lg:rounded-full rounded-2xl">
            <button className="text-white w-20 h-8 rounded-full"
                    style={{backgroundColor:'red'}}
                    onClick={() => setColor('red')}
            >
              Red
            </button>
            <button className="text-white w-20 h-8 rounded-full"
                    style={{backgroundColor:'blue'}}
                    onClick={() => setColor('blue')}
            >
              Blue
            </button>
            <button className="text-white w-20 h-8 rounded-full"
                    style={{backgroundColor:'green'}}
                    onClick={() => setColor('green')}
            >
              Green
            </button>
            <button className="text-white w-20 h-8 rounded-full"
                    style={{backgroundColor:'yellow'}}
                    onClick={() => setColor('yellow')}
            >
              Yellow
            </button>
            <button className="text-white w-20 h-8 rounded-full"
                    style={{backgroundColor:'orange'}}
                    onClick={() => setColor('orange')}
            >
              Orange
            </button>
            <button className="text-white w-20 h-8 rounded-full"
                    style={{backgroundColor:'violet'}}
                    onClick={() => setColor('violet')}
            >
              Violet
            </button>
            <button className="text-white w-20 h-8 rounded-full"
                    style={{backgroundColor:'indigo'}}
                    onClick={() => setColor('indigo')}
            >
              Indigo
            </button>
            <button className="text-white w-20 h-8 rounded-full"
                    style={{backgroundColor:'lightblue'}}
                    onClick={() => setColor('lightblue')}
            >
              Lightblue
            </button>
            <button className="text-white w-20 h-8 rounded-full"
                    style={{backgroundColor:'violet'}}
                    onClick={() => setColor('violet')}
            >
              Violet
            </button>
            <button className="text-white w-20 h-8 rounded-full"
                    style={{backgroundColor:'pink'}}
                    onClick={() => setColor('pink')}
            >
              Pink
            </button>
            <button className="text-white w-20 h-8 rounded-full"
                    style={{backgroundColor:'orangered'}}
                    onClick={() => setColor('orangered')}
            >
              Or-Red
            </button>
            <button className="text-white w-20 h-8 rounded-full"
                    style={{backgroundColor:'crimson'}}
                    onClick={() => setColor('crimson')}
            >
              Crimson
            </button>
            <button className="text-white w-20 h-8 rounded-full"
                    style={{backgroundColor:'salmon'}}
                    onClick={() => setColor('salmon')}
            >
              Salmon
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
