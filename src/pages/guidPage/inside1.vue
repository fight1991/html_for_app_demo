<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup(){
    const router = useRouter();
    const next = (values) => {
      router.push('/guid');
    };
    
    const value = ref(40);

    return {
      value,
      next,
    };
  }
}
</script>
<template>
<div class="box">
  <div class="text-box">
     <div class="text">Do you nead the</div>
      <div class="text">voice audio</div>
  </div>

</div>
</template>
<style lang="scss" scoped>
.box {
  padding-top: 51px;
  border-radius: 45px 45px 0 0;
  background-color: $primary-color;
}
.text-box {
  font-size: 35px;
  font-family: FranklinGothic URW, FranklinGothic URW-Demi;
  font-weight: Demi;
  text-align: center;
  color: #fafafa;
  letter-spacing: 0.97px;
}
</style>