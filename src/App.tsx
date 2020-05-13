import React from 'react'
import ReactDOM from 'react-dom'
import { style } from './styles/app'
import db from './db.json'

const App = () => {
  return (
    <div>
      <h1 css={style.title}>Welcome to Contentment</h1>
      <div>
        users: {db.posts.map(post => (
          <small key={post.id}>
            <a href='#'>{post.title}</a>
            <br/>
            <small>{post.user.name}</small>
          </small>
        ))}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
