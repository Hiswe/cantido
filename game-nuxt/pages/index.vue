<script>
import mapSize from '../../utils/map-size'
import CantidoPlayer from '~/components/player'
import CantidoMap from '~/components/map'
import CantidoGui from '~/components/gui'
import CantidoFireman from '~/components/fireman'

export default {
  name: `page-home`,
  components: {
    CantidoMap,
    CantidoPlayer,
    CantidoGui,
    CantidoFireman,
  },
  computed: {
    styles() {
      return {
        '--map-rows': mapSize.HEIGHT,
        '--map-columns': mapSize.WIDTH,
        '--map-width': `${mapSize.WIDTH * mapSize.TILE_SIZE}px`,
        '--map-height': `${mapSize.HEIGHT * mapSize.TILE_SIZE}px`,
        '--tile-size': `${mapSize.TILE_SIZE}px`,
      }
    },
  },
}
</script>

<template lang="pug">
section.gameboard(:style="styles")
  cantido-gui
  cantido-player
  cantido-map
  cantido-fireman
</template>

<style lang="scss" scoped>
.gameboard {
  position: relative;
}
</style>
