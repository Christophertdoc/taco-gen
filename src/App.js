import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
	const [response, setResponse] = useState([])
    useEffect(() => {
		axios.get(`http://taco-randomizer.herokuapp.com/random/`)
		.then(resp => {
			if (response.length < 1) {
				setResponse(response => [resp.data, ...response])
			}
			console.log('resp', resp)
		})
    }, [response]) 
	return (
		<div className="App">
			<h1>Taco Gen</h1>
		</div>
	)
}

export default App
