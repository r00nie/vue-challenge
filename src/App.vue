<template>
  <div class="app">
    <h1>{{title}}</h1>
    <QuestionItem></QuestionItem>
  </div>
</template>
  
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import QuestionItem from "./components/QuestionItem.vue";

@Options({
  components: {
    QuestionItem
  },
})

export default class App extends Vue {
  public title = "Quiz App";

}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", Arial;
  }

  body {
    background-color: #BBCEA8;
    color: #0B0A07;
  }
</style>
