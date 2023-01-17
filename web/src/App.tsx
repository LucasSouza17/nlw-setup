import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
    <Habit completed={3} />
    <Habit completed={30} />
    <Habit completed={300} />
    </div>
  )
}

export default App
