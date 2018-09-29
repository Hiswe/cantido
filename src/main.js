import Phaser from 'phaser'

import config from './config'
import Scene from './scene'

var gameConfig = {
  type: Phaser.AUTO,
  width: config.MAP_WIDTH * config.TILE_SIZE,
  height: config.MAP_HEIGHT * config.TILE_SIZE,
  pixelArt: true, // Force the game to scale images up crisply
  parent: `game-container`,
  // physics: {
  //   default: 'arcade',
  //   arcade: {
  //     gravity: { y: 200 },
  //   },
  // },
  scene: Scene,
  // scene: {
  //   preload,
  //   create,
  // },
}

const game = new Phaser.Game(gameConfig)

// function preload() {
//   this.load.image('tiles', tileMapPath)
// }

// function create() {
//   // Load a map from a 2D array of tile indices
//   // prettier-ignore
//   const columns = Array.from({length: MAP_WIDTH})
//   const rows = Array.from({ length: MAP_HEIGHT })

//   const level = rows.map(row => columns.map(col => random(0, 3)))

//   // When loading from an array, make sure to specify the tileWidth and tileHeight
//   const map = this.make.tilemap({
//     data: level,
//     tileWidth: TILE_SIZE,
//     tileHeight: TILE_SIZE,
//   })
//   const tiles = map.addTilesetImage(`tiles`)
//   const layer = map.createStaticLayer(0, tiles, 0, 0)

//   // - images are centered based positioned
//   // - you can change origin by calling
//   //   this.add.image(0, 0, 'sky').setOrigin(0, 0)
//   //   https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Image.html#setOrigin__anchor
//   // - they stack in order of appearance
//   // this.add.image(400, 300, 'sky')
//   // var particles = this.add.particles('red')
//   // var emitter = particles.createEmitter({
//   //   speed: 100,
//   //   scale: { start: 1, end: 0 },
//   //   blendMode: 'ADD',
//   // })
//   // var logo = this.physics.add.image(400, 100, 'logo')
//   // logo.setVelocity(100, 200)
//   // logo.setBounce(1, 1)
//   // logo.setCollideWorldBounds(true)
//   // emitter.startFollow(logo)
// }
