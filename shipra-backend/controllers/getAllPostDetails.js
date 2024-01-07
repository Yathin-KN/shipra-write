const Post=require("./../schemas/post")

const getAllPostDetails=async (req,res)=>{
    try{
        const posts=await Post.find({},{
            postDetails:1,
            post_id:1
        });

        if(posts.length===0){
            res.status(404).json({
                message:"No posts in database"
            })
        }

        const details=posts.map((post)=>({
            post_id:post.post_id,
            postDetails:post.postDetails
        }))

        res.status(200).json(details)
        

    }catch(error){
        res.status(500).json({message:"Internal server error"})
    }
}


module.exports={
    getAllPostDetails
}