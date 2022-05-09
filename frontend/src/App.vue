<template>
  <div class="app-backdrop"></div>
  <router-view/>
  <div id="modalSpot" />
</template>

<script>
import api from '@/api';

export default {
  async mounted() {
    await api.sync();
  },
};
</script>

<style lang="scss">
@import "@/scss/style.scss";

.app-backdrop {
  z-index: -10000;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: $darker;
}
</style>
