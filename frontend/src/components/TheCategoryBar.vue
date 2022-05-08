<template>
  <div class="category-bar">
    <input
      class="add-category"
      v-model="newCategory"
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
        :style="{ background: stringToColor(category) }"
        :class="{ selected: selectedCategory === category }"
        @click="selectCategory(category)"
      >
        {{ category }}
        <span @click.stop="removeCategory(category)"><img src="@/assets/cross.svg" /></span>
      </div>
    </div>

    <div class="settings" @click="openSettings">
      <img src="@/assets/gear.svg" />
    </div>

    <SettingsModal ref="settingsModal" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import toColor from '@/stringToColor';

import SettingsModal from './SettingsModal.vue';

export default {
  components: {
    SettingsModal,
  },
  data() {
    return {
      newCategory: '+',
      selectedCategory: undefined,
    };
  },
  methods: {
    addCategory(event) {
      this.$store.commit('addCategory', this.newCategory);
      this.newCategory = '';
      this.blurInput(event);
    },
    removeCategory(category) {
      this.$store.commit('removeCategory', category);
      if (category === this.selectedCategory) {
        this.selectCategory();
      }
    },
    hoverInput(event) {
      this.newCategory = '';
      event.target.classList.add('hover');
    },
    blurInput(event) {
      this.newCategory = '+';
      event.target.classList.remove('hover');
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
    openSettings() {
      this.$refs.settingsModal.open();
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

    &.hover {
      width: 220px;
    }
  }

  .categories {
    display: flex;
    margin: 0 64px 0 32px;
    overflow-x: scroll;

    .category {
      margin-right: 16px;
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
