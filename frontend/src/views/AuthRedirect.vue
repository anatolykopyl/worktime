<template>
  <div>
    You should be redirected in a moment.
  </div>
</template>

<script>
import api from '@/api';

export default {
  async mounted() {
    const token = /access_token=([^&]+)/.exec(this.$route.hash)[1];
    const authProvider = /state=([^&]+)/.exec(this.$route.hash)[1];

    api.login(token, authProvider);
  },
};
</script>
