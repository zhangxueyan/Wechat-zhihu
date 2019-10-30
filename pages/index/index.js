//index.js
//获取应用实例
const app = getApp()
const utils = require('../../utils/util.js');
const Api = require('../../utils/api.js');

Page({
  data: {
    banner:[],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 1000,
  
    //每天item
    list:[],
    count:0,
    //新闻item
    allNews:[],
    allIds:[]
  },
  onLoad:function(){
    this.getData()
  },
  getData:function(){
    var that = this;
    const ApiUrl = Api.latest;
    Api.fetchGet(ApiUrl,function(err,res){
      that.setData({
        banner: res.top_stories,
        list: [res],
        allNews:res.stories,
        allIds: res.stories.map(function (item) {
          return item.id
        })
      })
      console.log(that.data.allIds)
    })
  },
  //事件处理函数 滚动加载更多
  loadMore() {
    var that = this;
    var ApiUrl = Api.before + utils.formatBefore(that.data.count);
    Api.fetchGet(ApiUrl, function (err, res) {
      wx.showLoading({ //添加过度的弹出框提示“加载中” 
        title: '加载中',
        icon: 'loading',
      });
      setTimeout(function () {
        that.setData({
          list:that.data.list.concat(res),
          allNews: that.data.allNews.concat(res.stories),
          allIds: that.data.allIds.concat(res.stories.map(function (item) {
            return item.id
          }))
        });
        console.log(that.data.allNews)

        wx.hideLoading();
      }, 1500)
      that.data.count++
    })
  }

})
