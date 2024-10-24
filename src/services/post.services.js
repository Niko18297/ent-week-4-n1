const Post = require("../models/Post");



const updateServices = async (id, post) => {
    return await Post.update(
         post,
         { where: {id}, returning: true }
     );
 }

 module.exports = updateServices