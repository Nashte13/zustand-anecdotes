import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { useAnecdoteStore } from './store'

const App = () => {
  const {anecdotes, votes, actions} = useAnecdoteStore()

  //initialize votes if empty
  if (votes.length === 0) {
    actions.initVotes(anecdotes.length)
  }

  return (
    <div>
      <h1>Anecdote Voting</h1>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App;