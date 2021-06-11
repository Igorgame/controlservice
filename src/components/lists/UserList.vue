<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Отчество</th>
                <th>Роль</th>
                <th>Открыть</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for= "user of users" :key="user.id">
                <td>{{user.surname}}</td>
                <td>{{user.name}}</td>
                <td>{{user.patronymic}}</td>
                <td>{{user.role}}</td>
                <td>
                    <button class="btn-small btn" @click.prevent="$router.push('/user-info/' + user.id)">
                        <i class="material-icons">open_in_new</i>
                    </button>
                </td>
            </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        users: {
            type: Array,
            require: true
        }
    },
}
</script>