<template>
  <form class="card auth-card" @submit.prevent="submitClick">
      <div class="card-content">
        <span class="card-title">Регистрация</span>

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

      <div class="card-action">
        <div>
          <button class="btn waves-effect waves-light auth-submit" type="submit">
            Зарегистрироваться
          </button>
        </div>
      </div>
  </form>
</template>


<script>
import firebase from "firebase";

export default {
  name: 'registration',
  data: () => ({
    
      surname: '',
      name: '',
      patronymic: '',
      phone: '',
      email: '',
      password: '',
      role: ''

  }),
  
  methods: {
    async submitClick() { // передаём значения полей
        const formData = {
            surname: this.surname,
            name: this.name,
            patronymic: this.patronymic,
            phone: this.phone,
            email: this.email,
            password: this.password,
            role: this.role
        }
        console.log(formData) 

          try { // передаём action и объект formData
            await this.$store.dispatch('registration', formData)
            alert('Пользователь ' + '"' + this.name + '"' +' добавлен')
          } catch(e) {}
       }
     }
   };
</script>