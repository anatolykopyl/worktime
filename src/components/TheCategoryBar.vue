<template>
  <div class="category-bar">
    <input
      class="add-category"
      v-model="newCategory"
      placeholder="New category"
      @keypress.enter="addCategory"
      @mouseenter="newCategory=''"
      @mouseleave="blurInput"
    />
    <div class="categories">
      <div
        class="category"
        v-for="category in categories" :key="category"
        :style="{ background: stringToColor(category) }"
      >
        {{ category }}
        <span @click="removeCategory(category)">×</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import toColor from '@/stringToColor';

export default {
  data() {
    return {
      newCategory: '+',
    };
  },
  methods: {
    addCategory() {
      this.$store.commit('addCategory', this.newCategory);
      this.newCategory = '';
    },
    removeCategory(category) {
      this.$store.commit('removeCategory', category);
    },
    blurInput(event) {
      this.newCategory = '+';
      event.target.blur();
    },
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
.category-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid $light;
  height: 48px;
  background: $dark;
  display: flex;
  align-items: center;
  padding: 0 64px;

  .add-category {
    color: $darker;
    background: $light;
    height: 32px;
    padding: 4px 12px;
    width: 32px;
    box-sizing: border-box;
    transition: width .6s;

    &:hover {
      width: 220px
    }
  }

  .categories {
    display: flex;
    margin-left: 32px;

    .category {
      margin-right: 16px;
    }
  }
}
</style>
