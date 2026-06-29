import { useAnecdoteStore } from '../store'

const AnecdoteList = () => {
    const {anecdotes, votes, actions} = useAnecdoteStore()

    //pair anecdotes with votes
    const combined = anecdotes.map((a, i) => ({ content: a, votes: votes[i], index: i }))
    
    //sort by descending
    const sorted = combined.toSorted((a, b) => b.votes - a.votes)

    return (
        <ul>
            {sorted.map((anecdote, index) => (
                <li key={index}>
                    {anecdote} <br />
                    has {votes[index]}
                    <button onClick={() => actions.vote(index)}>vote</button>
                </li>
            ))}
        </ul>
    )
}

export default AnecdoteList