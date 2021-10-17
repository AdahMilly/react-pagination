import React, {useState, useEffect} from "react"
import axios from "axios"
import Posts from "./components/Posts"

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from "./components/Pagination";

const App = () => {

  const [posts,setPosts ] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async() => {
      setLoading(true)
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  //get current post
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPage = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">React pagination</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
