import React from 'react';
import './App.css';
import comments from "./data";
import  UserComments from "./components/UserComments";


const App = () => {
  return (
    <div className="App">
      {
        comments.map((comment, id) => {
          return <UserComments key={id} name={comment.name} comment={comment.singleComment} />
        })
      }
    </div>
  );
}

export default App;
