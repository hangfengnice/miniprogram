// components/post/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: Object
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
    onPostTap(){
      let id = this.properties.item.postId
      this.triggerEvent('formChild',{
        id
      })
    }
  }
})
