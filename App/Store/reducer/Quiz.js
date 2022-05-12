import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({
  name: 'Loyalty',
  initialState: {
    allQuiz: [],
  },
  reducers: {
    setQuize(state,action) {
        console.log("action.pay", action.payload)
        state.allQuiz = action.payload
    },
    updateQuize(state, action) {
        const {attempt, ansStat, userAns, activeIndex} = action.payload;
        if (attempt) {
            state.allQuiz[activeIndex].attempt = true;
            state.allQuiz[activeIndex].user_answer_status = ansStat;
            state.allQuiz[activeIndex].user_answer = userAns;
            // setTotAttempt(totAttempt + 1)
        } else {
            state.allQuiz[activeIndex].attempt = false;
        }
    }
  }
})

export const { setQuize, updateQuize } = quizSlice.actions;

export default quizSlice.reducer;
