import * as React from 'react'
import * as ReactDom from 'react-dom'
import Home from './components/Home'
import { createRoot } from 'react-dom/client'

 


const App = () => {
    return (
        <div className='container' >
            
            <Home/>

        </div>
    )
}

createRoot(document.getElementById('welcome')).render(<App/>)

export default App