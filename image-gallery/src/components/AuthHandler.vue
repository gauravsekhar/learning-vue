<template>
  <div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AuthHandler',
  methods: {
    ...mapActions(['finalizeLogin']),
  },
  created() {
    // This is a lifecycle method
    this.finalizeLogin(window.location.hash);
  },
}
</script>
