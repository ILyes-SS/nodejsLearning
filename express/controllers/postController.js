
let posts = [
    {id: 1 , title: 'post 1' },
    {id: 2 , title: 'post 2' },
    {id: 3 , title: 'post 3' }
]


const getAllPosts = (req, res, next)=>{
    const limit = parseInt(req.query.limit)

    if(!isNaN(limit) && limit > 0){
        return res.status(200).json(posts.slice(0, limit)) //return it to avoid writing an else clause
    }
    res.status(200).json(posts)
}

module.exports = {
    getAllPosts
}