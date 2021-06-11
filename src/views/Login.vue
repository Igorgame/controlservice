<template>
  <form class="card auth-card" @submit.prevent="submitClick">
    <div class="card-content">
      <span class="card-title">Авторизация</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
        >
        <label for="email">Email</label>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
        >
        <label for="password">Пароль</label>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Войти
        </button>
      </div>

      <p class="center">
        Забыли пароль?
        <router-link to="/password-reset">Восстановить</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: ''
  }),

  methods: {
    async submitClick() {
      const formData = {
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/select-role')
      } catch (e) {}
    }
  }
}
</script>
