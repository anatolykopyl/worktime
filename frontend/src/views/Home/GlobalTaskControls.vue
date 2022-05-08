<template>
  <div class="global-controls">
    <Time
      :time="totalTime"
      :pulsing="atLeastOneRunning"
    />
    <div>
      Total
    </div>

    <div class="buttons">
      <transition name="slide-up">
        <div
          v-if="atLeastOneRunning"
          class="stop"
          @click="stop"
        >
          <img src="@/assets/stop.svg" />
        </div>
      </transition>
      <div @click="$refs.resetAllModal.open()">
        <img src="@/assets/reset.svg" />
      </div>
      <div @click="$refs.removeAllModal.open()">
        <img src="@/assets/trash.svg" />
      </div>
    </div>

    <ResetAllModal ref="resetAllModal"/>
    <RemoveAllModal ref="removeAllModal"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Time from './Time.vue';
import RemoveAllModal from './RemoveAllModal.vue';
import ResetAllModal from './ResetAllModal.vue';

export default {
  components: {
    Time,
    RemoveAllModal,
    ResetAllModal,
  },
  data() {
    return {
      totalTime: 0,
    };
  },
  computed: {
    ...mapState(['tasks']),
    atLeastOneRunning() {
      return this.tasks.reduce(
        (atLeastOneRunning, task) => task.running || atLeastOneRunning,
        false,
      );
    },
  },
  beforeMount() {
    setInterval(() => {
      this.totalTime = this.getTotalTime();
    }, 1000);
  },
  methods: {
    getTotalTime() {
      return this.tasks.reduce((acc, task) => {
        if (task.startedAt) {
          const timePassed = Date.now() - task.startedAt;
          return acc + task.totalTime + timePassed;
        }
        return acc + task.totalTime;
      }, 0);
    },
    stop() {
      this.tasks.forEach((task) => {
        if (task.running) {
          this.$store.commit('stopTask', task.name);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.global-controls {
  max-width: $max-width;
  height: 32px;
  margin: 32px auto;
  padding: 0 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  .time {
    min-width: 104px;
  }

  .buttons {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    > * {
      margin-left: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .stop {
      width: 32px;
      height: 32px;
      background: $light;
      border-radius: 50%;

      > * {
        width: 20px;
        height: 20px;
      }
    }

    .slide-up-enter-active,
    .slide-up-leave-active {
      transition: transform 0.5s ease;
    }

    .slide-up-enter-from,
    .slide-up-leave-to {
      transform: translateY(-64px);
    }
  }
}

@media screen and (max-width: $max-width) {
  .global-controls {
    margin: 16px auto -16px;
  }
}
</style>
