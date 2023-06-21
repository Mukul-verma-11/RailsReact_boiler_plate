import * as React from 'react';
import * as ReactDom from 'react-dom';
import '../../../../assets/stylesheets/Home.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [flag,setFlag] = useState(0)

  useEffect(() => {
    setFlag(1)
    axios
      .get('http://127.0.0.1:3000/user')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [flag]);

  const handleUsername = (e) => {
    setUserName(e.target.value);
    // console.log(userName);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };

  const submitForm = (e) => {
    e.preventDefault();
  
    const authenticityToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  
    axios({
      method: 'post',
      url: '/user/create',
      data: { username: userName, password: password },
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': authenticityToken,
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = (id) => {

    const authenticityToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    setFlag(flag + 1)
    console.log(id);
    axios({
      method: 'post',
      url: `/user/delete/${id}`,
      data : {id: id},
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': authenticityToken,
      },
    }).then((response) => {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  

  return (
    <>
      <div>
        <form onSubmit={submitForm}>
          <p>
            <label htmlFor="username">Username</label>
            <input onChange={handleUsername} value={userName} type="text" />
          </p>
          <br />
          <p>
            <label htmlFor="password">password</label>
            <input onChange={handlePassword} value={password} type="text" />
          </p>

          <button type="submit" onClick={() => setFlag(flag + 1)} >SUBMIT</button>
        </form>
      </div>

      <h1 className="title">Home</h1>
      {data.map((post, i) => (
        <div key={i}>
          <p key={i}>
            Username : {post.Username} , Password : {post.Password}
          <button onClick={() => handleDelete(post.id)} btn_id = {post.id} key = {post.id} > DELETE {post.id}  </button>
          </p>
        </div>
      ))}
    </>
  );
};

export default Home;
