<template>
  <Modal ref="modal">
    <div class="title">
      <span
        class="category"
        :style="{ background: category?.color }"
      >
        <span class="name">{{ category?.name }}</span>
      </span>
      category settings
    </div>
    <div class="settings">
      <div class="setting">
        <span class="label">
          Color:
        </span>
        <input
          type="text"
          class="input"
          v-model="color"
          v-maska
          data-maska="!#HHHHHH"
          data-maska-tokens="H:[0-9a-fA-F]"
        />
      </div>

      <div class="setting">
        <span class="label">
          Name:
        </span>
        <input
          type="text"
          class="input"
          v-model="name"
        />
      </div>
    </div>
  </Modal>
</template>

<script setup>
import { ref, defineExpose, computed } from 'vue';
import { useStore } from 'vuex';
import { vMaska } from 'maska';
import Modal from './Modal.vue';

const store = useStore();

const modal = ref();
const categoryId = ref();

const open = (c) => {
  categoryId.value = c;
  modal.value.open();
};

const close = () => {
  categoryId.value = null;
  modal.value.close();
};

const category = computed(() => store.state.categories.find((c) => c.id === categoryId.value));

const color = computed({
  set(value) {
    store.commit('updateCategory', {
      ...category.value,
      color: value,
    });
  },
  get() {
    return category.value?.color;
  },
});

const name = computed({
  set(value) {
    store.commit('updateCategory', {
      ...category.value,
      name: value,
    });
  },
  get() {
    return category.value?.name;
  },
});

defineExpose({
  open,
  close,
});
</script>

<style lang="scss" scoped>
.title {
  font: $font-sb-24;
}

.category {
  font: $font-rg-16;
  width: max-content;
  padding: 6px 32px;
  display: inline-flex;
  border: 1px solid $dark;
}

.settings {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
}

.setting {
  display: flex;
  gap: 16px;
}

.label {
  width: 200px;
  max-width: 50%;
}

.input {
  border: 1px solid $dark;
  border-radius: 4px;
  flex-grow: 1;
}
</style>
