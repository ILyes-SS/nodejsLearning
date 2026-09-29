const express = require('express')
// const express = require('express')
const logger = require('../middleware/logger')
const router = express.Router()
const { getAllPosts } = require('../controllers/postController')
let posts = [
    {id: 1 , title: 'post 1' },
    {id: 2 , title: 'post 2' },
    {id: 3 , title: 'post 3' }
]

//json api
// you can pass a middleware like this for a single route
// you should always call return next() inside routes
router.get('/', getAllPosts)

router.get('/:id', (req, res, next)=>{
    const id = parseInt(req.params.id)
    const post = posts.find((p)=> p.id == id)

    if(post){
        return res.status(200).json(post)
    }
    return next({status: 404, message: 'post not found'})
})


router.post('/', (req, res, next)=>{
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }

    if(!newPost.title){
        return next({status: 400, message: 'you forgot to add a title'})
    }
    posts.push(newPost)
    res.status(200).json(posts)
})

router.put('/:id', (req, res, next)=>{
    const id = parseInt(req.params.id)
    const post = posts.find((p)=> p.id == id)


    if(!post){
        return next({status: 404, message: 'post not found'})
    }
    post.title = req.body.title
    res.status(200).json(posts)
})

router.delete('/:id', (req, res, next)=>{
    const id = parseInt(req.params.id)
    const post = posts.find((p)=> p.id == id)

    if(!post){
        return next({status: 404, message: 'post not found'})        
    }
    posts = posts.filter((post)=> post.id != id)
    res.status(200).json(posts)

})



module.exports = router