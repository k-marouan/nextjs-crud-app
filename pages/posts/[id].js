import domain from "@/utils/config"
import axios from "axios"
import { useState } from "react"

export default function PostId({ post }) {

  const [title, setTitle] = useState(post.title)
  const [imageUrl, setImageUrl] = useState(post.imageUrl)
  const [details, setDetails] = useState(post.details)

  const updatePost = async() => {
    const postUpdate = {
      title,
      imageUrl,
      details
    }
    try {
        await axios.put(`${domain}/posts/${post._id}`, postUpdate)
        alert('post updated successfully')
    } catch (error) {
        console.log("err: ", error);
    }
  }
    return (
      <>
      <h1> Update Post Page</h1>
      <div className="container">
          <form>
              <div className="mb-3 row">
                  <div className="col-8">
                      <input type="text" className="form-control" name="title" 
                          value={ title } 
                          onChange={ (e) => { setTitle(e.target.value) } }
                          placeholder="Title" />
                  </div>
              </div>
              <div className="mb-3 row">
                  <div className="col-8">
                      <input type="text" className="form-control" name="imagurl"
                          value={ imageUrl } 
                          onChange={ (e) => { setImageUrl(e.target.value) } }
                          placeholder="Image url" />
                  </div>
              </div>
              <div className="mb-3 row">
                  <div className="col-8">
                  <textarea className="form-control" name="details" 
                  value={ details } 
                  onChange={ (e) => { setDetails(e.target.value) } }
                  rows="3"></textarea>
              </div>
              </div>
              <br />
              <div className="mb-3 row">
                  <div className="offset-sm-4 col-sm-8">
                      <button type="button" className="btn btn-primary" 
                          onClick={ updatePost }
                      >Update</button>
                  </div>
              </div>
          </form>
      </div>
    </>
    )
  }
  
  export async function getServerSideProps(context) {
    try {
      const response = await axios.get(`${domain}/posts/${context.query.id}`)
      return {
        props: {
          post: response.data
        }, 
      }
    } catch (error) {
      console.log(error)
    } 
    
  }
  