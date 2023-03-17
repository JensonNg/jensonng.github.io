---
title: "Project"
layout: 'layouts/project.html'
summary: "My recent projects"
pagination:
  data: collections.projectPosts
  size: 10
permalink: 'projects{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
socialImage: 'images/common/website_thumbnail.png'
---
