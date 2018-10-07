import mapSize from './map-size'

export function safePos([x, y]) {
  x = Math.min(Math.max(0, x), mapSize.WIDTH - 1)
  y = Math.min(Math.max(0, y), mapSize.HEIGHT - 1)
  return [x, y]
}

export function toPixel(coordinates) {
  return coordinates.map(pos => pos * mapSize.TILE_SIZE)
}
