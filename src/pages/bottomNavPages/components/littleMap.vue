<script>
import { reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import useInitMap from '@/plugin/useInitMap';

export default {
  props: ['id'],
  setup(props, { emit }){
    let { map } = useInitMap({ domId: props.id, center: [116.39, 39.9] });
    return {
      id: props.id
    };
  }
}
</script>
<template>
  <div :id="id || 'little-map'" class="inside-map"></div>
</template>
<style lang="scss" scoped>
.inside-map {
  width: 100%;
  height: 100%;
}

</style>