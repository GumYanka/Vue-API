<template>
   <div class="container">
    <h6 class="mt-5">Cards</h6>
    <div class="row justify-content-center">
      <div class="col-9 justify-content-center">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="card shadow bg-white rounded" v-for="card in cards" :key="card.id">
                <div class="card-body justify-content-center">
                  <div>{{card.title}}</div>
                   <img src="..\assets\thomas-vimare-IZ01rjX0XQA-unsplash.jpg" style="max-width: 100%" alt="">
                  <p>TEXT</p>
                 <b-card-text>{{card.body}}</b-card-text>
                </div>
              <nuxt-link></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  import axios from 'axios'
  export default {
    name: "main",
    data() {
      return {
        isAuthenticated: true,
        cards: [],
      }
    },
    mounted() {
      var self = this;
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (res) {
          self.cards = res.data;
          console.log('Data: ', res.data)
        })
        .catch(function (error) {
          console.log('Error: ', error)
        }); 
    }
}
</script>

<style scoped>
  .card {
    margin: 5px;
  }

  .card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 10%;
  }

  body,textarea,select {
    font-family: 'Roboto', sans-serif;
    font-size: 11pt;
    font-weight: 300;
    line-height: 1.75em;
    color: rgb(0, 0, 0);
  }

  h1,h2,h3,h4,h5,h6,div {
    font-weight: 200;
    color: #777;
  }

</style>
