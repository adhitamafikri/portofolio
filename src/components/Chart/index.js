import React from 'react'
import {ChartCanvas, ChartLine} from './ChartComponent'

const amounts = [
  100, 100, 85, 75, 75, 65, 100, 100, 75, 80
]

const renderLine = () => {
  return (
    amounts.map(item => <ChartLine amount={item} />)
  )
}
const Chart = () => (
  <ChartCanvas className="d-flex flex-column justify-content-between">
    {/* <ChartLine amount="100" />
    <ChartLine amount="100" />
    <ChartLine amount="85" />
    <ChartLine amount="75" /> */}
    {renderLine()}
  </ChartCanvas>
)

export default Chart