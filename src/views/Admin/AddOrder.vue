<template>
    <div>
        <div class="page-title">
            <h3>Добавление заказа</h3>
        </div>
        <section>
            <div class="row" >
                <OrderCreate />
            </div>
        </section>
  </div>
</template>

<script>
import OrderCreate from '@/components/create/OrderCreate'

export default {
    name: 'add-order',
    components: {
        OrderCreate,
    },
    async mounted() {
        this.categories = await this.$store.dispatch('fetchCategories')
        this.users = await this.$store.dispatch('fetchUsers')

    },
}
</script>т