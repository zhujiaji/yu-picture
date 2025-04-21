<template>
  <div id="globalHeader">
    <a-row :wrap="false">
      <a-col flex="200px">
        <router-link to="/">
          <div class="title-bar">
            <img class="logo" src="../assets/logo.png" alt="logo">
            <div class="title">鱼皮云图库</div>
          </div>
        </router-link>
      </a-col>
      <a-col flex="auto">
        <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="doMenuClick"/>
      </a-col>
      <a-col>
        <div class="user-login-status">
          <div v-if="loginUserStore.loginUser.id">
            {{ loginUserStore.loginUser.username?? '无名'}}
          </div>
          <div v-else>
            <a-button type="primary" href="/user/login">登录</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>

</template>
<script lang="ts" setup>
import { h, ref } from 'vue';
import {HomeOutlined} from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
import { useRouter } from 'vue-router'
import { useLoginUserStore } from '@/stores/useLoginUserStore.ts'

const loginUserStore = useLoginUserStore()
loginUserStore.fetchLoginUser()

const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/about',
    label: '关于',
    title: '关于',
  },
  {
    key: 'others',
    label: h('a', { href: 'https://www.yuque.com/huifeideqie-loh6o', target: '_blank' }, '嚼绿箭的朱七'),
    title: '嚼绿箭的朱七',
  }
]);
const router = useRouter();
//
const current = ref<string[]>([]);
router.afterEach((to, from , next) => {
  current.value = [to.path];
});
// 路由跳转事件
const doMenuClick = ({ key }) => {
  router.push({
    path: key
  });
}

</script>
<style scoped>
#globalHeader .title-bar {
  display: flex;
  align-items: center;
  background: #efefef;
}
.logo {
  height: 48px;
}
.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}
</style>
