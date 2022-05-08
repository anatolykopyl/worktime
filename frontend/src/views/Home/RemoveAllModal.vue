<template>
  <Modal ref="modal">
    <div class="title">Are you sure you want to delete all of your tasks?</div>

    <div class="buttons">
      <button @click="close">
        Cancel
      </button>
      <button @click="removeAllTasksAndClose">
        Delete
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
    ...mapMutations(['removeAllTasks']),
    removeAllTasksAndClose() {
      this.removeAllTasks();
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
