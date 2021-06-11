<template>
    <form class="card auth-card" @submit.prevent="submitClick">
      <div class="card-content">

        <div class="input-field">
          <input id="ordername" type="text" v-model.trim="ordername">
          <label>Заказ</label>
        </div>

        <div class="input-field">
          <input id="address" type="text" v-model.trim="address">
          <label>Адрес</label>
        </div>

        <div class="input-field">
          <input id="date" type="date" v-model.trim="date">
          <label>Дата</label>
        </div>

        <div class="input-field">
            
           <select id="category" type="text" v-model.trim="category" class="browser-default" v-model="category">
               <option value="" disabled selected>Категория</option>
               <option
                v-for="c of categories"
                :key="c.id"
                :value="c.name"
                >{{c.name}}
                </option>
            </select>
            
        </div>

        <div class="input-field">
          <select id="customer" type="text" v-model.trim="customer" class="browser-default" v-model="customer">
               <option value="" disabled selected>Заказчик</option>
               <option
                v-for="cu of users"
                :key="cu.id"
                :value="cu.surname + ' ' + cu.name + ' ' + cu.patronymic"
                >{{cu.role + ' ' + cu.surname + ' ' + cu.name + ' ' + cu.patronymic}}
                </option>
            </select>
        </div>

        <div class="input-field">
           <select id="executor" type="text" v-model.trim="executor" class="browser-default" v-model="executor">
               <option value="" disabled selected>Исполнитель</option>
               <option
                v-for="ex of users"
                :key="ex.id"
                :value="ex.surname + ' ' + ex.name + ' ' + ex.patronymic"
                >{{ex.role + ' ' + ex.surname + ' ' + ex.name + ' ' + ex.patronymic}}
                </option>
            </select>
        </div>

        <div class="input-field">
          <input id="price" type="text" v-model.trim="price">
          <label>Цена</label>
        </div>

        <div class="input-field">
           <select id="status" v-model.trim="status" type="text" class="browser-default" v-model="status">
                <option value="" disabled selected>Статус</option>
                <option value="Выполняется">Выполняется</option>
                <option value="Проверка">Проверка</option>
                <option value="Выполнено">Выполнено</option>
            </select>
            
        </div>
      </div>

      <div class="card-action">
        <div>
          <button class="btn waves-effect waves-light auth-submit" type="submit">
            Создать
          </button>
        </div>
      </div>
  </form>
</template>

<script>
export default {
  
    data: () => ({
        ordername: '',
        address: '',
        date: '',
        category: '',
        customer: '',
        executor: '',
        price: '',
        status: '',
        select: null,
        categories: [],
        users: [],
    }),

    methods: {
    async submitClick() {
      try { // передаём action
        const order = await this.$store.dispatch('addOrder', {
            ordername: this.ordername,
            address: this.address,
            date: this.date,
            category: this.category,
            customer: this.customer,
            executor: this.executor,
            price: this.price,
            status: this.status
        })
        alert('Заказ ' + '"' + this.ordername + '"' +' добавлен')
        this.ordername = '',
        this.address = '',
        this.date = '',
        this.category = '',
        this.customer = '',
        this.executor = '',
        this.price = '',
        this.status = ''
        this.$emit('created',order)
        console.log(order)
        } catch(e) {}
    }
  },
   async mounted() {
    this.select = M.FormSelect.init(this.$refs.select);
    this.categories = await this.$store.dispatch('fetchCategories')
    this.users = await this.$store.dispatch('fetchUsers')

    },
  beforeDestroy() {
    if (this.select && this.select.destroy) {
      this.select.destroy()
    }
  }
}
</script>
