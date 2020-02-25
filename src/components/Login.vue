<template>
  <div class="login">
      <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3>DC Comics Rebirth - Covers</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-6 offset-3">
                <div class="card">
                    <div class="card-body">
                    <input 
                        type="text" 
                        v-model="email" 
                        placeholder="Email address" 
                        class="form-control" 
                        required>
                    <br/>
                    <input 
                        type="password" 
                        v-model="password"
                        placeholder="Password" 
                        class="form-control" 
                        required>
                    <br/>
                    <button v-on:click="login" class="btn btn-primary">Login</button>
                    <p class="mt-2"><router-link to="/signup">
                        New Here? Create a new account
                    </router-link></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then( (user) => {
                this.$router.replace('/comics')
            }).catch( (err) => {
                console.log(err.message)
            })
        }
    }
}
</script>