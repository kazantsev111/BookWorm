// *Страница с добавлением книги на сайт. Как это должно выглядеть: после регистрации у пользователя появляется страница для добавления книг, там есть форма. 
// В форме есть 3 поля
//    -название книги
//    -автор
//    -комментарии по книге
//    -если можно будет подкрепить фото обложки, будет очень круто.

// После добавление книги, любой зарегистрированный пользователь, может оставить свое мнение о книге

import axios from 'axios';
import React, { useState } from 'react';
import AddBookForm from '../Books/UI/addBookForm'

export default function AddPage({}) {
//   const [books, setaddbooks] = useState(allPosts);
  const addBookHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/posts', Object.fromEntries(new FormData(e.target)));
    //   setaddbook((prev) => [data, ...prev]);
    } catch (error) {
      console.log(error);
    }
  };
//   const deletePostHandler = async (postId) => {
//     try {
//       const response = await axios.delete(`/api/posts/${postId}`);
//       if (response.status === 200) {
//         setPosts((prev) => prev.filter((post) => post.id !== postId));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const updatePostHandler = async (newPost) => {
//     const response = await axios.patch(`/api/posts/${newPost.id}`, newPost);
//     setPosts((prev) => prev.map((post) => (post.id === newPost.id ? response.data : post)));
//   };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <AddBookForm addPostHandler={addBookHandler} />
        </div>
      </div>
      {/* <div className="row">
        <div className="list-group">
          {posts.map((post) => (
            <PostCard updatePostHandler={updatePostHandler} user={user} deletePostHandler={deletePostHandler} post={post} key={post.id} />
          ))}
        </div>
      </div> */}
    </>
  );
}
