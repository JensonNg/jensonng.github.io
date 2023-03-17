---
title: "Blog"
layout: 'layouts/blog.html'
summary: "My blog posts are here"
pagination:
  data: collections.blogPosts
  size: 10
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
socialImage: 'images/common/website_thumbnail.png'
---
