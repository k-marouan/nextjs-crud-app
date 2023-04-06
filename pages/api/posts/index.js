import Post from "@/models/Post"
import connectDB from "@/utils/connectDB"
import nc from "next-connect"

connectDB()

const handler = nc().post(async(req, res) => {
    const { title, imageUrl, details } = req.body
    try {
        const newpost = new Post({ title, imageUrl, details })
        await newpost.save()
        res.status(200).json({ status: 'Post Added Successfully!' })
    } catch (error) {
        res.status(400).json({ status: 'Error somthing went wrong!' })
        console.log(error);
    }
})

export default handler