<template>
    <div class="col s12 m6">
        <div>
            <div class="page-subtitle">
                <h4>Создать</h4>
            </div>

            <form @submit.prevent="submitClick">
                <div class="input-field">
                <input id="name" type="text" v-model="name">
                <label>Название</label>
                </div>

                <button class="btn waves-effect waves-light">
                Создать
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        name: '',
    }),

    methods: {
    async submitClick() {
      try { // передаём action
        const category = await this.$store.dispatch('addCategory', {
            name: this.name
        })
        alert('Запись ' + '"' + this.name + '"' +' добавлена')
        this.name = '',
        this.$emit('created',category)
        } catch(e) {}
    }
  },
}
</script>