<!--写页面结构-->
<template>
  <div class="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader/>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://www.yuque.com/huifeideqie-loh6o" target="_blank">
          鱼图库 by 嚼绿箭的朱七
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<!--写脚本的-->
<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
</script>

<style scoped>
.header {
  background: #efefef;
}
#basicLayout .header {
  background: white;
  color: unset;
  margin-bottom: 16px;
  padding-inline: 20px;

}
#basicLayout .content {
  padding: 20px;
  background: linear-gradient(to right, #fefefe, #fff);
  margin-bottom: 28px;
}
#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
