import { createMap, randomArr, isMovable, isGameOver } from './utils/index.js'

Component({
  mixins: [],
  data: {
    map: [],
    rightMap: []
  },
  props: {
    level: 3,
    width: 300,
    height: 300,
    backgroundImage: '',
    onGameOver:()=>{}
  },
  deriveDataFromProps(nextProps){
   
    if(nextProps.level!=this.props.level){
      this.initGame(nextProps.level);
    }
  },
  didMount() {
    this.initGame(this.props.level)
  },
  didUpdate() {},
  didUnmount() { },
  methods: {
    initGame(level) {
      if(level<2){
        level=2;
        console.error("[pt] level 不能少于2")
      }
      
      const map = createMap(level);
      this.setData({
        rightMap: map,
        map: randomArr(map),
      })
    },
    handleItemTap(e) {
      const { idx } = e.target.dataset;
      const { map } = this.data;
      const lastIdx = map.length - 1;
      if (!isMovable(map[idx], map[lastIdx])) {
        return;
      }

      this.setData({
        [`map[${idx}]`]: map[lastIdx],
        [`map[${lastIdx}]`]: map[idx],
      }, () => {
        const { map, rightMap } = this.data;
        isGameOver(map, rightMap) && this.props.onGameOver();
      })

    }
  },
});
