const HOST = "https://news-at.zhihu.com/api/4";
const latest = HOST + "/news/latest";

const before = HOST + "/news/before/";

//详情页
const detail = HOST + "/news/";

// 主题页
const themes = HOST + "/themes";

// 热点
const hot = HOST + "/news/hot";
// 新闻额外信息
const extra = HOST + "/story-extra/";
// 查看长评论

const comments = HOST + "/story/"


function fetchGet(url, callback) {
  wx.request({
    url: url,
    header: { 'Content-Type': 'application/json' },
    success(res) {
      callback(null, res.data)
    },
    fail(e) {
      console.error(e)
      callback(e)
    }
  })
}

function fetchPost(url, data, callback) {
  wx.request({
    method: 'POST',
    url: url,
    data: data,
    success(res) {
      callback(null, res.data)
    },
    fail(e) {
      console.error(e)
      callback(e)
    }
  })
}


function fetchGet2(url, callback) {
  wx.request({
    url: url,
    header: { 'Content-Type': 'application/json' },
    success(res) {
      callback(null, res)
    },
    fail(e) {
      console.error(e)
      callback(e)
    }
  })
}



module.exports = {
  latest: latest,
  // methods
  fetchGet:fetchGet,
  fetchGet2: fetchGet2,
  before:before,
  detail:detail,
  themes:themes,
  hot:hot,
  extra:extra,
  comments:comments
}
