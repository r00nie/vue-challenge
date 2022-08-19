import { STATEMENT_OR_BLOCK_KEYS } from '@babel/types';
import axios from 'axios'
import { createStore } from 'vuex'



export interface QuestionsInterface{
  questions: any[];
  questionNumber: number;
  answer?: boolean;
  answers: any[],
  totalScore: number
}


export default createStore<QuestionsInterface>({
  state: {
    questions: [],
    questionNumber: 0,
    answer: undefined,
    answers: Array(10).fill({answer: "none"}),
    totalScore: 0
  },
  getters: {
    getQuestions: (state) => state.questions,
    getQuestionNumber: (state) => state.questionNumber,
    getAnswer: (state) => state.answer,
    getAnswers: (state) => state.answers,
    getTotalScore: (state) => state.totalScore
  },
  mutations: {
    SET_QUESTIONS(state, questions: any[]){
      console.log(questions)
      state.questions = questions;
    },
    SET_QUESTION(state, number: number){
      if(state.questionNumber + number == 10 || state.questionNumber + number == -1){
        if(state.answer){
          state.answers[state.questionNumber] = state.answer;
          state.answer = undefined;
        }
        return;
      }
      if(state.answer){
        state.answers[state.questionNumber] = state.answer;
        state.answer = undefined;
      }
      state.questionNumber = state.questionNumber + number;
    },
    SET_ANSWER(state, answer:boolean){
      state.answer = answer;
      console.log(state.answer);
    },
  },
  actions: {
    async fetchQuestions({commit}){
      try{
        const data = await axios.get("https://opentdb.com/api.php?amount=10&type=boolean");
        commit('SET_QUESTIONS', data.data.results);
      }
      catch (error){
        alert(error);
        console.log(error);
      }
    },
    increaseQuestionNumber({commit}){
      commit('SET_QUESTION', 1);
    },
    decreaseQuestionNumber({commit}){
      commit('SET_QUESTION', -1);
    },
    setAnswer({commit}, answer){
      commit('SET_ANSWER', answer);
    },
  },
  modules: {
  }
})
