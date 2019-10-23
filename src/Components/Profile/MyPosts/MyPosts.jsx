import React from 'react';
import {Input, Button} from 'antd';

import s from './MyPosts.module.css';
import Post from './Post/Post';

const { TextArea } = Input;


const MyPosts = (props) => {

  let newPost = React.createRef();

  let addNewPost = () => {
    let text = newPost.current.textAreaRef.value;
    props.addPost(text);
  };

  let onPostChange = () => {
    let txt = newPost.current.textAreaRef.value;
    props.updatePost(txt);
  };

  return (
    <div className='my_posts'>
      <div className={s.write_post}>
        <h4>My post</h4>
        <div className={s.wrap_inp}>
          <TextArea rows={3} ref={newPost} value={props.newPost} onChange={onPostChange}/>
          <Button onClick={addNewPost} type="primary" className={s.button_send}>Send</Button>
        </div>
      </div>
        {
            props.messages.map( (item, index) => (
                <Post messages={item.messages} id={index} removePost={props.removePost}/>
            ))
        }
    </div>
  );
};

export default MyPosts;