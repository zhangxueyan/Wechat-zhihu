//entry.js
//获取应用实例
const utils = require('../../utils/util.js');
const Api = require('../../utils/api.js');
const app = getApp()
Page({
  data: {
    list: []
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: "热门"
    })
  },
  onLoad: function () {
    const that = this;
    // 获取主题日报信息 接口不可用
    // const ApiUrl = Api.themes;
    // Api.fetchGet(ApiUrl,function(err,res){
    //   that.setData({
    //     list: res
    //   })
    // })

    // 获取热点新闻
    const ApiUrl = Api.hot;
    Api.fetchGet(ApiUrl, function (err, res) {
      that.setData({
        list: res.recent
      })
      console.log(res)
    }) 
  }
})