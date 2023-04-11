import Post from "@/models/Post"
import connectDB from "@/utils/connectDB"
import nc from "next-connect"

connectDB()

const handler = nc().get(async(req, res) => {
    try {
        const post = await Post.findOne({ _id: req.query.id })
        res.send(post)
    } catch (error) {
        res.status(400).json({ status: 'Error somthing went wrong!!' })
        console.log(error);
    }
}).put(async(req, res) => {
    try {
        const post = await Post.findOne({ _id: req.query.id })
        post.title = req.body.title
        post.imageUrl = req.body.imageUrl
        post.details = req.body.details
        await post.save()
        res.send('1 Post has been updated successfully!')
    } catch (error) {
        res.status(400).json({ status: 'Error somthing went wrong!!' })
        console.log(error);
    }
}).delete(async(req, res) => {
    try {
        const post = await Post.findOneAndDelete({ _id: req.query.id })
        res.send('Post has been deleted successfully!')
    } catch (error) {
        res.status(400).json({ status: 'Error somthing went wrong!!' })
        console.log(error);
    }
})


export default handler