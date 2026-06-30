import { useAnecdoteStore } from '../store'

const AnecdoteList = () => {
    const {anecdotes, votes, actions} = useAnecdoteStore()

    //pair anecdotes with votes
    const combined = anecdotes.map((a, i) => ({ id: a.id, content: a.content, votes: votes[i], index: i }))
    
    //sort by descending
    const sorted = combined.toSorted((a, b) => b.votes - a.votes)

    return (
        <ul>
            {sorted.map(({ content, votes, index }) => (
                <li key={index}>
                    {content} <br />
                    has {votes} votes
                    <button onClick={() => actions.vote(index)}>vote</button>
                </li>
            ))}
        </ul>
    )
}

export default AnecdoteList