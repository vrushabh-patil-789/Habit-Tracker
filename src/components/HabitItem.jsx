import { useState } from "react"

function HabitItem({ habit, toggleHabit, deleteHabit, editHabit }) {
    const [isEditing, setIsEditing] = useState(false)
    const [tempName, setTempName] = useState(habit.name)

    const handleSave = () => {
        editHabit(habit.id, tempName)
        setIsEditing(false)
    }

    return (
        <div className="flex items-center justify-between p-3 bg-gray-100/30 dark:bg-gray-800 rounded-lg mb-2">
            
            
            <div className="flex-1">
                {isEditing ? (
                    <input
                        type="text"
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                        className="border rounded px-2 py-1 w-full dark:bg-gray-700 dark:text-white"
                        autoFocus
                    />
                ) : (
                    <div className="flex flex-col">
                    <span
                        className={`text-gray-800 dark:text-white ${
                            habit.completed ? "line-through opacity-50" : ""
                        }`}
                    >
                        {habit.name}
                        
                    </span>
                    <p className="text-xs text-orange-500">
                        {habit.streak} Day Streak
                    </p>
                    </div>
                    
                )}
            </div>

            
            <div className="flex items-center gap-2 ml-4">
                {isEditing ? (
                    <button onClick={handleSave} className="text-green-500 font-bold">Save</button>
                ) : (
                    <>
                        
                        <button onClick={() => setIsEditing(true)} className="text-blue-500 cursor-pointer">Edit</button>
                        <button onClick={() => deleteHabit(habit.id)} className="text-red-500 cursor-pointer">Delete</button>
                        <input
                            type="checkbox"
                            className="appearance-none w-5 h-5 rounded-full dark:border-white border checked:bg-green-500 cursor-pointer relative"
                            checked={habit.completed}
                            onChange={() => toggleHabit(habit.id)}
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export default HabitItem