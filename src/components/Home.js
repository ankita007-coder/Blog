import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import {Link} from 'react-router-dom';

function Home() {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    firestore
    .collection('posts')
    .get()
    .then((snapshot)=>{
      const posts = snapshot.docs.map((doc)=>
      {
        return{
          id: doc.id,
          ...doc.data()
        }
      });
      setPosts(posts);
    })
  },[]);


  return (
    <div className='home'>
      <h1>Music Blog</h1>
      <div id='blog-by'>Ankita Budhia</div>
      {
        posts.map((post,index)=>(
        
          <div className='post' key={`post-${index}`}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.subtitle}</p>

          </div>
        ))
      }
    </div>
  )
}
export default Home;