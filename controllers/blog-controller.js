const Blog = require('../models/blog')

const getallBlogs = async (req, res, next) => {
    const { page = 1, limit = 10, category, tag } = req.query;
  
    const query = {};
    if (category) {
      query.category = category;
    }
    if (tag) {
      query.tag = tag;
    }
  
    try {
      const blogs = await Blog.find(query)
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
  
      const count = await Blog.countDocuments(query);
  
      res.status(200).json({
        blogs,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
const getBlogById = async (req, res, next) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: `Blog not found with id:${req.params.id}` });
      }
      res.status(200).json(blog);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

module.exports = { getBlogById,getallBlogs }