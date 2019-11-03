import React from 'react';
import {Input, Button} from 'antd';

import s from './MyPosts.module.css';
import PostContainer from "./Post/PostContainer";

const { TextArea } = Input;



const MyPosts = (props) => {

  let newPost = React.createRef();

  let addNewPost = () => {
    let text = newPost.current.textAreaRef.value;
    props.addNewPost(text);
  };

  let onPostChange = () => {
    let text = newPost.current.textAreaRef.value;
    props.changePost(text);
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
      <PostContainer />
        {/*{*/}
        {/*  props.profilePage.posts.map( (item, index) => {*/}
        {/*    console.log(item.message);*/}
        {/*        return <PostContainer messages={item.message} id={index} store={props.store}/>*/}
        {/*})*/}
        {/*}*/}
    </div>
  );
};


export default MyPosts;