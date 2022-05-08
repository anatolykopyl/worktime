<template>
  <Modal ref="modal">
    <div class="title">Settings</div>
    <div class="setting">
      <input type="checkbox" id="reset" v-model="resetAtMidnight">
      <label for="reset">Reset all tasks to 0 at midnight</label>
    </div>
    <Auth />
  </Modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import Modal from '@/components/Modal.vue';
import Auth from './Auth.vue';

export default {
  components: {
    Modal,
    Auth,
  },
  data() {
    return {
      resetAtMidnight: undefined,
    };
  },
  computed: {
    ...mapState(['midnightReset']),
  },
  watch: {
    resetAtMidnight(newVal) {
      this.setMidnightReset(newVal);
    },
  },
  beforeMount() {
    this.resetAtMidnight = this.midnightReset;
  },
  methods: {
    ...mapMutations(['setMidnightReset']),
    open() {
      this.$refs.modal.open();
    },
  },
};
</script>

<style lang="scss" scoped>
.setting {
  margin-top: 16px;

  label {
    margin-left: 16px;
  }
}
</style>
