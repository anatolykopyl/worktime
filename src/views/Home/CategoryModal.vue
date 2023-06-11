<template>
  <Modal ref="modal">
    <div class="title">Assign Category</div>
    <div
      v-for="category in categories"
      :key="category.id"
      class="category"
      :style="{ background: category.color }"
      @click="assignCategory(category)"
    >
      {{ category.name }}
    </div>
  </Modal>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import Modal from '@/components/Modal.vue';

export default {
  components: { Modal },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const modal = ref(null);

    const open = () => {
      modal.value.open();
    };
    const close = () => {
      modal.value.close();
    };

    const assignCategory = (category) => {
      store.commit('assignCategory', { name: props.name, category });
      modal.value.close();
    };

    return {
      modal,
      open,
      close,
      assignCategory,
      categories: computed(() => store.state.categories),
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  font: $font-sb-24;
}

.category {
  margin-top: 12px;
  border-radius: 24px !important;
  padding: 12px 24px !important;
}
</style>
