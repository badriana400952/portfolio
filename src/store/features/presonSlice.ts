import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Person {
    id?: number;
    names: string;
    lastName: string
}

interface PersonState {
    persons: Person[];
}

const initialState: PersonState = {
    persons: []
}

export const getData = createAsyncThunk("person/getData", async () => {
    const respons = await axios.get(`http://localhost:8000/person`)
    return respons.data
})
export const tambahData = createAsyncThunk("perdon/tambahData", async (newData : Person) => {
    const respons = await axios.post(`http://localhost:8000/person`, newData)
    return respons
})
export const PersonSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        addPerson: (state, action: PayloadAction<{name: string, lastname: string}> ) => {
            state.persons.push(({
                id: state.persons.length,
                names: action.payload.name,
                lastName: action.payload.lastname
            }))
        } 

    },
    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, action) => {
            state.persons = action.payload
        });
        builder.addCase(tambahData.fulfilled, (state, action) => {
            state.persons.push(action.payload.data)
        })
    }
})
export default PersonSlice.reducer;
export const {addPerson} = PersonSlice.actions