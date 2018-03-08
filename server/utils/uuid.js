import uuidv4 from 'uuid/v4'

/**
 * 生成唯一ID
 */
const generateUniqueID = () => {
  return uuidv4()
}

export { 
  generateUniqueID
}