import { useAnecdoteStore } from '../store'

const AnecdoteList = () => {
    const {anecdotes, votes, actions} = useAnecdoteStore()

    return (
        <ul>
            {anecdotes.map((anecdote, index) => (
                <li>
                    {anecdote} <br />
                    has {votes[index]}
                    <button onClick={() => actions.vote(index)}>vote</button>
                </li>
            ))}
        </ul>
    )
}

export default AnecdoteList