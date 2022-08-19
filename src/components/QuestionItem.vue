<template>
    <div>
        <h1 class="title">Quiz App</h1>
        <div class="question-item">
            <p class="question-counter">{{store.getters.getQuestionNumber+1}} / 10</p>
            <p v-if="questions[0]" class="question-sentence">{{decodeHTML(questions[store.getters.getQuestionNumber].question)}}</p>
            <p v-else>Loading...</p>
            <button class="answer-button-true" @click="setAnswer(true)">True</button>
            <button class="answer-button-false" @click="setAnswer(false)">False</button>
            <button class="next-question-button" @click="increaseQuestionNumber">Next </button>
            <button class="previous-question-button" @click="decreaseQuestionNumber">Previous </button>
        </div>
        <router-link to="/summary"><button class="finish-button" @click="onClickSummary">Finish</button></router-link>
    </div>
</template>


<script setup lang="ts">
import {onMounted, computed } from 'vue';
import {useStore} from 'vuex';


const store = useStore();


// const getQuestions = computed(() => {
//     return store.getters.getQuestions;
// });

// const question = computed(() => {
//     return store.state.questionNumber;
// });

const questions = computed(() => {
    return store.state.questions;
});

const answers = computed(() => {
    return store.state.answers;
});



const increaseQuestionNumber = () => {return store.dispatch("increaseQuestionNumber")};

const decreaseQuestionNumber = () => {return store.dispatch("decreaseQuestionNumber")};

const setAnswer = (answer:boolean) => {return store.dispatch("setAnswer",{answer})};

onMounted(() =>{
    store.dispatch("fetchQuestions");
    store.state.questionNumber = 0;
});


var decodeHTML = function (html) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};

const onClickSummary = () => {
    for (let i = 0; i < store.state.questions.length; i++){
        if(JSON.parse(store.state.questions[i].correct_answer.toLowerCase()) == store.state.answers[i].answer){
            store.state.totalScore = store.state.totalScore + 1;
        }else{
            continue;
        }
    }
}

</script>


<style>

    .question-item{
        width: 100%;
        max-width: 500px;
        min-height: 100px;
        background-color: #376996;
        padding: 30px;
        display: block;
        text-align: center;
        box-shadow: 2px 2px 1px rgba(0, 0, 0, .5);
        border-radius: 25px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-start;
        gap: 20px;
        margin: auto;
        row-gap: 40px;
        block-size: fit-content;
    }

    .question-counter{
        box-shadow: 2px 4px 0px 0px rgba(255, 255, 255, 1);
        border-radius: 15px;
        padding: 5px;
        order: 0;
        background-color: #1F487E;
        flex-basis: 100%;
        margin: 0 30% 0 30%;
    }

    .question-sentence{
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
        border-radius: 15px;
        padding: 15px;
        order: 0;
        margin-top: 15px;
        background-color: #1F487E;
        max-width: 90%;
        min-width: 75%;
        block-size: fit-content;
    }

    .answer-button-true{
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
        width:35%;
        order: 1;
        background-color: #49F743;
        border: none;
        font-size: 20px;
        border-radius: 15px;
        padding: 5px 10px 5px 10px;
        font-weight: 700;
        cursor: pointer;
    }

    .answer-button-true:hover{
        background-color: #22c41c;
    }

    .answer-button-false{
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
        order: 2;
        width: 35%;
        background-color: #ED724C;
        border: none;
        font-size: 20px;
        border-radius: 15px;
        padding: 5px 10px 5px 10px;
        font-weight: 700;
        cursor: pointer;
    }

    .answer-button-false:hover{
        background-color: #dc572e;
    }

    .next-question-button{
        order:4;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;    
        border-radius: 15px;
        background-color: #6290C8;
        color: white;
        padding: 15px;
        min-width: 40%;
        border: none;
        font-size: 15px;
        cursor: pointer;
    }

    .next-question-button:hover{
        background-color: #508ad2;
    }

    .previous-question-button{
        order:3;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;    
        border-radius: 15px;
        background-color: #6290C8;
        color: white;
        padding: 15px;
        min-width: 40%;
        border:none;
        font-size: 15px;
        cursor: pointer;    
    }

    .previous-question-button:hover{
        background-color: #508ad2;
    }

    .finish-button{
        margin: 5vh auto auto auto;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;    border-radius: 15px;
        background-color: #6290C8;
        color: white;
        padding: 20px;
        width: 40%;
        max-width: 100px;
        border:none;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        border-radius: 15px;
        display: block;
        cursor: pointer;
    }

    .finish-button:hover{
        background-color: #4073b1;
    }

    .title{
        padding: 50px;
        margin:auto;
        margin-top: 10vh;
        max-width: 500px;
        text-align: center;
        border-radius: 25px;
        box-shadow: 4px 4px 1px rgba(0, 0, 0, .5);
        background-color: #6290C8;
        font-weight: bold;
        font-size: 40px;
        margin-bottom: 5vh;
  }

  

</style>