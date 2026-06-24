import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {

  return (
    <div>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App;