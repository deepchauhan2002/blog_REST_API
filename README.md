# REST API for blog posts
This REST API allows users to read blog posts on our website. It has two endpoints:

## GET /posts
This endpoint retrieves all the blog posts and displays them in a user-friendly format. It includes filtering options based on categories and tags, as well as pagination.
<br/>
REQUEST
GET /posts
Query Parameters:<br/>
- `page` (optional): The page number to retrieve. Defaults to 1.<br/>
- `limit` (optional): The maximum number of posts to retrieve per page. Defaults to 10.<br/>
- `category` (optional): The category to filter posts by.<br/>
- `tag` (optional): The tag to filter posts by.<br/>

RESPONSE<br/>
- `blogs`: An array of blog post objects.<br/>
- `totalPages`: The total number of pages based on the limit and count of documents.<br/>
- `currentPage`: The current page number.<br/>

Example response:
{
  "blogs": [
    {
      "id": "1",
      "name": "Blog Post 1",
      "description": "This is the first blog post.",
      "image": "https://example.com/images/post1.jpg",
      "category": "Technology",
      "tag": "JavaScript"
    },
    {
      "id": "2",
      "name": "Blog Post 2",
      "description": "This is the second blog post.",
      "image": "https://example.com/images/post2.jpg",
      "category": "Lifestyle",
      "tag": "Fitness"
    }
  ],
  "totalPages": 2,
  "currentPage": 1
}

## GET /posts/:id
This endpoint retrieves a specific blog post by its ID and displays the details in an easy-to-read format.<br/>
REQUEST<br/>
GET /posts/:id<br/>
Parameters:<br/>

Response<br/>
- `id`: The ID of the blog post to retrieve.<br/>
- `name`: The name of the blog post.<br/>
- `description` : The description of the blog post.<br/>
- `image` : The URL of the image associated with the blog post.<br/>
- `category` : The category of the blog post.<br/>
- `tag`: The tag of the blog post.<br/>

Example response:<br/>
{
  "id": "1",
  "name": "Blog Post 1",
  "description": "This is the first blog post.",
  "image": "https://example.com/images/post1.jpg",
  "category": "Technology",
  "tag": "JavaScript"
}










