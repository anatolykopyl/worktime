<template>
  <Modal ref="modal">
    <div class="title">Settings</div>

    <div class="setting">
      <input type="checkbox" id="reset" v-model="resetAtMidnight">
      <label for="reset">Reset all tasks to 0 at midnight</label>
    </div>
  </Modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal,
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
.title {
  font: $font-sb-24;
}

.setting {
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 16px;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
}
</style>
