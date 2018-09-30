import mapSize from './map-size'

export function safePos(x, y = x) {
  x = Math.min(Math.max(0, x), mapSize.WIDTH - 1)
  y = Math.min(Math.max(0, y), mapSize.HEIGHT - 1)
  return [x, y]
}

export function PostoPx(x, y = x) {
  return getTile(x, y).map(pos => pos * mapSize.TILE_SIZE)
}
