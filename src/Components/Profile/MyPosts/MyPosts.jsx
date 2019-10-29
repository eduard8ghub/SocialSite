import React from 'react';
import {Input, Button} from 'antd';

import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";

const { TextArea } = Input;



const MyPosts = (props) => {
  let newPost = React.createRef();

  let addNewPost = () => {
    let text = newPost.current.textAreaRef.value;
    let action = addPostActionCreator(text);
    props.dispatch(action);
  };

  let onPostChange = () => {
    let txt = newPost.current.textAreaRef.value;
    let action = updatePostActionCreator(txt);
    props.dispatch(action);
  };


  return (
    <div className='my_posts'>
      <div className={s.write_post}>
        <h4>My post</h4>
        <div className={s.wrap_inp}>
          <TextArea rows={3} ref={newPost} value={props.profilePage.newPost} onChange={onPostChange}/>
          <Button onClick={addNewPost} type="primary" className={s.button_send}>Send</Button>
        </div>
      </div>
        {
          props.profilePage.post.map( (item, index) => (
                <Post messages={item.message} id={index} dispatch={props.dispatch}/>
            ))
        }
    </div>
  );
};

export default MyPosts;