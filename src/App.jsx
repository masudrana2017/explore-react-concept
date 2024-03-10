
import './App.css'
import Counter from './counter'
import Friends from './friends'
import Team from './team'
import Users from './users'

function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2=()=>{
    alert('handle clicked 2')
  }
  return (
    <>
      <h1>React core concept-2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      <button onClick={()=>{alert('clicked third')}}>Click three</button>

    </>
  )
}

export default App
