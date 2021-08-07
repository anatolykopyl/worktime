<template>
  <div class="home">
    <TheCategoryBar />
    <TheTaskList />
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
};
</script>
