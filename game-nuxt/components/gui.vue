<script>
import { mapState } from 'vuex'
export default {
  name: `cantido-gui`,
  computed: {
    ...mapState(`player`, [`score`, `life`]),
  },
}
</script>

<template lang="pug">
aside.gui
  dl.gui__item.key-value
    dt.key-value__key Score
    dd.key-value__value {{score}}
  dl.gui__item.key-value
    dt.key-value__key Life
    dd.key-value__value {{life}}
</template>

<style lang="scss" scoped>
.gui {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  display: flex;
  background: var(--c-primary-darker);
}
.key-value {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  &__key,
  &__value {
    padding: 0 1rem;
    margin: 0;
  }
  &__key {
    color: var(--c-primary-lighter);
  }
}
</style>
