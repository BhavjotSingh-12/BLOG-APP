const router = require('express').Router();
const Post = require("../Models/Post");

// Create Post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json(err);
    }
})


// Update Post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                const updatepost = await Post.findByIdAndUpdate(req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true });
                res.status(200).json(updatepost)
            } catch (err) {
                res.status(500).json(err)
            }
        }
        else {
            res.status(401).json("You can  only update your post");
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

// Delete Post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                await post.deleteOne();
                res.status(200).json("Post has been deleted")
            } catch (err) {
                res.status(500).json(err)
            }
        }
        else {
            res.status(401).json("You can only delete your post");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get Post
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });
// Get All Posts
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
      let posts;
      if (username) {
        posts = await Post.find({ username });
      } else if (catName) {
        posts = await Post.find({
          categories: {
            $in: [catName],
          },
        });
        }
        else{
            posts=await Post.find();
        }
            res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router