import * as React from 'react'
import * as ReactDom from 'react-dom'
import Home from './Home'


const Welcome = () => {
    return (
        <div className='container' >
            <h1>
                Hello Buddy !!!
            </h1>

            <Home/>

        </div>
    )
}


document.addEventListener('DOMContentLoaded', () => {
    ReactDom.render(<Welcome/>,document.getElementById('welcome'))
})

export default Welcome