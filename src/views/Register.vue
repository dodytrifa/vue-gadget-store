<template>
<div class="d-flex flex-column min-vh-100 justify-content-center align-items-center" style="background-color: #92C6FF">
  <form @submit.prevent='submitRegister' id="login-form">
    <h2 class="mb-4 text-center">Register your account</h2>
    <div class="mb-3 text-center">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
    </div>
    <div class=" mb-3 text-center">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input v-model ="password" type="password" class="form-control" id="password">
    </div>
    <div class="d-flex justify-content-center mb-3">
    <button type="submit" class="btn btn-primary">Submit</button><br><br>
    </div>
    <div class="d-flex justify-content-center">
    <button @click='toLogin' type="button" class="btn btn-secondary">Back To Login</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/')
    },
    submitRegister () {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password
      })
        .then(response => {
          console.log(response.data)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
</script>

<style>

</style>
