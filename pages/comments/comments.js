//entry.js
//获取应用实例
const utils = require('../../utils/util.js');
const Api = require('../../utils/api.js');

const app = getApp()
Page({
  data: {
    longs:[],
    shorts:[],
    isOpen:true,
    isOpen2: false
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: "评论页面"
    })
  },
  onLoad:function(options){
    this.getLong(options)
    this.getShort(options)
    console.log(options)
  },
  getLong:function(options){
    var that = this;
    // const ApiUrl = Api.comments + "8997528/long-comments";
    const ApiUrl = Api.comments + options.id+"/long-comments";
    Api.fetchGet(ApiUrl, function (err, res) {
      // console.log(res.comments)
      that.setData({
        longs: that.data.longs.concat(res.comments.map(function(item){
          item.time = utils.formatTime(new Date(item.time))
          return item;
        }))
      })
    })
  },
  getShort: function (options) {
    var that = this;
    const ApiUrl = Api.comments + options.id + "/short-comments";
    // const ApiUrl = Api.comments + "8997528/short-comments";
    Api.fetchGet(ApiUrl, function (err, res) {
      // console.log(res.comments)
      that.setData({
        shorts: that.data.shorts.concat(res.comments.map(function (item) {
          item.time = utils.formatTime(new Date(item.time))
          return item;
        }))
      })
    })
  },
  toggleON:function(e){
    const that = this;
    var type = e.currentTarget.dataset.type;
    if(type=="long"){
      that.setData({
        isOpen: !that.data.isOpen
      })
    }
    if (type == "short"){
      that.setData({
        isOpen2: !that.data.isOpen2
      })
    }
  },
  toggleZan:function(e){
    const that = this;
    const likes = e.currentTarget.dataset.likes; 
    console.log(e)

  }
})
