<script>

import mapSize from '@/utils/map-size'
import CantidoPlayer from '~/components/player'
import CantidoMap from '~/components/map'

export default {
  name: `page-home`,
  components: {
    CantidoMap,
    CantidoPlayer,
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
  }
}
</script>

<template lang="pug">
section.gameboard(:style="styles")
  cantido-map
  cantido-player
</template>

<style lang="scss" scoped>
.gameboard {
  position: relative;
}
</style>
