import Phase from 'phaser'

import * as images from './images'
import * as positions from './positions'

export default class Player {
  constructor(scene, x, y) {
    this.scene = scene
    this.positions = positions.getTile(0, 0)
    this.player = scene.make
      .sprite({
        key: images.names.player,
        frame: 0,
        x: 0,
        y: 0,
      })
      .setOrigin(0, 0)
    // setTimeout(() => {
    //   this.move()
    // }, 1000)

    // Track the arrow keys
    const { LEFT, RIGHT, UP, DOWN } = Phaser.Input.Keyboard.KeyCodes
    this.keys = scene.input.keyboard.addKeys({
      left: LEFT,
      right: RIGHT,
      up: UP,
      down: DOWN,
    })
  }
  move(x, y) {
    this.positions = positions.getTile(x, y)
    this.player.setPosition(...positions.getPixel(...this.positions))
  }
  update() {
    const { keys } = this
    let [x, y] = this.positions
    if (keys.left.isDown) {
      return this.move(x - 1, y)
    }
    if (keys.right.isDown) {
      return this.move(x + 1, y)
    }
    if (keys.up.isDown) {
      return this.move(x, y - 1)
    }
    if (keys.down.isDown) {
      return this.move(x, y + 1)
    }
  }
}
