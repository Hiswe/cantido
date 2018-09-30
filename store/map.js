import random from 'lodash.random'

import mapSize from '@/utils/map-size'

export const state = () => {
  const columns = Array.from({ length: mapSize.WIDTH })
  const rows = Array.from({ length: mapSize.HEIGHT })

  const level = rows.map((row, rowIndex) =>
    columns.map((col, colIndex) => ({
      type: random(0, 3),
      id: `${rowIndex}-${colIndex}`,
    })),
  )
  return level
}
