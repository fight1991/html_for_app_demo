<template>
    <div class="home_div">
        <div id="container"></div>
    </div>
</template>
<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef } from '@vue/reactivity';
import { onMounted } from 'vue';
export default {
    name:"mapcomtaint",
    setup(){
        let map = null;
        const ininMap = () => {
            AMapLoader.load({
                key:'ffa1527d9cf893866bc676b3c699049f',  //设置您的key
                version:"2.0",
                plugins:['AMap.ToolBar','AMap.Driving'],
                AMapUI:{
                    version:"1.1",
                    plugins:[],

                },
                Loca:{
                    version:"2.0.0"
                },
            }).then((AMap)=>{
                map = new AMap.Map("container",{
                    viewMode:"3D",
                    zoom:5,
                    zininMapooms:[2,22],
                    center:[105.602725,37.076636],
                });
                let positionArr = [
                    [113.357224,34.977186],
                    [114.555528,37.727903],
                    [112.106257,36.962733],
                    [109.830097,31.859027],
                    [116.449181,39.98614],
                ];
                for(let item of positionArr){
                    let marker = new AMap.Marker({
                        position:[item[0],item[1]],
                    });
                    map.add(marker);
                }


            }).catch(e=>{
                console.log(e);
            })
        }
        onMounted(() => {
            ininMap();
        })
        return{
            
        }
        

    },
}
</script>
<style scope>
    .home_div{
        height: 100%;
        width: 100%;
        padding: 0px;
        margin: 0px;
        position: relative;
    }
    #container{
        height: 100%;
        width: 100%;
        padding: 0px;
        margin: 0px;
    }
    .map-title{
         position:absolute;
         z-index: 1;
         width: 100%;
         height: 50px;
         background-color: rgba(27, 25, 27, 0.884);

    }
    h3{
        position:absolute;
        left: 10px;
        z-index: 2;
        color: white;
    }



</style>
