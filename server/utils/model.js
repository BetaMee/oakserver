
const generateModelUpdateParam = (paramObject) => {
  // 去除undefined指
  const definedAbleParam = Object.entries(paramObject)
    .filter(item => item[1] !== undefined)
  const updateExpression = definedAbleParam.reduce((initExp, item, index) => {
    return `${initExp} #${item[0]} = :${item[0]} ${definedAbleParam.length - 1 === index ? '' : ','}`
  }, 'set').trim()
  const expressionAttributeNames = {}
  definedAbleParam.forEach((item) => {
    expressionAttributeNames[`#${item[0]}`] = `${item[0]}`
  })
  const expressionAttributeValues = {}
  definedAbleParam.forEach((item) => {
    expressionAttributeValues[`:${item[0]}`] = item[1]
  })
  return {
    updateExpression,
    expressionAttributeNames,
    expressionAttributeValues
  }
}

export {
  generateModelUpdateParam
}
