<template>
  <div>
    <div>
      <div class="breadcrumb-wrap">
        <a href="/user-list" class="breadcrumb">Пользователи</a>
        <a class="breadcrumb">
          Пользователь
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card orange lighten-1">
            <div class="card-content black-text">
                <p>Фамилия: {{user.surname}}</p>
                <p>Имя: {{user.name}}</p>
                <p>Отчество: {{user.patronymic}}</p>
                <p>Телефон: {{user.phone}}</p>
                <p>Почта: {{user.email}}</p>
                <p>Пароль: {{user.password}}</p>
                <p>Роль: {{user.role}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
    user: null,
 
    }),
   
    async mounted() {
        const id = this.$route.params.id
        const user = await this.$store.dispatch('fetchUserById', id)
        this.user = {
            ...user,
        }
    },
}
</script>
