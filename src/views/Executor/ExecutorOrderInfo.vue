<template>
  <div>
    <div>
      <div class="breadcrumb-wrap">
        <a href="/executor-orders" class="breadcrumb">Заказы</a>
        <a class="breadcrumb">
          Заказ
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card orange lighten-1">
            <div class="card-content black-text">
                <p>Наименование: {{order.ordername}}</p>
                <p>Адрес: {{order.address}}</p>
                <p>Дата: {{order.date}}</p>
                <p>Категория: {{order.categoryName}}</p>
                <p>Заказчик: {{order.customerName}}</p>
                <p>Исполнитель: {{order.executorName}}</p>
                <p>Цена: {{order.price}}</p>
                <p>Статус: {{order.status}}</p>
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
    order: null,
 
    }),
   
    async mounted() {
        const id = this.$route.params.id
        const order = await this.$store.dispatch('fetchOrderById', id)
        const category = await this.$store.dispatch('fetchCategoryById', order.category)
        const user = await this.$store.dispatch('fetchUserById', order.customer)
        this.user = await this.$store.dispatch('fetchUserById', order.executor)

        this.order = {
            ...order,
            categoryName: order.category,
            customerName: order.customer,
            executorName: order.executor

  
        }
    }
}
        

</script>
