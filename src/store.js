import { create } from "zustand";

export const useAnecdoteStore = create((set) => ({
  selected: 0,
  votes: [],
  anecdotes: [
    { id: 1, content: "If it hurts, do it more often." },
    {
      id: 2,
      content: "Adding manpower to a late software project makes it later!",
    },
    {
      id: 3,
      content:
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    },
    {
      id: 4,
      content:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    },
    { id: 5, content: "Premature optimization is the root of all evil." },
    {
      id: 6,
      content:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    },
    {
      id: 7,
      content:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    },
    { id: 8, content: "The only way to go fast, is to go well." },
  ],
  actions: {
    initVotes: (length) => set({ votes: Array(length).fill(0) }),
    vote: (index) =>
      set((state) => {
        const newVotes = [...state.votes];
        newVotes[index] += 1;
        return { votes: newVotes };
      }),
    add: (content) =>
      set((state) => ({
        anecdotes: state.anecdotes.concat(content),
        votes: state.votes.concat(0), //keep votes array in sync
      })),
  },
}));
