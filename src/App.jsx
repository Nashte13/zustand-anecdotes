import { useAnecdoteStore } from './store'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const { anecdotes, selected, votes, actions } = useAnecdoteStore()
  
  //initialixe votes
  if (votes.length === 0) {
    actions.initVotes(anecdotes.length)
  }

  const maxVotes = Math.max(...votes)
  const maxIndex = votes.indexOf(maxVotes)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]}</p>

      <Button onClick={actions.next} text="next anecdote" />
      <Button onClick={actions.vote} text="vote" />

      <h1>Anecdote with the most votes</h1>
      {maxVotes > 0 && (
        <>
          <p>{anecdotes[maxIndex]}</p>
          <p>has {maxVotes} votes</p>
        </>
      )}
    </div>
  )
}

export default App;