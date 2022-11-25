import logo from './logo.svg';
import './App.css';
import Index from './pages/Index.js'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [list, setList] = useState([])
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [clicked, setclicked] = useState(false)

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get('/todos')
      setList(res.data)
    }
    fetchData()
  }, [clicked])

  const handleChange = (evt) => {
    evt.preventDefault()
    setName(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setId((Math.floor(Math.random()*100000000)).toString())
    setList([...list, { id, name, done: false }])
    axios.post('/todos', { id, name, done: false })
    setclicked(!clicked)
  }

  const handleDelete = (id) => {
    console.log(list.filter(todo => todo.id !== id))
    setList(list.filter(todo => todo.id !== id))
    axios.delete(`/todos/${id}`)
    setclicked(!clicked)
  }

  return (
    <div className="App">
      <Index 
      list={list} 
      name={name}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
