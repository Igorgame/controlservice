<template>
    <div class="col s12 m6">
        <div>
            <div class="page-subtitle">
                <h4>Список категорий</h4>
            </div>

<form @click.prevent="edit">
                <table class="table">
        <thead>
        <tr>
            <th>Наименование</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for= "category of categories" :key="category.id">
            <td>{{category.name}}</td>
    
        </tr>
        </tbody>
    </table>
</form>
        </div>
    </div>
</template>

<script>

export default {
    props:  {
        categories: {
            type: Array,
            required: true,

        }
    },
    data: () =>  ({
        select: null
    }),
    mounted() {
       this.select = M.FormSelect.init(this.$refs.select);
  },
  beforeDestroy() {
    if (this.select && this.select.destroy) {
      this.select.destroy()
    }
  }
}
</script>