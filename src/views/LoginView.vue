<script>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";

export default {
  name: "LoginView",
  components: {
    Input,
    Button
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async submit() {
      if (!this.email || !this.password) return
      
      this.$router.push('/overview')
    }
  }
}
</script>

<template>
  <main>
    <div class="left">
      <img src="@/assets/logo.svg" width="385" alt="logo" />
    </div>
    <div class="right">
      <div class="formDiv">
        <form @submit.prevent="submit">
          <h1>Login</h1>
          <p class="note">Kindly enter your details to log in</p>
          <Input
            label="Email Address"
            type="email"
            name="email"
            id="email"
            v-model="email"
          />
          <Input
            label="Password"
            type="password"
            name="password"
            id="password"
            v-model="password"
          />
          <div style="margin-bottom: 1.5rem">
            <Button 
              name="Log in"
              width="100%"
            />
          </div>
          <div style="display: flex; flex-direction: column; align-items: center;">
            <p class="forgot">Forgot your password?</p>
            <p style="font-size: .75rem">
              <span class="hint">Privacy Policy</span>
              <span class="and"> and </span> 
              <span class="hint">Terms of services</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
main{
  display: flex;
}
.left{
  max-width: 480px;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  background-color: var(--bg-color-blue);
}
.right{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
}
.formDiv{
  width: 100%;
  max-width: 467px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
}
.formDiv>form{
  width: 100%;
  padding: 2rem 3rem;
}
.formDiv>form>h1{
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 32px;
  color: var(--text-color-dark);
  margin-bottom: .5rem;
}
.note{
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  margin-bottom: 3.875rem;
  color: var(--text-color-darkgrey);
}
.forgot{
  color: var(--text-color-blue);
  cursor: pointer;
  margin-bottom: 6rem;
  font-size: .875rem;
}
.hint{
  text-decoration: underline;
  cursor: pointer;
}
.and{
  color: var(--text-color-grey);
}
@media screen and (max-width: 900px) {
  .left{
    display: none;
    min-height: 100vh;
  }
}
</style>