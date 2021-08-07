<template>
  <div
    class="task"
    :class="{active: task.running}"
  >
    <div class="time">
      {{ formattedTime }}
    </div>
    <div class="toggle-state">
      <div v-if="task.running" @click="stopTask">
        <img src="@/assets/pause.svg">
      </div>
      <div v-else @click="startTask">
        <img src="@/assets/play.svg">
      </div>
    </div>
    <div class="name">
      {{ task.name }}
    </div>
    <div class="spacer"/>
    <div
      v-if="task.category"
      class="category"
      :style="{ background: stringToColor(task.category) }"
    >
      {{ task.category }}
      <span @click="removeCategory">×</span>
    </div>
    <div
      v-else
      class="select-category"
    >
      Assign Category
      <CategoryDropdown
        class="dropdown"
        @selected="assignCategory"
      />
    </div>

    <div
      class="delete"
      @click="removeTask"
    >
      <img src="@/assets/trash.svg">
    </div>
  </div>
</template>

<script>
import toColor from '@/stringToColor';

import CategoryDropdown from './CategoryDropdown.vue';

export default {
  components: {
    CategoryDropdown,
  },
  props: {
    task: Object,
  },
  data() {
    return {
      timePassed: 0,
      openDropdown: false,
    };
  },
  methods: {
    startTask() {
      this.$store.commit('startTask', this.task.name);
    },
    stopTask() {
      this.$store.commit('stopTask', this.task.name);
    },
    assignCategory(category) {
      this.$store.commit('assignCategory', { name: this.task.name, category });
    },
    removeCategory() {
      this.$store.commit('assignCategory', { name: this.task.name, category: undefined });
    },
    stringToColor(str) {
      return toColor(str);
    },
    removeTask() {
      this.$store.commit('removeTask', this.task.name);
    },
  },
  computed: {
    time() {
      if (this.task.startedAt) {
        return this.task.totalTime + this.timePassed;
      }
      return this.task.totalTime;
    },
    formattedTime() {
      let { time } = this;
      const msInASec = 1000;
      const msInAMin = msInASec * 60;
      const msInAHour = msInAMin * 60;
      const msInADay = msInAHour * 24;

      const days = Math.floor(time / msInADay);
      time -= days * msInADay;
      const hours = Math.floor(time / msInAHour);
      time -= hours * msInAHour;
      const mins = Math.floor(time / msInAMin);

      return `${days}d ${hours}h ${mins}m`;
    },
  },
  mounted() {
    setInterval(() => {
      this.timePassed = Date.now() - this.task.startedAt;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.task {
  color: $lighter;
  height: 42px;
  display: flex;
  align-items: center;

  .time {
    width: 124px;
  }

  .toggle-state {
    margin-right: 16px;

    > * {
      width: 32px;
      height: 32px;
      background: $light;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      > * {
        width: 20px;
        height: 20px;
      }
    }
  }

  .spacer {
    flex-grow: 1;
  }

  .select-category {
    position: relative;
    color: $darker;
    background: $dark;
    padding: 4px 12px;
    border-radius: 16px;

    .dropdown {
      display: none;
    }

    &:hover {
      .dropdown {
        display: block;
      }
    }
  }

  .delete {
    margin-left: 16px;
    cursor: pointer;
  }
}

@keyframes pulse {
  from {opacity: .3;}
  to {opacity: 1;}
}

.task.active {
  .time {
    animation: pulse 1s infinite alternate;
  }
}
</style>
