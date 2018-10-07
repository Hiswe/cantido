<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import { ACTIONS as playerActions } from '~/store/player'

const keysToDirection = {
  ArrowUp: `up`,
  w: `up`,
  ArrowRight: `right`,
  d: `right`,
  ArrowDown: `down`,
  s: `down`,
  ArrowLeft: `left`,
  a: `left`,
}

export default {
  name: `cantido-player`,
  mounted() {
    window.addEventListener(`keyup`, this.handleKeyboard, { passive: true })
  },
  beforeDestroy() {
    window.removeEventListener(`keyup`, this.handleKeyboard)
  },
  computed: {
    styles() {
      return {
        top: `${this.pixelPosition[1]}px`,
        left: `${this.pixelPosition[0]}px`,
      }
    },
    ...mapGetters(`player`, [`pixelPosition`]),
  },
  methods: {
    handleKeyboard(event) {
      const { key } = event
      if (key in keysToDirection) {
        this[playerActions.MOVE](keysToDirection[key])
      }
    },
    ...mapActions(`player`, [playerActions.MOVE]),
  },
}
</script>

<template lang="pug">
cantido-sprite.player(icon="👤" :style="styles")
</template>

<style lang="scss" scoped>
.player {
  position: absolute;
}
</style>
