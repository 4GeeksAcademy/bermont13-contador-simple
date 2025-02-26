import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"


// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let sec1, sec2, min1, min2, hour1, hour2
sec1 = sec2 = min1 = min2 = hour1 = hour2 = 0

setInterval(() => {
  if (sec1 == 10) {
    sec1 = 0
    sec2++
  }
  if (sec2 == 10) {
    sec1 = sec2 = 0
    min1++
  }
  if (min1 == 10) {
    sec1 = sec2 = min1 = 0
    min2++
  }
  if (min2 == 10) {
    sec1 = sec2 = min1 = min2 = 0
    hour1++
  }
  if (hour1 == 10) {
    sec1 = sec2 = min1 = min2 = hour1 = 0
    hour2++
  }
  if (hour2 == 10) {
    sec1 = sec2 = min1 = min2 = hour1 = hour2 = 0
    
  }
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home sec1={sec1} sec2={sec2} min1={min1} min2={min2} hour1={hour1} hour2={hour2}/>
    </React.StrictMode>,
  )

  sec1++
}, 1000);


