<template>
  <div class="task">
    <Time
      :time="time"
      :pulsing="task.running"
    />
    <div class="toggle-state">
      <div v-if="task.running" @click="stopTask">
        <img src="@/assets/pause.svg" />
      </div>
      <div v-else @click="startTask">
        <img src="@/assets/play.svg" />
      </div>
    </div>

    <div class="optional-break">
      <div class="name">
        {{ task.name }}
      </div>

      <div
        v-if="task.category"
        class="category"
        :style="{ background: task.category.color }"
      >
        <span class="name">
          {{ task.category.name }}
        </span>
        <span
          class="icon"
          @click="removeCategory"
        >
          <img src="@/assets/cross.svg" />
        </span>
      </div>
      <div v-else class="select-category" @click="$refs.categorySelect.open">
        Assign Category
      </div>
    </div>

    <CategoryModal
      ref="categorySelect"
      :name="task.name"
    />

    <div class="delete" @click="removeTask">
      <img src="@/assets/trash.svg" />
    </div>
  </div>
</template>

<script>
import Time from './Time.vue';
import CategoryModal from './CategoryModal.vue';

export default {
  components: {
    Time,
    CategoryModal,
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
    removeCategory() {
      this.$store.commit('assignCategory', {
        name: this.task.name,
        category: undefined,
      });
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
  },
  beforeMount() {
    setInterval(() => {
      this.timePassed = Date.now() - this.task.startedAt;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.task {
  color: $lighter;
  min-height: 42px;
  display: flex;
  align-items: center;
  gap: 16px;

  .time {
    min-width: 96px;
  }

  .toggle-state {
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

  .optional-break {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  .name {
    text-align: center;
  }

  .select-category {
    position: relative;
    color: $light;
    background: $dark;
    padding: 4px 12px;
    border-radius: 16px;
    cursor: pointer;
  }

  .delete {
    cursor: pointer;
    padding: 8px;
  }
}

@media screen and (max-width: $max-width) {
  .task {
    min-height: 64px;
    margin-bottom: 16px;

    .optional-break {
      flex-direction: column;
    }
  }
}
</style>
