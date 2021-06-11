<template>
  <div class="app-main-layout">
    <NavCustomer  @click="isOpen = !isOpen"/>
    <SideCustomer  v-model="isOpen"/>

    
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

  </div>
</template>

<script>
import NavCustomer from '@/components/app/NavC'
import SideCustomer from '@/components/app/SideC'

export default {
  components: {
    NavCustomer, SideCustomer
  },
  data: () => ({
    isOpen: true
  }),
  async mounted() {//если в getters нет информациии о пользователе 
            //то обращаемся к this.$store с помощью метода dispatch для получения данных о пользователе
    if (!Object.keys (this.$store.getters.users).length) {
     await this.$store.dispatch('getName')
    }
  },
}
</script>