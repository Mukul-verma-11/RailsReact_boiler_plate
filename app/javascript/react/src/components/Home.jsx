import * as React from 'react'
import * as ReactDom from 'react-dom'
import '../../../../assets/stylesheets/Home.css'
import axios from 'axios' 
import { useEffect,useState } from 'react'


const Home = () => {

    const [data,setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setdata(res.data))
        .catch(err => console.log(err))

    },[])

    console.log(data);

    return (
        <>
        <h1 className='title' >Home</h1>
        {data.map(post => <li key={post.body} >{post.title}</li>)}
        </>
    )
}


export default Home 