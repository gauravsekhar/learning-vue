<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="item active">
      Image Gallery
    </a>
    <div v-if="!isLoggedIn" class="right menu">
      <a href="#" class="ui item" @click="login">
        Login
      </a>
    </div>
    <div v-else class="right menu">
      <a href="#" class="ui item" @click="logout">
        Logout
      </a>
    </div>
  </div>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  methods: {
    ...mapActions(['login', 'logout']),
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
}
</script>

<style scoped>

</style>
