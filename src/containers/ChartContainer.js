import {useState, useEffect} from 'react';

import ChartDetails from "../components/ChartDetails";

const ChartContainer = () => {

    const [chart, setChart] = useState([]);
    const [loaded, setLoaded] = useState(false)

    const getChart = () => {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setChart(data["feed"]["entry"]))
        .then(setLoaded(true))
    }

    useEffect(() => {
        getChart();
    }, [])

    return (

        <>
            <h1>iTunes Top 20 Chart</h1>
            
            <ChartDetails
                chart = {chart}
                loaded={loaded}
            />
        </>



    )



}



// display the list of songs with each song showing its chart position, title and artist


export default ChartContainer;