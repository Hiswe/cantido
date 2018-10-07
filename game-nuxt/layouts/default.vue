<template lang="pug">
main(role="main")
  nuxt
</template>

<style lang="scss">
:root {
  --c-primary-lighter: YellowGreen;
  --c-primary: green;
  --c-primary-darker: DarkSlateGrey;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  background: black;
  color: white;
}
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
}
body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
