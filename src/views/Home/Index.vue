<template>
  <div class="home">
    <TheCategoryBar @select="select" />
    <TheTaskList :selectedCategory="selectedCategory" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

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
  computed: {
    ...mapState(['midnightReset', 'lastReset']),
  },
  beforeMount() {
    const lastMidnight = new Date();
    lastMidnight.setHours(0, 0, 0, 0);
    const lastReset = new Date(this.lastReset);
    if (this.midnightReset && lastReset < lastMidnight) {
      this.resetTasks();
    }
  },
  methods: {
    ...mapMutations(['resetTasks']),
    select(category) {
      this.selectedCategory = category;
    },
  },
};
</script>
