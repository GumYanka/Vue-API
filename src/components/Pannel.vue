<template>
  <div>
    <div id="nav-wrapper">
      <nav id="nav">
        <ul>
          <li v-if="isloged">
            <router-link :to="{ name: 'Main' }">Main</router-link>
          </li>
          <li v-if="!isloged">
            <router-link :to="{ name: 'register' }">Sign Up</router-link>
          </li>
          <li v-if="!isloged">
            <router-link :to="{ name: 'Login' }"
              >Log In<ion-icon name="log-in-outline"></ion-icon
            ></router-link>
          </li>
          <li v-if="isloged">
            <a @click="logOut()"><router-link :to="{ name: 'Login' }">logout</router-link><ion-icon name="log-out-outline"></ion-icon
            ></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-header',
  props: {},
  data() {
    return {
      isloged: false,
    };
  },
  mounted() {
    if (localStorage.getItem('password'))
      (this.isloged = true), 
      console.log(localStorage.getItem('password'));
      if (localStorage.getItem('username'))
      (this.isloged = true),
      console.log(localStorage.getItem('username'));
  },
  methods: {
    logOut: function() {
      localStorage.removeItem('password');
      localStorage.removeItem('username');
      window.location.reload()
      .then(() => {
          this.$router.go({ path: '/login' })
      })
    },
  },
};
</script>

<style>
a {
    color: #000000 !important;
    text-decoration: none;
    background-color: transparent;
}

body {
  margin: 0;
  padding: 0;
}

body,
input,
textarea,
select {
  font-family: 'Roboto', sans-serif;
  font-size: 11pt;
  font-weight: 300;
  line-height: 1.75em;
  color: #777;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 300;
  color: #777;
}

h2 {
  letter-spacing: -0.025em;
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
  color: inherit;
  text-decoration: none;
}
a:-webkit-any-link {
  text-decoration: none !important;
  cursor: progress;
}
a {
  text-decoration: none;
  color: #000000;
}

a:hover {
  text-decoration: underline;
}
#nav-wrapper {
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 35px;
}

#nav > ul {
  margin: 0;
  padding: 0;
  text-align: center;
}

#nav > ul > li {
  display: inline-block;
  border-right: 1px solid;
  border-color: rgba(255, 255, 255, 0.541);
}

#nav > ul > li > a,
#nav > ul > li > span {
  display: inline-block;
  padding-top: 0.5em;
  padding-right: 1.7em;
  padding-bottom: 0.5em;
  padding-left: 1.7em;
  letter-spacing: 0.06em;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.7em;
  outline: 0;
  color: rgb(0, 0, 0);
}

#nav > ul > li > ul {
  display: none;
}

</style>
