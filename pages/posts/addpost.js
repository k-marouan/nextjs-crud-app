import domain from "@/utils/config"
import axios from "axios"
import { useState } from "react"

export default function AddPost() {

    const [title, setTitle] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [details, setDetails] = useState("")

    const addPost = async () => {
        const post = {
            title,
            imageUrl,
            details
        }
        console.log(post);
        try {
            await axios.post(`${domain}/posts`, post)
            alert('post added successfully')
        } catch (error) {
            console.log("err: ", error);
        }
    }

    return (
      <>
        <h1> Add Post Page</h1>
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
                            onClick={ addPost }
                        >Create</button>
                    </div>
                </div>
            </form>
        </div>
      </>
    )
  }
  