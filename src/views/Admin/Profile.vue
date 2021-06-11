<template>
  <div>
   <form class="card auth-card" @submit.prevent="submitClick">
      <div class="card-content">
        <span class="card-title">Профиль</span>

        <div class="input-field">
          <input id="surname" type="text" v-model.trim="surname">
          <label for="surname">Фамилия</label>
        </div>

        <div class="input-field">
          <input id="name" type="text" v-model.trim="name">
          <label for="name">Имя</label>
        </div>

        <div class="input-field">
          <input id="patronymic" type="text" v-model.trim="patronymic">
          <label for="patronymic">Отчество</label>
        </div>

        <div class="input-field">
          <input id="phone" type="text" v-model.trim="phone">
          <label for="phone">Телефон</label>
        </div>


        <div class="input-field">
          <input id="email" type="text" v-model.trim="email">
          <label for="email">Email</label>
        </div>

        <div class="input-field">
          <input id="password" type="password" v-model.trim="password">
          <label for="password">Пароль</label>
        </div>

        <div class="input-field">
           <select type="text" class="browser-default" v-model="role">
              <option disabled value="">Роль</option>
              <option value="Администратор">Администратор</option>
              <option value="Заказчик">Заказчик</option>
              <option value="Исполнитель">Исполнитель</option>
            </select>
        </div>
      </div>
  </form>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data: () => ({
    surname: '',
    name: '',
    patronymic: '',
    phone: '',
    email: '',
    password: '',
    role: ''
    }),
    mounted() {
        this.surname = this.user.surname
    },
    computed: {
        ...mapGetters(['user'])
    }
}
</script>
