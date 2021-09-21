<template>
  <section class="container-fluid signUp">
    <div class="row justify-content-center mt-5">
      <div class="col-lg-4">
        <div class="row mt-3 justify-content-center">
          <h6>Sign Un</h6>
        </div>
        <div class="card shadow bg-white rounded container">
          <form @submit.prevent="checkForm">
            <p v-if="errors.length">
            <b>Please correct the indicated errors</b>
              <ul>
                <li class="error-li" :v-for="errors">{{errors}}</li>
              </ul>
            </p>
            <div class="mt-4 row justify-content-center">
              <div class="col-9 mt-2">
                <label class="input-label">Username:</label>
                <input type="text"  class="form-control form-control-sm" v-model="name">
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-9 mt-2">
                <label class="input-label">Email:</label>
                <input class="form-control form-control-sm" v-model="email">
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-9 mt-2">
                <label class="input-label">Password:</label>
                <input type="password" class="form-control form-control-sm" v-model="password">
              </div>

            </div>
            <div class="form-group d-flex justify-content-center mt-4">
              <button @click="register" class="btn btn-outline-secondary button" type="submit">Create Account</button>
            </div>

          </form>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
  name: 'register',
  data() {
    return {
      errors: [],
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    register: function() {
        let name = this.name
        let username = this.username
        let password = this.password
      this.$store.dispatch('register', { name, username, password })
      if(name, username, password){
        this.$router.push({ name: 'Login' })
      }
      console.log(name)
      .then(() => this.$router.push({ name: 'Login' }))
      .catch(err => console.log(err))
    },
    checkForm: function (e) {
      if (this.username && this.password && this.email) {
        return true;
      } 
      this.errors = [];

      if (!this.name) {
        this.errors.push('A name is required.');
      }
      if (!this.password) {
        this.errors.push('Password is required.');
      }
      if (!this.email) {
        this.errors.push('Email is required.');
      }

      e.preventDefault();
      }
  }
}
</script>

<style lang="scss" scoped>
.card{
  max-width: 500px;
} 
 .button {
    font-size: 12px;
  }
  .input-label{
    font-size: 12px;
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
  .error-li{
    list-style-type: none;
  }
</style>