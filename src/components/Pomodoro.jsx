import { useEffect, useState, useRef } from "react"
import {Link} from "react-router-dom"

const pomodoroTime = 1500
const breakTime = 300


function Pomodoro() {

    const [timeLeft,setTimeLeft] = useState(pomodoroTime)
    const [isRunning,setIsRunning] = useState(false)
    const [mode,setMode] = useState("pomodoro")

    const intervalRef = useRef(null)

    const totalTime = mode === "pomodoro" ? pomodoroTime : breakTime

    useEffect (() => {
        if(isRunning) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current)
                        if (mode === "pomodoro") {
                            setMode("break")
                            return breakTime
                        } else {
                            setMode("pomodoro")
                            return pomodoroTime
                        }
                    }
                    return prev - 1
                })
            }, 1000)
        }
        return () => clearInterval(intervalRef.current)
    }, [isRunning, mode])

    //start,pause,reset buttons
    const startTimer = () => setIsRunning(true)

    const pauseTimer = () => {
        clearInterval(intervalRef.current)
        setIsRunning(false)

    }

    const resetTimer = () => {
        clearInterval(intervalRef.current)
        setIsRunning(false)
        setMode("pomodoro")
        setTimeLeft(pomodoroTime)
    }

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    const formatTime = `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`

    const radius = 120
    const circumference = 2 * Math.PI * radius
    const progress = timeLeft / totalTime
    const strokeDash = circumference * (1 - progress)


    return(
        <>

        <div
        className="relative flex items-center justify-center min-h-screen bg-goodview bg-no-repeat bg-cover bg-center"
        >
            <div 
            className="absolute top-5 right-10"
            >
             <Link to="/">
             <h1
             className="bg-white/50 px-5 py-1 font-bold rounded"
             >Home</h1>
             </Link>  

            </div>
            <div
            className="flex flex-col items-center justify-center p-8 rounded-xl backdrop-blur-xl bg-white/30 w-[400px]"
            >
                <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
                    {mode === "pomodoro" ? "Pomodoro" : "Break Time"}
                </h2>

                {/*Circle and Start btn*/}
                <div className="relative flex items-center justify-center">

                    <svg width="300" height="300">
                        <circle
                        stroke="#32CD32"
                        fill="transparent"
                        strokeWidth = "12"
                        r = {radius}
                        cx="150"
                        cy="150"
                        />

                        <circle
                        stroke="#e5e7eb"
                        fill="transparent"
                        strokeWidth="12"
                        r={radius}
                        cx="150"
                        cy="150"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDash}
                        strokeLinecap="round"
                        transform="rotate(270 150 150)"
                        style={{ transition: "stroke-dashoffset 1s linear"}}
                        />


                    </svg>
                    <div className="absolute flex flex-col items-center">
                        <span className="text-4xl font-bold">
                          {formatTime}
                        </span>

                        {!isRunning && (
                            <button
                            onClick={startTimer}
                            className="mt-4 bg-green-500 px-4 py-2 rounded-full text-white font-lexend"
                            >
                                Start

                            </button>
                        )}

                    </div>

                </div>
                {/*Other buttons */}
                <div className="flex gap-6 mt-6">
                    <button
                    onClick={pauseTimer}
                    className="bg-blue-400 px-4 py-2 text-white rounded-full font-lexend"
                    >
                        Pause
                    </button>

                    <button
                    onClick={resetTimer}
                    className="bg-red-400 px-4 py-2 text-white rounded-full font-lexend"
                    >
                        Reset
                    </button>

                </div>

            </div>

        </div>
        
        
        </>
    )
}

export default Pomodoro