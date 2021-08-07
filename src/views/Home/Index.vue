<template>
  <div class="home">
    <TheCategoryBar @select="select" />
    <TheTaskList :selectedCategory="selectedCategory" />
  </div>
</template>

<script>
import TheCategoryBar from '@/components/TheCategoryBar.vue';
import TheTaskList from './TheTaskList.vue';

export default {
  name: 'Home',
  components: {
    TheCategoryBar,
    TheTaskList,
  },
  data() {
    return {
      selectedCategory: undefined,
    };
  },
  methods: {
    select(category) {
      this.selectedCategory = category;
    },
  },
};
</script>
