<template>
  <div class="app-main-layout">
    <NavExecutor  @click="isOpen = !isOpen"/>
    <SideExecutor  v-model="isOpen"/>

    
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

  </div>
</template>

<script>
import NavExecutor from '@/components/app/NavE'
import SideExecutor from '@/components/app/SideE'

export default {
  components: {
    NavExecutor, SideExecutor
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