<template>
  <teleport to="#modalSpot">
    <div
      class="modal"
      :class="{hidden: !active}"
    >
      <div class="bg" @click="close" />
      <div class="window">
        <div class="close" @click="close">×</div>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    open() {
      this.active = true;
    },
    close() {
      this.active = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  transition: all .4s;

  .bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(90, 90, 90, 0.28);
    backdrop-filter: blur(12px);
  }

  .window {
    z-index: 1000;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 16px;
    border-radius: 16px;
    background: $lighter;
    color: $dark;
    width: 340px;

    .close {
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
    }
  }

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
}

@media screen and (max-width: $max-width) {
  .modal {
    .window {
      left: 0;
      width: 100%;
      bottom: 0;
      top: unset;
      box-sizing: border-box;
      border-radius: 16px 16px 0 0;
      transform: translate(0, 0);
      transition: transform .4s;
    }

    &.hidden {
      .window {
        opacity: 1;
        transform: translate(0, 100%);
      }
    }
  }
}
</style>
