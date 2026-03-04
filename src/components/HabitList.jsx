import HabitItem from "./HabitItem"

function HabitList({habits, toggleHabit, deleteHabit,editHabit}) {

    if (habits.length === 0) {
        return (
            <p className="text-center text-lg text-gray-500 dark:text-gray-400 mt-4">No habits yet</p>
        )
    }

    return(
        <>

        <div className="space-y-2">
            {habits.map((habit) => (
                <HabitItem
                key={habit.id}
                habit={habit}
                
                toggleHabit={toggleHabit}
                deleteHabit={deleteHabit}
                editHabit={editHabit}

                />
            ))}
        </div>
        
        </>
    )
}

export default HabitList