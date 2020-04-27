Page({
  data: {
    form:{
      level:3,
      backgroundImage:"http://p4.music.126.net/qX3ID48PhpAiDIt-VqlNkw==/109951163524169951.jpg",
      width:300,
      height:300
    },
    backgroundImageList:[
      { name: '图片1', value: 'http://p4.music.126.net/qX3ID48PhpAiDIt-VqlNkw==/109951163524169951.jpg',checked:true },
      { name: '图片2', value: 'http://p4.music.126.net/4G3Qf9LYE-fBPHqDI9Qxww==/109951163999423168.jpg' },
    ]
  },
  onLoad() {
  },
  onShow() {
  },
  onSubmit(e) {
    const form = e.detail.value;
    form.level = +form.level;
    form.width = +form.width;
    form.height = +form.height;

    this.setData({
      form
    })
  },
  pintuRef(ref) {
	// 存储自定义组件实例，方便以后调用
    this.pintu = ref;
  },
  onGameOver() {
    let _self =this;
    my.confirm({
      title: '温馨提示',
      content: '游戏结束',
      confirmButtonText: '再来一次',
      cancelButtonText: '太简单了',
      success: (result) => {
        result.confirm && _self.pintu.initGame(_self.data.form.level);
      },
    });
  }
 
});
