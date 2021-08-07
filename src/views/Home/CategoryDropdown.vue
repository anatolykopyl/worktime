<template>
  <div class="category-dropdown">
    <div class="title">Assign Category</div>
    <div
      v-for="category in categories"
      :key="category"
      class="category"
      :style="{ background: stringToColor(category) }"
      @click="$emit('selected', category)"
    >
      {{ category }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import toColor from '@/stringToColor';

export default {
  methods: {
    stringToColor(str) {
      return toColor(str);
    },
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories,
    }),
  },
};
</script>

<style lang="scss" scoped>
.category-dropdown {
  position: absolute;
  background: $light;
  padding: 48px 12px 12px 12px;
  border-radius: 16px;
  min-width: 200px;
  max-width: max-content;
  left: 50%;
  top: -12px;
  z-index: 100;
  transform: translate(-50%, 0);

  .title {
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translate(-50%, 0);
    width: fit-content;
    color: $light;
    background: $dark;
    padding: 4px 12px;
    border-radius: 16px;
  }

  .category {
    margin-top: 8px;
    width: fit-content;
  }
}
</style>
