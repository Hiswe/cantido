import Phaser from 'phaser'

import config from './config'
import Scene from './scene'

var gameConfig = {
  type: Phaser.AUTO,
  width: config.MAP_WIDTH * config.TILE_SIZE,
  height: config.MAP_HEIGHT * config.TILE_SIZE,
  // Force the game to scale images up crisply
  pixelArt: true,
  parent: `game-container`,
  scene: Scene,
}

const game = new Phaser.Game(gameConfig)
