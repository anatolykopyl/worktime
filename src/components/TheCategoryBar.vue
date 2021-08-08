<template>
  <div class="category-bar">
    <input
      class="add-category"
      v-model="newCategory"
      placeholder="New category"
      @keypress.enter="addCategory"
      @mouseenter="newCategory = ''"
      @mouseleave="blurInput"
    />
    <div class="categories">
      <div
        class="category"
        v-for="category in categories"
        :key="category"
        :style="{ background: stringToColor(category) }"
        :class="{ selected: selectedCategory === category }"
        @click="selectCategory(category)"
      >
        {{ category }}
        <span @click.stop="removeCategory(category)">×</span>
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
      selectedCategory: undefined,
    };
  },
  methods: {
    addCategory() {
      this.$store.commit('addCategory', this.newCategory);
      this.newCategory = '';
    },
    removeCategory(category) {
      this.$store.commit('removeCategory', category);
      if (category === this.selectedCategory) {
        this.selectedCategory();
      }
    },
    blurInput(event) {
      this.newCategory = '+';
      event.target.blur();
    },
    stringToColor(str) {
      return toColor(str);
    },
    selectCategory(category) {
      if (this.selectedCategory === category) {
        this.selectedCategory = undefined;
      } else {
        this.selectedCategory = category;
      }
      this.$emit('select', this.selectedCategory);
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
  //border-bottom: 1px solid $light;
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
    transition: width 0.6s;

    &:hover {
      width: 220px;
    }
  }

  .categories {
    display: flex;
    margin-left: 32px;
    overflow-x: scroll;

    .category {
      margin-right: 16px;
      border: 3px solid $dark;

      &.selected {
        border: 3px double $dark;
      }
    }
  }
}

@media screen and (max-width: $max-width) {
  .category-bar {
    padding: 0 0 0 8px;
  }
}
</style>
