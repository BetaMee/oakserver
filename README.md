[![Build Status](https://travis-ci.org/BetaMee/oakserver.svg?branch=master)](https://travis-ci.org/BetaMee/oakserver)

## Oakserver

A backend server for LoveOak


## Restful API

### 文章

**GET /**

- 获取所有文章：`/rest/article?limit={}&offset={}&sort={}`

- 通过文章ID获取：`/rest/article/:articleId`

- 某归档类下有多少文章：`/rest/article/archive/:archiveId?limit={}&offset={}&sort={}`

- 某作者下有多少文章：`/rest/article/author/:authorId/?limit={}&offset={}&sort={}`

- 某归档类下某作者有多少文章：`/rest/article/archive/:archiveId/author/:authorId?limit={}&offset={}&sort={}`

**POST /**

- 生成一篇新文章：`/rest/article/create`

**PUT /（提供完整资源）**

- 更新一篇文章：`/rest/article/update/:articleId`

**PATCH /（提供部分资源）**

- 发表一篇文章：`/rest/article/publish/:articleId`

- 撤销一篇文章：`/rest/article/unpublish/:articleId`

**DELETE /**

- 删除一篇文章：`/rest/article/delete/:articleId`



### 作者

**GET /**

- 获取所有作者：`/rest/author`

- 获取某一个作者: `/rest/author/:authorId`

**POST /**

- 添加一个作者：`/rest/author/create`

**PUT /**

- 更新一个作者：`/rest/author/update/:authorId`

**DELETE /**

- 删除一个作者：`/rest/author/delete/:authorId`


### 头像

**POST /**
- 生成某个作者的头像：`/rest/avatar/create/:authorId`

**PUT /**

- 更新某个作者的头像：`/rest/avatar/update/:authorId`

### 归档

**GET /**

- 获取所有归档类：`/rest/archive`

- 获取某一个归档：`/rest/archive/:archiveId`

**POST /**

- 创建一个归档信息：`/rest/archive/create`

**PUT /**

- 更新一个归档信息：`/rest/archive/update/:archiveId`

**DELETE /**

- 删除一个归档信息：`/rest/archive/delete/:archiveId`


### 登录

- 注册：`/rest/signup`

- 登录：`/rest/signin`

- 登出：`/rest/signout`