import * as React from 'react'
// import * as ReactDom from 'react-dom'
import '../../../../assets/stylesheets/Home.css'
import axios from 'axios' 
import { useEffect,useState } from 'react'
import Navbar from './NavBar'
import Content from './Content'

const Home = () => {

    return (
        <>
        <Navbar/>

        <Content/>

        </>
    )
}


export default Home 