import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { useAnecdoteStore } from './store'

const App = () => {
  const {anecdotes, votes, actions} = useAnecdoteStore()

  //initialize votes if empty
  if (votes.length === 0) {
    actions.initiVotes(anecdotes.length)
  }

  return (
    <div>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App;