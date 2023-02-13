import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: localStorage.getItem("NotesApp")
    ? JSON.parse(localStorage.getItem("NotesApp"))
    : [],
}

const todoSlice = createSlice({
    name: "notesapp",
    initialState,
    reducers: {
        addNewNote: (state, action) => {
            console.log({action, state});
            state.data = [action.payload, ...state.data];
        },
        deleteNote: (state, action) => {
         
            const newNote = state.data.filter(
                (item) => item.id !== action.payload.id
            )
            state.data = newNote
            localStorage.setItem("NotesApp", JSON.stringify(state.data));
        },
        detailNote: (state, action) => {
        }
    },
})

export const {  addNewNote, deleteNote, detailNote } = todoSlice.actions;

export const selectNote = (state) =>  state.notesapp.data;

export const todoReducer = todoSlice.reducer;