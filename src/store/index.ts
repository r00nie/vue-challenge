import { STATEMENT_OR_BLOCK_KEYS } from '@babel/types';
import axios from 'axios'
import { createStore } from 'vuex'

export interface QuestionsInterface{
  questions: any[];
  questionNumber: number;
}


export default createStore<QuestionsInterface>({
  state: {
    questions: [],
    questionNumber: 0
  },
  getters: {
    getQuestions: (state) => state.questions,
    getQuestionNumber: (state) => state.questionNumber
  },
  mutations: {
    SET_QUESTIONS(state, questions: any[]){
      console.log(questions)
      state.questions = questions;
    },
    SET_QUESTION_NUMBER(state, number: number){
      state.questionNumber = state.questionNumber + number;
    }
  },
  actions: {
    async fetchQuestions({commit}){
      try{
        const data = await axios.get("https://opentdb.com/api.php?amount=10&type=boolean");
        // console.log(data.data);
        commit('SET_QUESTIONS', data.data.results);
      }
      catch (error){
        alert(error);
        console.log(error);
      }
    },
    increaseQuestionNumber({commit}){
      commit('SET_QUESTION_NUMBER', 1);
    },
    decreaseQuestionNumber({commit}){
      commit('SET_QUESTION_NUMBER', -1);
    }
  },
  modules: {
  }
})
