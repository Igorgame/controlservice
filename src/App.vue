<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import AdminLayout from '@/layouts/AdminLayout'
import CustomerLayout from '@/layouts/CustomerLayout'
import ExecutorLayout from '@/layouts/ExecutorLayout'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  },
  components: {
    MainLayout, AdminLayout, CustomerLayout, ExecutorLayout
  }
}
</script>


<style lang="scss">
  @import '~materialize-css/dist/css/materialize.min.css';
  @import 'assets/index.css';
</style>
