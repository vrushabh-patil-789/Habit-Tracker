import { useState, useEffect } from "react"

export default function useHabitFunctions () {


    //local storage -- checks if there is any data if not then returns empty string
    const [habits,setHabits] = useState(()=> {
        const stored = localStorage.getItem("habits")
        return stored ? JSON.parse(stored) : []
    })
    
    //This automatically saves changes 
    useEffect(()=> {
        localStorage.setItem("habits",JSON.stringify(habits))
    },[habits])

    

    useEffect(() => {
        const today = new Date().toDateString()

        setHabits(prev =>
            prev.map(habit => {
                if (habit.lastCompleted !== today) {
                    return { ...habit, completed: false }
                }
                return habit
            })
        )
    }, [])
    
    //adding new habits
    const addHabit = (name) => {
        const newHabit = {
            id:Date.now(),
            name,
            completed:false,
            streak:0,
            lastCompleted: null,
        }
        setHabits((prev) => [...prev, newHabit])
    }

    
    //streak count and toggle habit
    const toggleHabit = (id) => {
        const today = new Date().toDateString()

        setHabits(prev =>
            prev.map(habit => {
                if(habit.id !== id) return habit

                if(habit.lastCompleted === today) {
                    return {
                        ...habit,
                        completed: !habit.completed
                    }
                }
                
                let newStreak = 1

                if(habit.lastCompleted) {
                    const last = new Date(habit.lastCompleted)

                    const yesterday = new Date()
                    yesterday.setDate(yesterday.getDate() - 1)

                    if (last.toDateString() === yesterday.toDateString()) {
                        newStreak = habit.streak + 1;
                    } 
                } 

                return {
                        ...habit,
                        completed:true,
                        streak:newStreak,
                        lastCompleted:today
                    }
            })
        )
    }

    //delete habits 
    const deleteHabit = (id) => {
        setHabits((prev) => prev.filter((habit) => habit.id !== id))
    }

    const editHabit = (id, newName) => {
        setHabits((prev) =>
            prev.map((habit) => 
                habit.id === id ? { ...habit, name: newName} : habit
            
            )
        )
    }

    //progress
    const habitsCompleteCount = habits.filter(h => h.completed).length


    return{
        habits,
        addHabit,
        toggleHabit,
        deleteHabit,
        editHabit,
        habitsCompleteCount
    }

}