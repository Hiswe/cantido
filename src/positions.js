import config from './config'

export function getTile(x, y = x) {
  x = Math.min(Math.max(0, x), config.MAP_WIDTH - 1)
  y = Math.min(Math.max(0, y), config.MAP_HEIGHT - 1)
  return [x, y]
}

export function getPixel(x, y = x) {
  return getTile(x, y).map(pos => pos * config.TILE_SIZE)
}
