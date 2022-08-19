<template>
    <div>
        <div class="summarize-page">
            <h1 class="title">Summary</h1>
            <div v-for="(question, index) in questions"
            :item="question"
            :index="index"
            :key="question" class="summary-question-box">
                <p v-if="question" class="question-sentence">{{decodeHTML(question.question)}}</p>
                <p class="answer-text">Correct answer: <span>{{JSON.parse(decodeHTML(question.correct_answer).toLowerCase())}}</span></p>
                <p class="answer-text">Your answer: <span>{{answers[index].answer}}</span></p>
            </div>
            <div class="total-score-box">
                <h2>Total Score</h2>
                <p>Your total score is: {{store.state.totalScore}} / 10</p>
            </div>
            <router-link to="/"><button class="play-again-btn">Play Again!</button></router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, computed } from 'vue';
import {useStore} from 'vuex';

const store = useStore();

const questions = computed(() => {
    return store.state.questions;
});

const answers = computed(() => {
    return store.state.answers;
});

var decodeHTML = function (html) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};




</script>

<style>

  .summary-question-box{
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
        margin: 50px auto 50px auto;
        row-gap: 40px;
        block-size: fit-content;
    }

    .total-score-box{
        text-align: center;
        margin: 20vh auto 15vh auto;

    }


    .answer-text{
        font-size: 15px;
        font-weight: 550;
    }

    .play-again-btn{
        margin: 5vh auto 50px auto;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;    border-radius: 15px;
        background-color: #6290C8;
        color: white;
        padding: 20px;
        width: 40%;
        border:none;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        border-radius: 15px;
        display: block;
        cursor: pointer;
    }

    .play-again-btn:hover{
        background-color: #4073b1;
    }

    p span{
        font-size: 20px;
        font-weight: 600;
        text-transform: capitalize;
    }
</style>