<template>
    <div>
        <h1 v-html="question"></h1>
        <div v-for="(a, index) in answersTab" :key="index">
        <label v-html="a"></label>
        <input type="radio" :value="a" name="rep">
    </div>
    
    <br>
        <button type="submit" @click="checkAnswer">Répondre</button>
        <br><br>
        <span>Joueur: {{ userCount }} --- Ordinateur --- {{ cpuCount }}</span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            question: '',
            incorrectAnswers: [],
            correctAnswer: '',
            category: '',
            difficulty: '',
            userCount: 0,
            cpuCount: 0,            
        }
    },

    methods: {
        checkAnswer(){
            let repUser = document.querySelector('input[name="rep"]:checked').value;
            if(repUser === this.correctAnswer){
                this.userCount++;
                alert('Bonne réponse !');
            } else {
                this.cpuCount++;
                alert('Mauvaise réponse !, la bonne réponse était ' + this.correctAnswer + '.');
            }
        },
    },

    computed: {
        answersTab(){
            let answers = [...this.incorrectAnswers];
            answers.splice(Math.floor(Math.random() * answers.length), 0, this.correctAnswer);
            return answers;
        }
    },

    created(){
        this.axios.get('https://opentdb.com/api.php?amount=10')
        .then((response) => {
            this.question = response.data.results[0].question;
            this.incorrectAnswers = response.data.results[0].incorrect_answers;
            this.correctAnswer = response.data.results[0].correct_answer;
            this.category = response.data.results[0].category;
            this.difficulty = response.data.results[0].difficulty;
        })
    }
}

</script>

<style>

</style>