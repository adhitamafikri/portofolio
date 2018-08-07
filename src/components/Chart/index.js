import React from 'react'
import {ChartCanvas, ChartLine} from './ChartComponent'

const amounts = [
  100, 100, 85, 75, 75, 65, 100, 100, 75, 80
]

const renderLine = () => {
  return (
    amounts.map((item, key) => <ChartLine amount={item} key={key} />)
  )
}
const Chart = () => (
  <ChartCanvas className="d-flex flex-column justify-content-between">
    {renderLine()}
  </ChartCanvas>
)

export default Chart