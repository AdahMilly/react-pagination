import React, {useState, useEffect} from "react"
import axios from "axios"

const App = () => {

  const [posts,setPosts ] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(100)

  useEffect(() => {
    const fetchPosts = async() => {
      setLoading(true)
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])


  return (
    <div>
      <h1>React pagination</h1>
    </div>
  );
}

export default App;
