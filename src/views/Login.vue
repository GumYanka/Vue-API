<template>
  <section class="container-fluid">
    <div class="row justify-content-center mt-5">
      <div class="col-lg-4">
        <div class="row mt-3 justify-content-center">
          <h6>Log In</h6>
        </div>
        <div class="card shadow bg-white rounded container">
          <form @submit.prevent="login">
            <p v-if="errors.length">
    <b>Please correct the indicated errors</b>
    <ul>
      <li class="error-li" :v-for="errors">{{errors}}</li>
    </ul>
  </p>
            <div class="row justify-content-center">
              <div class="col-8 mt-5">
                <label class="input-label">Email:</label>
                <input min="1" class="form-control form-control-sm" maxlength="35" type="email" name="username" v-model="username">
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-8 mt-2">
                <label class="input-label">Password:</label>
                <input min="1" type="password" class="form-control form-control-sm" maxlength="20" v-model="password" >
              </div>
            </div>
            <div class="form-group d-flex justify-content-center mt-3">
              <button @click="checkForm" class="btn btn-outline-secondary button" type="submit">Login</button>
            </div>
          </form>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      errors: [],
      username: '',
      password: '',
      isAuthenticated: false,
    }
  },
   methods: {
      login: function () {
        let username = this.username
        let password = this.password
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        this.$store.dispatch('login', { username, password })
        window.location.reload()
        .then(() => this.$router.push({ name: 'Main' }))
        
      }, 
      checkForm: function (e) {
      if (this.username && this.password) {
        return true;
      } 
      this.errors = [];

      if (!this.username) {
        this.errors.push('A username is required.');
      }
      if (!this.password) {
        this.errors.push('Password required.');
      }

      e.preventDefault();
    }

    }
}
</script>

<style scoped>
  .card {
    max-width: 450px;
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