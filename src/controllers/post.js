const blogPostService = require('../services/post');
const decodeToken = require('../utils/decode');
const userService = require('../services/user');

const createPost = async (req, res) => {
    const token = req.headers.authorization;
    const { email } = decodeToken(token).data;
    const user = await userService.findUserIdByEmail(email);

    const { body } = req;
    const { title, content, categoryIds } = body;
    const newBlogPost = await blogPostService.create(title, content, categoryIds, user.id);
    return res.status(201)
    .json({ id: newBlogPost.id,
         title,
         content,
         userId: user.id,
         updated: newBlogPost.updated,
         published: newBlogPost.published });
};

const getAll = async (_req, res) => {
    const allPosts = await blogPostService.getAll();

    return res.status(200).json(allPosts);
};

module.exports = {
    getAll,
    createPost,
};