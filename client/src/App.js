import React, {useEffect, useState} from 'react'

function App() {

    useEffect(() => {
        fetch("/api").then(data => console.log(data.json())); 
    }, [])

    return (
        <div> Bella per voi </div>
    )
}

export default App;
