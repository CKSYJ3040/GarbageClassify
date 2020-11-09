const rq = require('request-promise')
// 
/**
 * 获取百度ai AccessToken
 */
exports.main = async(event, context) => {
  let clientId = 'Ud6fDPAiqQyroic5OflV9Gy9',
  //let clientId = 'meHYGxvDrywqxhTr9DEkYHfl',
  grantType = 'client_credentials',
    clientSecret = 'VC8P9kEUnGTgWha7ySGLtiakehoShimG',
    //clientSecret = 'wwAlF1sXGt6AyrxYmSwTdPlc8tPpXGzl',
    url = `https://openapi.baidu.com/oauth/2.0/token`
  //url='https://openapi.baidu.com/oauth/2.0/token'
  return new Promise(async(resolve, reject) => {
    try {
      let data = await rq({
        method: 'POST',
        url,
        form: {
          "grant_type": grantType,
          "client_secret": clientSecret,
          "client_id": clientId
        },
        json: true
      })
      resolve({
        code: 0,
        data,
        info: '操作成功！'
      })
    } catch (error) {
      console.log(error)
      if (!error.code) reject(error)
      resolve(error)
    }
  })
}