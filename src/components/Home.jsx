import useHabitFunctions from '../useHabitFunctions'
import HabitForm from './HabitForm'
import HabitList from './HabitList'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'



function Home() {

  const {
    habits,
    addHabit,
    toggleHabit,
    deleteHabit,
    editHabit,
    habitsCompleteCount
   } = useHabitFunctions()

   const total = habits.length
   const percentage = total === 0 ? 0 : Math.round((habitsCompleteCount / total)*100)

   const [dark, setDark] = useState(()=> {
    return localStorage.getItem("theme") === "dark"
   })

   useEffect (()=> {
    document.documentElement.classList.toggle("dark",dark)
    localStorage.setItem("theme", dark ? "dark":"light")
   },[dark])

   return (
    <>

    <div  className="relative min-h-screen bg-goodview bg-cover bg-no-repeat bg-center flex justify-center p-4">
      <div className="absolute top-6 right-10">
        <button onClick={()=> setDark(prev => !prev)}
          
        >
          <img
          src={dark  ? "/images/sun.png" : "/images/moon.png"}
          className="h-8 w-8"
          />
        </button>

        <button>
            <Link to="/pomodoro">
            <img
            src="/images/tomato.png"
            alt="pomodorimg"
            className="h-8 w-8 ml-3"
            />
            </Link>
        </button>
        

      </div>
      <div className="w-full max-w-md bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white tracking-[0.3em] uppercase">Habit Tracker</h1>

        <HabitForm addHabit = {addHabit} />
        <div className="my-4">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
            <span>Progress</span>
            <span>{percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div className="bg-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ width:`${percentage}%`}}
            >

            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {habitsCompleteCount} of {total}
          </div>

        </div>

        <HabitList habits={habits} toggleHabit={toggleHabit} editHabit={editHabit} deleteHabit={deleteHabit} />
      </div>
    </div>


      
    </>
  )
}

export default Home