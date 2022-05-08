<template>
  <div>
    You should be redirected in a moment.
  </div>
</template>

<script>
export default {
  async mounted() {
    const baseUrl = 'http://localhost:3000/api/login';
    const token = /access_token=([^&]+)/.exec(this.$route.hash)[1];
    const authProvider = /state=([^&]+)/.exec(this.$route.hash)[1];

    const response = await fetch(baseUrl, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        token,
        authProvider,
      }),
    });
    console.log(await response.json());
  },
};
</script>
