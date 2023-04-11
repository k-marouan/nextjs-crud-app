import PostsItem from "@/components/PostsItem"
import domain from "@/utils/config"
import axios from "axios"

export default function Index({ postData }) {

  const posts = postData.map((post) => {
    return <PostsItem post = { post } />
  })

  return (
    <>
      { posts }
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const response = await axios.get(`${domain}/posts`)
    return {
      props: { postData: response.data}
    }
  } catch (error) {
      console.log("err: ", error);
  }
}
