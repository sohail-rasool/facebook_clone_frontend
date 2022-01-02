import { useState, useEffect } from 'react'
import axios from 'axios'
import Share from '../Share/Share'
import Post from '../Post/Post'

import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'

const Feed = ({ style, userName }) => {
  const user = useSelector(selectUser)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const response = userName
        ? await axios.get(`/posts/profile/${userName}`)
        : await axios.get(`posts/timeline/${user._id}`)
      const data = response.data
      setPosts(data)
    }
    fetchPosts()
  }, [userName,user._id])

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
