<template>
  <div class="app-main-layout">
    <NavAdmin  @click="isOpen = !isOpen"/>
    <SideAdmin  v-model="isOpen"/>

    
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

  </div>
</template>

<script>
import NavAdmin from '@/components/app/NavA'
import SideAdmin from '@/components/app/SideA'

export default {
  components: {
    NavAdmin, SideAdmin
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