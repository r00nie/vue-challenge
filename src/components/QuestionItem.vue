<template>
    <div class="question-item">
        <p v-if="questions[0]" class="question-sentence">{{decodeHTML(questions[0].question)}}</p>
        <p v-else>Loading...</p>
        <button>True</button>
        <button>False</button>
        <button>Next Question</button>
    </div>
</template>

<script setup lang="ts">
import {onMounted, computed } from 'vue';
import {useStore} from 'vuex';

const store = useStore();


const getQuestions = computed(() => {
    return store.getters.getQuestions;
});


const questions = computed(() => {
    return store.state.questions;
});

onMounted(() =>{
    store.dispatch("fetchQuestions");
    
});

const updateQuestionNumber = () => {
    store.dispatch("increaseQuestionNumber");
}

var decodeHTML = function (html) {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};



</script>


<style>

.question-item{
    height: 30vh;
    width: 50vw;
    background-color: white;
}

</style>