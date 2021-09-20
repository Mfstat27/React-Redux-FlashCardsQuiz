import {createSlice} from '@reduxjs/toolkit'
import { addQuizId } from '../topics/topicsSlice'

export const createQuiz = (payload) => {
    const {name, topicId, cardIds, id} = payload
    return (dispatch) => {
        dispatch(addQuiz({id, name, topicId, cardIds}))
        dispatch(addQuizId({topicId}))
    }
}

export const quizzesSlice = createSlice({
    name:'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id} = action.payload
            state.quizzes[id] = action.payload 
        }, 
    }
})

export const selectQuizzes = (state) => state.quizzes.quizzes
export const { addQuiz } = quizzesSlice.actions
export default quizzesSlice.reducer