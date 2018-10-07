<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import { ACTIONS as playerActions } from '~/store/player'

const keysToDirection = {
  ArrowUp: `up`,
  KeyW: `up`,
  ArrowRight: `right`,
  KeyWD: `right`,
  ArrowDown: `down`,
  KeyS: `down`,
  ArrowLeft: `left`,
  KeyA: `left`,
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
        transform: `translate(${this.pixelPosition[0]}px, ${
          this.pixelPosition[1]
        }px)`,
      }
    },
    ...mapGetters(`player`, [`pixelPosition`]),
  },
  methods: {
    handleKeyboard(event) {
      const { code } = event
      if (code in keysToDirection) {
        this[playerActions.MOVE](keysToDirection[code])
      }
      if (code === `Space`) {
        this[playerActions.BURN]()
      }
    },
    ...mapActions(`player`, [playerActions.MOVE, playerActions.BURN]),
  },
}
</script>

<template lang="pug">
cantido-sprite.player(icon="👤" :style="styles")
</template>

<style lang="scss" scoped>
.player {
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.15s;
}
</style>
