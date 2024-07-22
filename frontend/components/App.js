import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {

let [data, setData] = useState(null)

useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=GtQ55ELsSSIMbg1i84zb9qwt4xB10wUNrPQbPVkD')
  .then(res => setData(res.data))
  .catch(err => console.error(err))


},[])


  return (
    <>
     <h1>{data ? data.title : 'Loading...'}</h1>
      {data && <p>{data.explanation}</p>}
      {data && <img src={data.hdurl} alt={data.title} style={{ maxWidth: '100%' }} />}
    </>
  )
}

export default App
