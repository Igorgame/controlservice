<template>
    <div>
        <nav class="navbar orange lighten-1">
            <div class="nav-wrapper">
                <a href="#" @click.prevent="$emit('click')">
                    <i class="material-icons black-text">dehaze</i>
                 </a>
                <a href="/" class="black-text">Констант-С </a>
                <a href="/login" class="black-text">Вход</a>
            </div>
        </nav>
    </div>
</template>