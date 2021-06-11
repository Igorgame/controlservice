<template>
    <div>
        <nav class="navbar orange lighten-1">
          <div class="nav-wrapper">
            <div class="navbar-left">
              <a href="#" @click.prevent="$emit('click')">
                <i class="material-icons black-text">dehaze</i>
              </a>
              <span class="black-text">{{date | date}}</span>
            </div>
                <a href="#" class="black-text">Констант-С </a>

            <ul class="right hide-on-small-and-down">
              <li>
                <a
                    class="dropdown-trigger black-text"
                    href="#"
                    data-target="dropdown"
                    ref="dropdown"
                >
                  {{name}}
                  <i class="material-icons right">arrow_drop_down</i>
                </a>

                <ul id='dropdown' class='dropdown-content'>
                  <li class="divider" tabindex="-1"></li>
                  <li>
                    <a href="#" class="black-text" @click.prevent="logout">Выйти
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
    </div>
</template>

<script>
export default {
  data: () => ({
    date: new Date()
  }),
  methods: {
    logout() {
      console.log('Logout')
      this.$router.push('/')
    }
  },
  mounted() {
    setInterval(() => {
      this.date = new Date()
    }, 600000)
    M.Dropdown.init(this.$refs.dropdown, {
    constrainWidth: false
    })
  },
  computed: {
    name() {
      return this.$store.getters.users.name
    }
  }
}
</script>