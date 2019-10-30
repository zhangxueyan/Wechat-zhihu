//entry.js
//获取应用实例
const utils = require('../../utils/util.js');
const Api = require('../../utils/api.js');
const WxParse = require('../wxParse/wxParse.js');
const app = getApp()
Page({
  data: {
    art:{},
    extra:{},
    id:'',
    next:''
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: "详情页面"
    })
  },
  onLoad:function(options){
    var that=this;
    const ApiUrl = Api.detail + options.id;
    Api.fetchGet(ApiUrl,function(err,res){
      that.setData({
        art: res
      })
      WxParse.wxParse('article', 'html', that.data.art.body, that);
    })
    that.showExtra(options)
    // onload时候 获取到 options的id值 方便跳转对应id的评论页面
    that.setData({
      id: options.id,
      next:options.next
    })
    console.log(options)
  },
  showExtra: function (options){
    var that = this;
    const ApiUrl = Api.extra + options.id;
    Api.fetchGet(ApiUrl, function (err, res) {
      that.setData({
        extra: res
      })
    })
  },
  goComments:function(){
    wx.navigateTo({
      url: "/pages/comments/comments?id="+this.data.id
    })
  },
  goBack: function () {
    var pages = getCurrentPages();
    var beforePage = pages[pages.length - 2];
    var currentPage = pages[pages.length - 1];
    // console.log(beforePage)
    wx.navigateBack({
      delta: 1  // 返回上一级页面。
    })
  },
  goNext:function(){
    // 获取下一条的id
    wx.navigateTo({
      url: "/pages/detail/detail?id=" + this.data.next
    })
  }
})
