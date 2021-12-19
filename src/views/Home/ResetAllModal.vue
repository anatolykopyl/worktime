<template>
  <Modal ref="modal">
    <div class="title">Are you sure you want to reset all of your tasks to 0?</div>

    <div class="buttons">
      <button @click="close">
        Cancel
      </button>
      <button @click="resetTasksAndClose">
        Reset
      </button>
    </div>
  </Modal>
</template>

<script>
import { mapMutations } from 'vuex';

import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal,
  },
  methods: {
    ...mapMutations(['resetTasks']),
    resetTasksAndClose() {
      this.resetTasks();
      this.close();
    },
    open() {
      this.$refs.modal.open();
    },
    close() {
      this.$refs.modal.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-right: 32px;
}

.buttons {
  margin-top: 16px;
  display: flex;
  justify-content: space-evenly;

  > * {
    padding: 6px 12px;
  }
}
</style>
