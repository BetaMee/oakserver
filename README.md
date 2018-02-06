## Oakserver

A backend server for LoveOak


## Restful API

### 文章

**GET /**

总体有多少文章：`/rest/article?limit={}&offset={}&sort={}`

通过文章ID获取：`/rest/article/:articleId`

某归档类下有多少文章：`/rest/article/archive/:archive?limit={}&offset={}&sort={}`

某作者下有多少文章：`/rest/article/author/:author/?limit={}&offset={}&sort={}`

**POST /**

生成一篇新文章：`/rest/article/create`

**PUT /**

更新一篇文章：`/rest/article/update/:articleId`


**DELETE /**

删除一篇文章：`/rest/article/delete/:articleId`



### 作者

**GET /**

获取所有作者：`/rest/author`

获取某一个作者: `/rest/author/:authorId`

**POST /**

添加一个作者：`/rest/author/create`

**PUT /**

更新一个作者：`/rest/author/update/:authorId`

**DELETE /**

删除一个作者：`/rest/author/delete/:authorId`

### 归档

**GET /**

获取所有归档类：`/rest/archive`

获取某一个归档：`/rest/archive/:archiveId`

**POST /**

创建一个归档信息：`/rest/archive/create`

**PUT /**

更新一个归档信息：`/rest/archive/update/:archiveId`

**DELETE /**

删除一个归档信息：`/rest/archive/delete/:archiveId`
