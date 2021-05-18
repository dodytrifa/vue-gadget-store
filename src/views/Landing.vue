<template>
<div class="d-flex flex-column min-vh-100 justify-content-center align-items-center" style="background-color: #92C6FF">
  <form @submit.prevent='submitLogin' id="login-form">
    <h3 class="mb-4">Welcome to Gadget Store</h3>
    <h2 class="text-center">Login</h2><br>
    <div class="mb-3 text-center">
      <label for="exampleInputEmail1" class="form-label ">Email address (john@mail.com)</label>
      <input v-model="email" type="email" class="form-control " id="email" aria-describedby="emailHelp">
    </div>
    <div class=" mb-3 text-center">
      <label for="exampleInputPassword1" class="form-label">Password (1234567)</label>
      <input v-model ="password" type="password" class="form-control" id="password">
    </div>
    <div class="d-flex justify-content-center">
      <button type="submit" class="btn btn-primary ">Submit</button>
    </div><br>
      <p>If you don't have an account, please register</p>
    <div class="d-flex justify-content-center">
      <button @click='toRegister' type="button" class="btn btn-secondary">Register</button>
    </div>
  </form>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Landing',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toRegister () {
      this.$router.push('/register')
    },
    submitLogin () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
        .then(response => {
          // console.log(response.data)
          localStorage.setItem('access_token', response.data.access_token)
          this.$store.commit('CHANGEISLOGIN', true)
          this.$router.push('/showproducts')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
</script>
