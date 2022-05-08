<template>
  <div class="auth">
    <img
      class="button"
      src="@/assets/yandex_login.svg"
      @click="yandexLogin"
    >
  </div>
</template>

<script>
export default {
  methods: {
    yandexLogin() {
      const baseUrl = 'https://oauth.yandex.ru/authorize';
      const params = new URLSearchParams({
        response_type: 'token',
        client_id: '081b0b290f0847e18b19771c840d1075',
        redirect_uri: 'http://localhost:8080/auth-redirect',
        state: 'yandex',
      });
      window.location = `${baseUrl}?${params.toString()}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.auth {
  text-align: center;
  margin-top: 32px;

  .button {
    cursor: pointer;
    border-radius: 10px;
  }
}
</style>
