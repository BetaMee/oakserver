/** 
 * TODO //
 * 响应code
*/
const Code= {
  // 用户登陆代码
  USER_LOGIN_SUCCESS: 'user login successfully',
  USER_LOGIN_SUCCESS_CODE: '10011',

  USER_IS_NOT_EXISTS: 'user is not exist!',
  USER_IS_NOT_EXISTS_CODE: '10012',

  USER_PASSWORD_INCORRECT: 'password is not correct',
  USER_PASSWORD_INCORRECT_CODE: '10013',

  USER_LOGIN_ERROR_CODE: '10014',

  // 用户登出
  USER_LOGOUT_SUCCESS: 'user logout successfully',
  USER_LOGOUT_SUCCESS_CODE: '10021',

  USER_LOGOUT_ERROR_CODE: '10024',

  // 用户注册代码
  USER_REGISTER_SUCCESS: 'user registered successfuly',
  USER_REGISTER_SUCCESS_CODE: '10031',

  USER_ALREADY_REGISTERED: 'user has been registered',
  USER_ALREADY_REGISTERED_CODE: '10032',

  USER_REGISTERED_ERROR_CODE: '10034',


  // Archive
  // GET
  ARCHIVE_GET_SUCCESS: 'get archive successfully',
  ARCHIVE_GET_SUCCESS_CODE: '20011',

  ARCHIVE_GET_ERROR_CODE: '20014',

  // CREATE
  ARCHIVE_CREATE_SUCCESS: 'archive create successfully',
  ARCHIVE_CREATE_SUCCESS_CODE: '20021',

  ARCHIVE_CREATE_ERROR_CODE: '20024',

  // UPDATE
  ARCHIVE_UPDATE_SUCCESS: 'archive updated successfully',
  ARCHIVE_UPDATE_SUCCESS_CODE: '20031',

  ARCHIVE_UPDATE_ERROR_CODE: '20034',

  // DELETE
  ARCHIVE_DELETE_SUCCESS: 'archive deleted successfully',
  ARCHIVE_DELETE_SUCCESS_CODE: '20041',

  ARCHIVE_DELETE_ERROR_CODE: '20044',

  // Article
  // GET BY ID
  ARTICLE_GET_SUCCESS: 'get article successfully',
  ARTICLE_GET_SUCCESS_CODE: '30011',

  ARTICLE_GET_ERROR_CODE: '30014',

  // GET BY ArchiveId
  ARTICLE_GETBYARCHIVE_SUCCESS: 'get articles by archiveId successfully',
  ARTICLE_GETBYARCHIVE_SUCCESS_CODE: '30021',

  ARTICLE_GETBYARCHIVE_ERROR_CODE: '30024',
  // GET BY AuthorId
  ARTICLE_GETBYAUTHOR_SUCCESS: 'get articles by authorId successfully',
  ARTICLE_GETBYAUTHOR_SUCCESS_CODE: '30031',

  ARTICLE_GETBYAUTHOR_ERROR_CODE: '30034',

  // CREATE
  ARTICLE_CREATE_SUCCESS: 'article created successfully',
  ARTICLE_CREATE_SUCCESS_CODE: '30041',

  ARTICLE_CREATE_ERROR_CODE: '30044',
  // UPDATE
  ARTICLE_UPDATE_SUCCESS: 'article updated successfully',
  ARTICLE_UPDATE_SUCCESS_CODE: '30051',

  ARTICLE_UPDATE_ERROR_CODE: '30054',

  // DELETE
  ARTICLE_DELETE_SUCCESS: 'article deleted successfully',
  ARTICLE_DELETE_SUCCESS_CODE: '30061',

  ARTICLE_DELETE_ERROR_CODE: '30064',

  // Author
  // GET
  AUTHOR_GET_SUCCESS: 'get author successfully',
  AUTHOR_GET_SUCCESS_CODE: '40011',

  AUTHOR_GET_ERROR_CODE: '40014',
  // CREATE
  AUTHOR_CREATE_SUCCESS: 'author create successfully',
  AUTHOR_CREATE_SUCCESS_CODE: '40021',

  AUTHOR_CREATE_ERROR_CODE: '40024',

  // UPDATE
  AUTHOR_UPDATE_SUCCESS: 'author updated successfully',
  AUTHOR_UPDATE_SUCCESS_CODE: '40031',

  AUTHOR_UPDATE_ERROR_CODE: '40034',

  // DELETE
  AUTHOR_DELETE_SUCCESS: 'author deleted successfully',
  AUTHOR_DELETE_SUCCESS_CODE: '40041',

  AUTHOR_DELETE_ERROR_CODE: '40044',

  // Assets
  // UPLOAD
  ASSET_UPLOAD_SUCCESS: '资源上传成功',
  ASSET_UPLOAD_SUCCESS_CODE: '50011',

  ASSET_UPLOAD_ERROR_CODE: '50014',

  // DELETE
  ASSET_DELETE_SUCCESS: '资源删除成功',
  ASSET_DELETE_SUCCESS_CODE: '50021',

  ASSET_DELETE_ERROR_CODE: '50024',

  // UPDATE
  ASSET_UPDATE_SUCCESS: '资源更新成功',
  ASSET_UPDATE_SUCCESS_CODE: '50031',

  ASSET_UPDATE_ERROR_CODE: '50034'
}

export default Code
