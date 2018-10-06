<script>
import {mapState} from 'vuex'

export default {
  name: `cantido-player`,
  computed: {
    ...mapState({
      position: state => state.player.position
    })
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


