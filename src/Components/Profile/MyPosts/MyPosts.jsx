import React from 'react';
import {Input, Button} from 'antd';

import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator} from "../../../redux/state";

const { TextArea } = Input;



const MyPosts = (props) => {
  let store = props.store;

  let newPost = React.createRef();

  let addNewPost = () => {
    let text = newPost.current.textAreaRef.value;
    let action = addPostActionCreator(text);
    props.dispatch(action);
  };

  let onPostChange = () => {
    let txt = newPost.current.textAreaRef.value;
    store.updatePost(txt);
  };


  return (
    <div className='my_posts'>
      <div className={s.write_post}>
        <h4>My post</h4>
        <div className={s.wrap_inp}>
          <TextArea rows={3} ref={newPost} value={store.getNewPost()} onChange={onPostChange}/>
          <Button onClick={addNewPost} type="primary" className={s.button_send}>Send</Button>
        </div>
      </div>
        {
            store.getAllPosts().map( (item, index) => (
                <Post messages={item.message} id={index} deletePost={store.deletePost}/>
            ))
        }
    </div>
  );
};

export default MyPosts;