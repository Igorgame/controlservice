<template>
    <div>
        <ul class="sidenav app-sidenav" :class="{open: value}">
            <router-link class="nav-item"
            v-for="link in links" 
            :key="link.url"
            tag="li"
            active-class="active"
            :to="link.url"
            :exact="link.exact"
            >
                <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
     data: () => ({
        links: [
            {title: 'Пользователи', url: '/user-list'},
            {title: 'Регистрация пользователя', url: '/registration'},
            {title: 'Заказы', url: '/orders'},
            {title: 'Добавить заказ', url: '/add-order'},
            {title: 'Категории', url: '/category'},
        ],
    }),
    props: ['value'],
}
</script>