// pages/scan2/scan2.js
function pipei1(s) {
  var ss = s.split('"');
  return ss[3];
}
function pipei2(s) {
  var ss = s.split('/');
  return ss[0];
}
const app = getApp()
Page({
  data: {
    percent: '0',
    rst: "",
    flag2: true,
    txt: '识别2',
    imgSrc: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      upimg: app.globalData.upimg
    })
    var that = this
    const uploadTask = wx.uploadFile({
      url: 'https://a076d23d27ec4cf9bab17b3742eae51d.apigw.cn-north-4.huaweicloud.com/v1/infers/2f16b1a2-766f-419c-8bc0-f163c066ddbf',
      filePath: app.globalData.upimg,
      name: 'input_img',
      header: {
        'Content-Type': 'multipart/form-data',
        'Content-Type': 'application/x-www-form-encoded',
        'X-Auth-Token': 'MIIYYgYJKoZIhvcNAQcCoIIYUzCCGE8CAQExDTALBglghkgBZQMEAgEwghZ0BgkqhkiG9w0BBwGgghZlBIIWYXsidG9rZW4iOnsiZXhwaXJlc19hdCI6IjIwMjAtMDUtMTFUMTI6MTE6MjYuOTQyMDAwWiIsIm1ldGhvZHMiOlsicGFzc3dvcmQiXSwiY2F0YWxvZyI6W10sInJvbGVzIjpbeyJuYW1lIjoidGVfYWRtaW4iLCJpZCI6IjAifSx7Im5hbWUiOiJ0ZV9hZ2VuY3kiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9laXBfaXB2NiIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3YyeCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19zcG90X2luc3RhbmNlIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfaXZhc192Y3JfdmNhIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfaWVmX25vZGVncm91cCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2NjaV9tb3VudG9ic3Bvc2l4IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWNzX2FzY2VuZF9rYWkxIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWNzX2thZTEiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9kYnNfcmkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9ibXNfaHBjX2gybGFyZ2UiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9ldnNfZXNzZCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2lvZHBzIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYmF0Y2hfZWNzX2NsdXN0ZXIiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3NfZ3B1X3YxMDAiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jYnNfcWkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9kd3NfcG9jIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfbWVldGluZ19lbmRwb2ludF9idXkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9tZWVldGluZ193aGl0ZWJvYXJkX2J1eSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3Npc19zYXNyX2VuIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfVklTX0ludGwiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3NfZ3B1X3AycyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2V2c192b2x1bWVfcmVjeWNsZV9iaW4iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF92Y2MiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF92Y3AiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9kcHAiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9vY3NtYXJ0Y2FtcHVzIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYmtzIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfbWVldGluZ19oYXJkYWNjb3VudF9idXkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9tdWx0aV9iaW5kIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfbmxwX210IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWlwX3Bvb2wiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9tZWVldGluZ19jdXJyZW50X2J1eSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2llZl9mdW5jdGlvbiIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfYXAtc291dGhlYXN0LTNkIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfcHJvamVjdF9kZWwiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9tNm10IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZXZzX3JldHlwZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FhZF9mcmVlIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWxiX2d1YXJhbnRlZWQiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2NuLXNvdXRod2VzdC0yYiIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3Nmc3R1cmJvIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfY2JyX3R1cmJvIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfaHZfdmVuZG9yIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYV9jbi1ub3J0aC00ZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfY24tbm9ydGgtNGQiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9JRUMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF90YXMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9zaXNfYXNzZXNzX211bHRpbW9kZWwiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jY2VfbWNwX3RoYWkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9ubHBfbGdfdGciLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9zZXJ2aWNlc3RhZ2VfbWdyX2R0bSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfY24tbm9ydGgtNGYiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jcGgiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9Nb2RlbEFydHNBc2NlbmQ5MTAiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9tZWV0aW5nX2hpc3RvcnlfY3VzdG9tX2J1eSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3dzIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWNzX2dwdV9nNXIiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lbGJfbWlncmF0ZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3drc19rcCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2NjaV9rdW5wZW5nIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfcmlfZHdzIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfaW90ZWRnZV9jYW1wdXMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF92Z3ZhcyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3ZwY19mbG93X2xvZyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX29wX2dhdGVkX2ljcyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FhZF9iZXRhX2lkYyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2NzYnNfcmVwX2FjY2VsZXJhdGlvbiIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2llZl9lZGdlbWVzaCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Fpc19hcGlfaW1hZ2VfYW50aV9hZCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Rzc19tb250aCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2NzZyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19jNngiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9zaXNfYXNzZXNzX2F1ZGlvIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfdWZzIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZGVjX21vbnRoX3VzZXIiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF92aXBfYmFuZHdpZHRoIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWNzX29sZF9yZW91cmNlIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZGNzX3JpIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfdmdpdnMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9vYnNfZHVhbHN0YWNrIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWRjbSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2NzYnNfcmVzdG9yZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2l2c2NzIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfSVdCUHVibGljVGVzdCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2lwdjZfZHVhbHN0YWNrIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfdnBuX3ZndyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2lydGMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jY2VfYm1zMiIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3BjYSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3Znd3MiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jY2VfYXNtX2hrIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfY3Nic19wcm9ncmVzc2JhciIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2lvdi10cmlhbCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3Jkc19hcm0iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3NfYzZ4X3ZpcnRpb19uZXQiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9ldnNfcG9vbF9jYSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Rkc19hcm0iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX0NOLVNPVVRILTMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3Nfb2ZmbGluZV9kaXNrXzQiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9icyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2dzc19mcmVlX3RyaWFsIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfbWVldGluZ19jbG91ZF9idXkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lcHMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jc2JzX3Jlc3RvcmVfYWxsIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfMTIzIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfbDJjZyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX1dlTGlua19lbmRwb2ludF9idXkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9xdWlja2J1eSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Zjc19wYXkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9pb3RhbmFseXRpY3MiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9tYXhodWJfZW5kcG9pbnRfYnV5IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYV9hcC1zb3V0aGVhc3QtMWUiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2FwLXNvdXRoZWFzdC0xZCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX25scF9rZyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfYXAtc291dGhlYXN0LTFmIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfaWVmX2RldmljZV9kaXJlY3QiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9kY3NfZGNzMl9wcm94eSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc192Z3B1X2c1IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfY3NfYXJtX3BvYyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19yaSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfY24tc291dGgtMWYiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2FwLXNvdXRoZWFzdC0xYyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfcnUtbm9ydGh3ZXN0LTJjIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfdWxiX21paXRfdGVzdCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19hc2NlbmRfa2FpMXMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9pZWZfcGxhdGludW0iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9WaWRlb19DYW1wdXMiLCJpZCI6IjAifV0sInByb2plY3QiOnsiZG9tYWluIjp7Im5hbWUiOiJodzA4NzA3MzAxIiwiaWQiOiIwN2RmMTZiNmYzMDAyNjMzMGYzYWMwMTZkOTNlODg4MCJ9LCJuYW1lIjoiY24tbm9ydGgtNCIsImlkIjoiMDgxODM3Yzk2NTAwMjU5MDJmYjZjMDE2MDgyMTA1YmEifSwiaXNzdWVkX2F0IjoiMjAyMC0wNS0xMFQxMjoxMToyNi45NDIwMDBaIiwidXNlciI6eyJkb21haW4iOnsibmFtZSI6Imh3MDg3MDczMDEiLCJpZCI6IjA3ZGYxNmI2ZjMwMDI2MzMwZjNhYzAxNmQ5M2U4ODgwIn0sIm5hbWUiOiJodzA4NzA3MzAxIiwicGFzc3dvcmRfZXhwaXJlc19hdCI6IiIsImlkIjoiMDdkZjE2Yjc5NTAwMjUyYzFmNGNjMDE2YTEwNzgwNGUifX19MYIBwTCCAb0CAQEwgZcwgYkxCzAJBgNVBAYTAkNOMRIwEAYDVQQIDAlHdWFuZ0RvbmcxETAPBgNVBAcMCFNoZW5aaGVuMS4wLAYDVQQKDCVIdWF3ZWkgU29mdHdhcmUgVGVjaG5vbG9naWVzIENvLiwgTHRkMQ4wDAYDVQQLDAVDbG91ZDETMBEGA1UEAwwKY2EuaWFtLnBraQIJANyzK10QYWoQMAsGCWCGSAFlAwQCATANBgkqhkiG9w0BAQEFAASCAQBElsW4FOXLvd0NzKK+l9o5ZW6ri54qEzkK1pgsmSKPdhWaTrM7m8a4F2EIU89h08QEEIK-SBRr21Qs2IQqkkeyRw-gRLbVYtyL89nJeuzVke9rG9bG1wZ8UQTA3ILvK3XKEnaxuVjIaj0hWbHgKAqUmYn6uHmAtHlocOG8yIs5jQAJ-g3CrtMiiETSEySMogNq8Zfs2ZvCHP4LH1gf5RReKC9fsi-vGAUfPeUXxDSqfD12bbMHvx18D+qV31MK6JLfGy6yrh8cc3ZHeMKH0I8Gem4Wz6J18pIogprHGdp4Ts7tvycl0Cg3DqITarKV+FBaqRPC5RZyV5R1SShvLxp0'

      },
      success: function (e) {
        var z1 = pipei1(e.data);
        var z2 = pipei2(z1);
        if (z2 == '可回收物') {
          that.setData({
            imgSrc: '../../images/RecycleableWaste.jpg' //可回收物的图片的链接
          })
        } else if (z2 == '有害垃圾') {
          that.setData({
            imgSrc: '../../images/HazardouAwaste.jpg' //有害垃圾的图片的链接
          })
        } else if (z2 == '其他垃圾') {
          that.setData({
            imgSrc: '../../images/OtherWasteIcon.png' //其他垃圾的图片的链接
          })
        } else if (z2 == '厨余垃圾') {
          that.setData({
            imgSrc: '../../images/KitchenWasteIcon1.png' //厨余垃圾的图片的链接
          })
        }
        that.setData({
          flag2: false,
          rst: z1
        })
      }
    })
    uploadTask.onProgressUpdate((res) => {
      that.setData({
        percent: res.progress
      })

    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 识别2
   */


  reshibie: function () {
    this.setData({

      flag2: true
    })
    console.log('onBindCamera!');
    wx.switchTab({
      
      url: '/pages/ai/index'
    })
  }
})