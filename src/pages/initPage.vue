<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
export default {
  setup(){
    const username = ref('');
    const password = ref('');
    const router = useRouter();
    const onSubmit = (values) => {
      router.push('/task');
    };

    return {
      username,
      password,
      onSubmit,
    };
  }
}
</script>
<template>
<div>
  我是初始化页面
</div>
</template>
<style lang="less" scoped>

</style>
  