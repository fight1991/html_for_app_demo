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
  <div class="box">
    <div class="form-container">
      <div class="title none">工业企业智改数转诊断管理平台</div>
      
      <div class="form-part">
        <div class="login-type">
          <div class="password-title">账号密码登录</div>
        </div>
        <van-form @submit="onSubmit">
        <van-cell-group :border="false">
          <van-field
           class="form-item"
            v-model="username"
            :border="false"
            name="用户名"
            placeholder="账号"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            class="form-item"
            v-model="password"
            type="password"
            :border="false"
            name="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div class="btn-box">
          <van-button block style="background-color:#334489;color:#fff" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.box {
  height: 100%;
  background: url("../assets/login_bg.png") no-repeat center;
  background-size:cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
} 
.btn-box {
  margin-top: 40px;
}
.form-part {
  width: 60%;
  margin: 0 auto;
}
.form-container {
  width: 100%;
}
.password-title {
  height: 40px;
  line-height: 40px;
  display: inline-block;
  border-bottom: 1px solid #464C5B;
  transform: translateY(1px);
}
.login-type {
  font-size: 19px;
  font-weight: bold;
  color: #464C5B;
  border-bottom: 1px solid #E0E0E0;
  margin-bottom: 30px;
}
.form-item {
  padding-left: 5px;
  padding-right: 5px;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  margin-bottom: 20px;
}
.title {
  font-size: 40px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #334489;
  text-align: center;
  margin-bottom: 60px;
}
@media screen and (max-width: 768px) {
  .none {
    display: none;
    margin-bottom: 0;
  }
}
</style>
  