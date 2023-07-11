import * as React from 'react'
import * as ReactDom from 'react-dom'
import Home from './Home'
import { createRoot } from 'react-dom/client'

 


const Welcome = () => {
    return (
        <div className='container' >
            
            <Home/>

        </div>
    )
}

createRoot(document.getElementById('welcome')).render(<Welcome/>)

export default Welcome