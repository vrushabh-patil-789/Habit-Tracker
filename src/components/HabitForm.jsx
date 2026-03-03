import { useState } from "react"


function HabitForm({addHabit}) {

    const [input,setInput] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!input.trim()) return;

        addHabit(input)
        setInput("")
    }


    return(
        <>
        <form onSubmit={handleSubmit} className="flex gap-2">

            <input 
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Enter Habit"
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-white"
            />
            <button type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
                Add Habit

            </button>

        </form>
        
        </>
    )
}

export default HabitForm