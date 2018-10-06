<script>
export default {
  name: `cantido-sprite`,
  props: {
    icon: {
      type: String,
      default: ``,
    },
  }
}
</script>

<template lang="pug">
.sprite {{ icon }}
</template>

<style lang="scss" scoped>
.sprite {
  width: var(--tile-size);
  height: var(--tile-size);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
}
</style>
