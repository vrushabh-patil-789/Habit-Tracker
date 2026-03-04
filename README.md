# Habit Tracker 🚀

A clean and minimal **Habit Tracking Web App** built with **React + Tailwind CSS** to help users stay consistent with their daily habits.

This project focuses on building discipline through **daily streak tracking, habit progress visualization, and a productivity-focused Pomodoro timer**, all running entirely in the browser using **LocalStorage** — no backend required.

---

# ✨ Features

### 🧠 Habit Management

* Add new habits
* Edit existing habits
* Delete habits
* Toggle habit completion

### 🔥 Streak Tracking

* Automatically tracks **daily streaks**
* Streak increases when habits are completed on consecutive days
* Streak resets when a day is missed

### 📊 Progress Visualization

* Shows completed habits vs total habits
* Simple visual progress indicator

### 🌙 Dark Mode

* Fully responsive UI
* Light / Dark theme support using Tailwind CSS

### ⏱️ Pomodoro Timer

* Built-in productivity timer
* Helps users stay focused while building habits

### 💾 LocalStorage Persistence

* All habits and progress are stored in the browser
* Data persists after page refresh
* No backend required

---

# 🛠️ Tech Stack

* **React (Functional Components + Hooks)**
* **Tailwind CSS**
* **LocalStorage API**
* **JavaScript (ES6+)**

---

# 📂 Project Structure

```
src
 ┣ components
 ┃ ┣ HabitForm.jsx
 ┃ ┣ HabitItem.jsx
 ┃ ┣ HabitList.jsx
 ┃ ┗ Pomodoro.jsx
 ┣ hooks
 ┃ ┗ useHabitFunctions.js
 ┣ App.jsx
 ┗ main.jsx
```

---

# ⚙️ How It Works

### Habit System

Each habit is stored like this:

```
{
 id: number,
 name: string,
 completed: boolean,
 streak: number,
 lastCompleted: date
}
```

The app calculates streaks by comparing today's date with the `lastCompleted` date.

---

### LocalStorage Persistence

The application automatically saves habits using:

```
localStorage.setItem("habits", JSON.stringify(habits))
```

When the app loads, it restores habits from LocalStorage.

---

# 📱 UI Design

The UI focuses on **simplicity and usability**:

* Clean minimal layout
* Mobile responsive design
* Dark mode support
* Fast interactions

---

# 🎯 What I Learned

Through this project I practiced:

* React state management
* Custom hooks
* LocalStorage persistence
* Component architecture
* Tailwind CSS styling
* Building real-world UI features
* Debugging state issues in React

---

# 🚀 Future Improvements

Potential features to add:

* Weekly/monthly progress charts
* GitHub-style habit heatmap
* Notifications & reminders


---


---

# 📄 License

This project is open source and available under the MIT License.
