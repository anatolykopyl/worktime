<template>
  <div
    class="time"
    :class="{ pulsing }"
  >
    {{ formattedTime }}
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: Number,
      required: true,
    },
    pulsing: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
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
};
</script>

<style lang="scss" scoped>
@keyframes pulse {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
}

.pulsing {
  animation: pulse 1s infinite alternate;
}
</style>
