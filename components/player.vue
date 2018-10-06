<script>
import {mapState} from 'vuex'

export default {
  name: `cantido-player`,
  mounted() {
    window.addEventListener(`keyup`, this.handleKeyboard, {passive: true})
  },
  beforeDestroy() {
    window.removeEventListener(`keyup`, this.handleKeyboard)
  },
  computed: {
    ...mapState({
      position: state => state.player.position
    })
  },
  methods: {
    handleKeyboard(event) {
      const {key} = event
      console.log(key)
      // console.log(this)
    }
  }
}
</script>

<template lang="pug">
cantido-sprite.player(icon="👤")
</template>

<style lang="scss" scoped>
.player {
  position: absolute;
  top: 0;
  left: 0;
}
</style>


