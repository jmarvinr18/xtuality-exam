<template>
    <div class="hold-transition register-page">
        <div class="register-box mb-5 mt-5">
        <div class="register-logo">
            <a href="../../index2.html"><b>iGO </b>Admin</a>
        </div>

        <div class="card">
            <div class="card-body register-card-body">
            <p class="login-box-msg">Register a new membership</p>

            <form class="needs-validation">

              <div class="d-flex flex-column mb-3">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="First name" v-model="userData.first_name">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-user"></span>
                        </div>
                    </div>
                </div>
                <div class="error align-self-end">
                    {{errors.first_name}}
                </div>
              </div>
                <div class="d-flex flex-column mb-3">
                  <div class="input-group">
                      <input type="text" class="form-control" placeholder="Last name" v-model="userData.last_name">
                      <div class="input-group-append">
                          <div class="input-group-text">
                              <span class="fas fa-user"></span>
                          </div>

                      </div>
                  </div>
                <div class="error align-self-end">
                    {{errors.last_name}}
                </div>
                </div>
                
               <div class="d-flex flex-column mb-3">
                  <div class="input-group">
                      <input type="text" class="form-control" placeholder="Position" v-model="userData.position">
                      <div class="input-group-append">
                          <div class="input-group-text">
                          <span class="fas fa-envelope"></span>
                          </div>
                      </div>
                  </div>
                  <div class="error align-self-end">
                     {{errors.position}}
                  </div>
              </div>
               <div class="d-flex flex-column mb-3">
                  <div class="input-group">
                      <input type="email" class="form-control" placeholder="Email" v-model="userData.email">
                      <div class="input-group-append">
                          <div class="input-group-text">
                          <span class="fas fa-envelope"></span>
                          </div>
                      </div>
                  </div>
                  <div class="error align-self-end">
                     {{errors.email}}
                  </div>
              </div>
              <div class="d-flex flex-column mb-3">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Username" v-model="userData.username">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                        </div>
                    </div>
                </div>
                  <div class="error align-self-end">
                      {{errors.username}}
                  </div>
              </div>
              <div class="d-flex flex-column mb-3">
                <div class="input-group">
                    <input type="password" class="form-control" placeholder="Password" v-model="userData.password">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div class="error align-self-end">
                    {{errors.password}}
                </div>
              </div>
              <div class="d-flex flex-column mb-3">
                <div class="input-group">
                    <input type="password" class="form-control" placeholder="Retype password" v-model="userData.password">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div class="error align-self-end">
                    {{errors.password}}
                </div>
               </div>
                <div class="row">
                    <div class="col-4">
                        <button type="button" class="btn btn-primary btn-block" @click="register">Register</button>
                    </div>
                    <!-- /.col -->
                </div>
            </form>

            <a href="/login" class="text-center pt-5">I already have a membership</a>
            </div>
            <!-- /.form-box -->
        </div><!-- /.card -->
        </div>
    </div>
</template>

<script>
import user from '../../api/user'
export default {
    data () {
        return {
            userData: {
                first_name: '',
                last_name: '',
                email: '',
                position: '',
                username: '',
                password: '',
            },
            errors: []
        }
    },
    methods: {
        async register(){
            var isValid = this.validation()
            if (isValid) {
                this.$store.dispatch('user/register', this.userData)
            }
        },
        validation () {
          this.errors = []
          var isValid = true
          if(!this.userData.first_name) {
            this.errors.first_name ='First name field is empty.'
            isValid = false
          }
          if(!this.userData.last_name) {
            this.errors.last_name = 'Last name field is empty.'
            isValid = false
          }
          if(!this.userData.email) {
            this.errors.email = 'Email field is empty.'
            isValid = false
          }
          if(!this.userData.position) {
            this.errors.position = 'Position field is empty.'
            isValid = false
          }
          if(!this.userData.username) {
            this.errors.username = 'Username field is empty.'
            isValid = false
          }
          if(!this.userData.password) {
            this.errors.password = 'Password field is empty.'
            isValid = false
          }
          return isValid
        }
    }
}
</script>

<style>
    .error{
      color: red;
      font-style: italic;
      font-size: smaller;
      font-weight: 300;
    }
</style>