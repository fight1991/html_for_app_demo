import { reactive, onMounted } from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader';

const KEY = '2ba03a8b43305c0bb8e33c4a9941b2f0';

export default function useInitMap({ domId, center = [116.307484, 39.98412] }) {
  let map = reactive({
    dom: null,
    instance: null,
  });

  // 初始化地图
  const initMap = () => {
    map.dom = document.getElementById(domId);

    AMapLoader.load({
      key: KEY,
      version: '2.0', //2.0版本地图不显示
      plugins: [], // 插件列表，如比例尺'AMap.Scale'
    })
      .then((AMap) => {
        map.instance = new AMap.Map(domId, {
          center: center, // 中心点坐标
          zoom: 11, // 缩放级别
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  onMounted(() => {
    initMap();
  });

  return {
    map,
  };
}