<template>
  <div class="app">
    <!-- <div>
        <WelcomeComponent></WelcomeComponent>
    </div>
    <div>
      <h1 class="title">{{title}}</h1>
      <QuestionItem></QuestionItem>
    </div> -->
    <router-view></router-view>  
  </div>
</template>
  
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import QuestionItem from "./components/QuestionItem.vue";
import WelcomeComponent from "./components/WelcomeComponent.vue";


@Options({
  components: {
    QuestionItem,
    WelcomeComponent
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

  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }

  body {
    background-color: #829CBC;
    color: white;
    padding: 0 18vw 0 18vw;
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
