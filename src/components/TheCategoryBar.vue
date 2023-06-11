<template>
  <div class="category-bar">
    <input
      class="add-category"
      v-model="newCategoryName"
      placeholder="New category"
      @keypress.enter="addCategory"
      @click="hoverInput"
      @mouseenter="hoverInput"
      @mouseleave="blurInput"
    />
    <div class="categories">
      <div
        class="category"
        v-for="category in categories"
        :key="category"
        :style="{ background: category.color }"
        :class="{ selected: selectedCategory === category }"
        @click="selectCategory(category)"
      >
        <span
          v-if="selectedCategory === category"
          class="icon"
          @click.stop="openCategorySettings(category.id)"
        >
          <img src="@/assets/gear.svg" />
        </span>
        <span class="name">{{ category.name }}</span>
        <span
          @click.stop="removeCategory(category.id)"
          class="icon"
        >
          <img src="@/assets/cross.svg" />
        </span>
      </div>
    </div>

    <div class="settings" @click="openSettings">
      <img src="@/assets/gear.svg" />
    </div>

    <SettingsModal ref="settingsModal" />
    <CategorySettingsModal ref="categorySettingsModal" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import toColor from '@/stringToColor';

import SettingsModal from './SettingsModal.vue';
import CategorySettingsModal from './CategorySettingsModal.vue';

export default {
  components: {
    SettingsModal,
    CategorySettingsModal,
  },
  data() {
    return {
      newCategoryName: '+',
      selectedCategory: undefined,
    };
  },
  methods: {
    addCategory(event) {
      const id = crypto.randomUUID();
      const createdCategory = {
        id,
        name: this.newCategoryName,
        color: toColor(id),
      };

      this.$store.commit('addCategory', createdCategory);
      this.newCategoryName = '';
      this.blurInput(event);
    },
    removeCategory(categoryId) {
      this.$store.commit('removeCategory', categoryId);
      if (this.selectedCategory && categoryId === this.selectedCategory.id) {
        this.selectCategory();
      }
    },
    hoverInput(event) {
      this.newCategoryName = '';
      event.target.classList.add('hover');
    },
    blurInput(event) {
      this.newCategoryName = '+';
      event.target.classList.remove('hover');
      event.target.blur();
    },
    selectCategory(category) {
      if (this.selectedCategory && this.selectedCategory.id === category.id) {
        this.selectedCategory = undefined;
      } else {
        this.selectedCategory = category;
      }
      this.$emit('select', this.selectedCategory);
    },
    openSettings() {
      this.$refs.settingsModal.open();
    },
    openCategorySettings(category) {
      this.$refs.categorySettingsModal.open(category);
    },
  },
  computed: {
    ...mapState(['categories']),
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
  box-sizing: border-box;
  z-index: 900;

  .add-category {
    color: $darker;
    background: $light;
    height: 32px;
    padding: 4px 12px;
    width: 32px;
    box-sizing: border-box;
    transition: width 0.6s;
    font: $font-sb-16;

    &.hover {
      width: 220px;
    }
  }

  .categories {
    display: flex;
    align-items: center;
    margin: 0 64px 0 32px;
    gap: 16px;
    overflow-x: scroll;

    .category {
      border: 3px solid $dark;

      &.selected {
        border: 3px double $dark;
      }
    }
  }

  .settings {
    position: absolute;
    right: 64px;
    height: 32px;
    width: 32px;
    cursor: pointer;

    > * {
      height: inherit;
    }
  }
}

@media screen and (max-width: $max-width) {
  .category-bar {
    padding: 0 0 0 8px;

    .categories {
      margin-right: 0;
    }

    .settings {
      position: fixed;
      bottom: 16px;
      right: 16px;
    }
  }
}
</style>
