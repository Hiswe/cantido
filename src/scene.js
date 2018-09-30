import Phaser from 'phaser'
import random from 'lodash.random'

import config from './config'
import Player from './player'
import * as images from './images'

// import tileMapPath from '../assets/export/tile-map.png'
// import tileMapPath from '../assets/export/tile-map.png'

export default class Scene extends Phaser.Scene {
  preload() {
    images.load(this)
  }

  create() {
    // Load a map from a 2D array of tile indices
    const columns = Array.from({ length: config.MAP_WIDTH })
    const rows = Array.from({ length: config.MAP_HEIGHT })

    const level = rows.map(row => columns.map(col => random(0, 3)))

    // When loading from an array, make sure to specify the tileWidth and tileHeight
    const map = this.make.tilemap({
      data: level,
      tileWidth: config.TILE_SIZE,
      tileHeight: config.TILE_SIZE,
    })
    const tiles = map.addTilesetImage(images.names.tileMap)
    const layer = map.createStaticLayer(0, tiles, 0, 0)

    // console.log(this.Textures)
    // console.log(this.Textures.TextureManager)

    this.player = new Player(this)
  }

  update(time, delta) {
    // Allow the player to respond to key presses and move itself
    this.player.update()
    //   if (this.player.sprite.y > this.groundLayer.height) {
    //     this.player.destroy()
    //     this.scene.restart()
    //   }
  }
}
