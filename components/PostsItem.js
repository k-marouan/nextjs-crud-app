import domain from "@/utils/config";
import axios from "axios";
import { useRouter } from "next/router";

export default function PostsItem({ post }) {
  const router = useRouter()

  const deletePost = async() => {
    try {
      await axios.delete(`${domain}/posts/${post._id}`)
      alert('Post deleted successfully!')
      router.push('/posts')
    } catch (error) {
        res.status(400).json({ status: 'Error somthing went wrong!!' })
        console.log(error);
    }
  }

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="card">
              <img
                src={post.imageUrl}
                className="card-img-top"
                alt={post.imageUrl}
              />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.details}</p>
                <button type="button" className="btn btn-success" onClick={ () => { router.push(`/posts/${post._id}`) }}>Edit</button>&nbsp;
                <button type="button" className="btn btn-danger" onClick={ () => { deletePost(post._id) }}>Delete</button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <br />
    </>
  );
}
