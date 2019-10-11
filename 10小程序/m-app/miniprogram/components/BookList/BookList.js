// components/BookList/BookList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentList: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleDetail(e) {
      let { id } = e.target.dataset
      wx.navigateTo({
        url: `/pages/detail/detail?id=${id}`,
      })
    }
  }
})
