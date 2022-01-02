import { useState, useEffect } from 'react'
import axios from 'axios'
import Share from '../Share/Share'
import Post from '../Post/Post'

const Feed = ({ style, userName }) => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const response = userName
        ? await axios.get(`/posts/profile/${userName}`)
        : await axios.get('posts/timeline/61d0a9b2cb63c72e64ecf114')
      const data = response.data
      setPosts(data)
    }
    fetchPosts()
  }, [userName])

  return (
    <div className='feed w-5/12' style={style}>
      <div className='feedWrapper p-5'>
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Feed
