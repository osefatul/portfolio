import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    projects: [],
    project: {},
    error: "",
}

const loginSlice = createSlice ({
    name: 'githubApi',
    initialState,

    reducers: {
        dataPending: (state, action)=>{
            state.isLoading = true
        },

        projectsSuccess: (state, action)=>{
            state.isLoading = false
            state.projects = action.payload

        },
        dataFail: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },
    }
})

const { reducer, actions} = loginSlice


export const  {dataPending, projectsSuccess, dataFail} = actions
export default reducer;