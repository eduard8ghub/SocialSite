import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className='my_posts'>
      <div className={s.write_post}>
        <h4>My post</h4>
        <div className={s.wrap_inp}>
          <input type="text" />
          <button className={`${s.button_default} ${s.button_send}`}>Send</button>
        </div>
      </div>
      <Post messages = 'Hi, how are you?' />
      <Post messages = 'Hi, i am fine' />
    </div>
  );
}

export default MyPosts;