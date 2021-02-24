<template>
  <div class="d-flex justify-content-center">
    <form @submit.prevent='submitRegister' id="login-form">
      <h2>Register</h2>
      <div class="mb-3 ">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
      </div>
      <div class=" mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input v-model ="password" type="password" class="form-control" id="password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button><br><br>
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
