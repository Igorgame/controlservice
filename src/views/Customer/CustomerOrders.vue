<template>
  <div>
    <div class="page-title">
        <h3>Заказы</h3>
    </div>

    <section>
      <CustomerOrders :orders ="orders" />
    </section>
  </div>
</template>


<script>
import CustomerOrders from '@/components/lists/CustomerOrders'
export default {
  name: 'order-list',
  components: {
    CustomerOrders
  },
  data: () => ({
    categories: [],
    users: [],
    orders: [],
  }),
  async mounted() {
        this.categories = await this.$store.dispatch('fetchCategories')
        this.users = await this.$store.dispatch('fetchUsers')
        const orders = await this.$store.dispatch('fetchOrders')
        this.orders = orders.map(order => {
          return {
            ...order,
            categoryName: this.categories.find(c => c.id === order.category),
            customerName: this.users.find(cu => cu.id === orders.customer),
            executorName: this.users.find(ex => ex.id === orders.executor)
          }
        })
  },
}
  


</script>