<script>
import { mapGetters } from 'vuex'

export default {
  name: `cantido-npcs`,
  computed: {
    ...mapGetters(`npc`, {
      npcs: `list`,
    }),
  },
}
</script>

<template lang="pug">
.npcs
  cantido-sprite(
    v-for="npc in npcs"
    :key="npc.id"
    :icon="npc.icon"
    :style="npc.position"
  )
</template>

<style lang="scss" scoped>
.npcs {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
}
</style>


