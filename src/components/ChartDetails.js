import React from 'react';
import ChartItem from './ChartItem'

const ChartDetails = ({chart, loaded}) => {

    if (!loaded) {
        return <p>loading...</p>
    }

    const chartItems = chart.map(chartItem => {
        return <ChartItem title={chartItem.title.label} key={chartItem["id"]["attributes"]["im:id"]}/>
    })
    
    return (
        <>
        <ol>
        {chartItems}
        </ol>
        </>
    )
}

// display the list of songs with each song showing its chart position, title and artist



export default ChartDetails;