<template>
  <section class="container-fluid signUp">
    <div class="row justify-content-center mt-5">
      <div class="col-lg-4">
        <div class="row mt-3 justify-content-center">
          <h6>Sign Un</h6>
        </div>
        <div class="card shadow bg-white rounded container">
          <form action="#" @submit.prevent="register">
            <div class="mt-4 row justify-content-center">
              <div class="col-9 mt-2">
                <label class="input-label">Username:</label>
                <input type="text"  class="form-control form-control-sm" v-model="name">
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-9 mt-2">
                <label class="input-label">Email:</label>
                <input type="email" class="form-control form-control-sm" v-model="email">
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-9 mt-2">
                <label class="input-label">Password:</label>
                <input type="password" class="form-control form-control-sm" v-model="password">
              </div>

            </div>
            <div class="form-group d-flex justify-content-center mt-4">
              <button class="btn btn-outline-secondary button" type="submit">Create Account</button>
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
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        name: this.name,
        email: this.email,
        password: this.password,
      })
        .then(response => {
          this.$router.push({ name: 'login' })
        })
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
</style>