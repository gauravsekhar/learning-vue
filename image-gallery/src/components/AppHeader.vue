<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="item active">
      Image Gallery
    </router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="item">View</router-link>
        <router-link to="/upload" a class="item">Upload</router-link>
        <a href="#" class="item" @click="logout">Logout</a>
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
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
.horizontal {
  display: flex;
  flex: row;
}
</style>
