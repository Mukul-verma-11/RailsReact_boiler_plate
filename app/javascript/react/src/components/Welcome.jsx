import * as React from 'react'
import * as ReactDom from 'react-dom/client'
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

const root = ReactDom.createRoot(document.getElementById('welcome'))
root.render(
    <Welcome/>
)

export default Welcome