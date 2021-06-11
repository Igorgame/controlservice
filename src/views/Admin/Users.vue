<template>
    <div>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-offset-3 col-md-6">
                <span class="heading">Пользователи</span>
                
                    <section> 
                        <UserList :users ="users"/>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import UserList from '@/components/lists/UserList'
export default {
    name: 'users',
    data: () => ({
        users: [],
    }),
    components: {
        UserList
    },
    computed: {

    },
  async mounted() {
        this.users = await this.$store.dispatch('fetchUsers')
  }
}
</script>