<script>
import { reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
export default {
   setup(props, { emit }){
    const router = useRouter();
    // 下一页
    const next = (values) => {
    };

    return {
      next,
    };
  }
}
</script>
<template>
  <div class="content-box">
    我是mine
  </div>
</template>
<style lang="scss" scoped>

</style>