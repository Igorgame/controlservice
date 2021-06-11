<template>
    <table>
        <thead>
          <tr>
            <th>Заказ</th>
            <th>Адрес</th>
            <th>Дата</th>
            <th>Цена</th>
            <th>Статус</th>
            <th>Открыть</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for= "order of orders" :key="order.id">
            <td>{{order.ordername}}</td>
            <td>{{order.address}}</td>
            <td>{{order.date}}</td>
            <td>{{order.price}}</td>
            <td>{{order.status}}</td>
            <td>
              <button class="btn-small btn" @click="$router.push('/order-info/' + order.id)">
                <i class="material-icons">open_in_new</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
</template>

<script>
export default {
    props: {
        orders: {
            type: Array,
            require: true
        }
    }
}
</script>