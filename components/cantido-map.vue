<script>
import { mapState } from 'vuex'

import mapSize from '@/utils/map-size'

export default {
  name: `cantido-map`,
  computed: {
    ...mapState({
      scene: state => {
        return state.map.reduce((acc, row) => {
          return acc.concat(...row)
        }, [])
      },
    }),
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
.map(:style="styles")
  .map__tile(
    v-for="tile in scene"
    :key="tile.id"
    :class="`map__tile--${tile.type}`"
  )
</template>

<style lang="scss" scoped>
.map {
  margin: 0 auto;
  display: grid;
  width: var(--map-width);
  height: var(--map-height);
  grid-template-rows: repeat(var(--map-rows), 1fr);
  grid-template-columns: repeat(var(--map-columns), 1fr);
  border: 1px solid red;

  &__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid DarkSlateGrey;

    &--0 {
      &::before {
        content: 'Ø';
      }
    }

    &--1,
    &--2,
    &--3 {
      font-size: 2rem;
    }

    &--1 {
      background: OliveDrab;

      &::before {
        content: '🏛';
      }
    }
    &--2 {
      background: Olive;

      &::before {
        content: '🏫';
      }
    }
    &--3 {
      background: DarkOliveGreen;
      &::before {
        content: '🏩';
      }
    }
  }
}
</style>
