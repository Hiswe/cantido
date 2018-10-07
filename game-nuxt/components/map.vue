<script>
import { mapState } from 'vuex'

export default {
  name: `cantido-map`,
  data() {
    return {
      icons: {
        0: ``,
        1: `🏛`,
        2: `🏫`,
        3: `🏩`,
        4: `🔥`,
      },
    }
  },
  computed: {
    ...mapState({
      scene: state => {
        return state.map.reduce((acc, row) => {
          return acc.concat(...row)
        }, [])
      },
    }),
  },
}
</script>

<template lang="pug">
.map
  cantido-sprite.map__tile(
    v-for="tile in scene"
    :key="tile.id"
    :icon="icons[tile.type]"
  )
</template>

<style lang="scss" scoped>
.map {
  margin: 0;
  display: grid;
  width: var(--map-width);
  height: var(--map-height);
  grid-template-rows: repeat(var(--map-rows), 1fr);
  grid-template-columns: repeat(var(--map-columns), 1fr);
  outline: 1px solid DarkSlateGrey;

  &__tile {
    background: black;
    border: 1px solid DarkSlateGrey;
  }
}
</style>
