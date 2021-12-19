<template>
  <div class="task-list">
    <div>
      <input
        class="add-task"
        v-model=newTask
        placeholder="Add new task"
        @keypress.enter="addTask"
      />

    </div>
    <Task
      v-for="task in filteredTasks"
      :key="task.startedAt"
      :task=task
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Task from './Task.vue';

export default {
  components: {
    Task,
  },
  props: {
    selectedCategory: String,
  },
  data() {
    return {
      newTask: '',
    };
  },
  methods: {
    addTask() {
      this.$store.commit('addTask', this.newTask);
      this.newTask = '';
    },
  },
  computed: {
    ...mapState(['tasks']),
    filteredTasks() {
      if (this.selectedCategory) {
        return this.tasks.filter((task) => task.category === this.selectedCategory);
      }
      return this.tasks;
    },
  },
};
</script>

<style lang="scss" scoped>
.task-list {
  max-width: $max-width;
  margin: 32px auto;
  padding: 0 8px;

  .add-task {
    width: 100%;
    background: $light;
    color: $darker;
    padding: 4px 12px;
    height: 32px;
    box-sizing: border-box;
    margin-bottom: 16px;
  }
}
</style>
