//entry.js
//获取应用实例
const app = getApp()
Page({
  data: {
    msg:'那年夏天coral',
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: "我的"
    })
  },
  onLoad:function(){
  }
})