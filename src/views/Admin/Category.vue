<template>
    <div>
        <div class="page-title">
            <h3>Категории</h3>
        </div>
        <section>
            <div class="row" >
                <CategoryCreate 
                />

                <CategoryList 
                :categories="categories"
                />
            </div>
        </section>
  </div>
</template>

<script>
import CategoryCreate from '@/components/create/CategoryCreate'
import CategoryList from '@/components/lists/CategoryList'

export default {
    name: 'categories',
    data: () => ({
        categories: []
    }),
    components: {
        CategoryCreate, 
        CategoryList
    },
    async mounted() {
        this.categories = await this.$store.dispatch('fetchCategories')
    },
}
</script>