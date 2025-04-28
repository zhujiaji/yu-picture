import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getLoginUserUsingPost } from '@/api/userController.ts'

export const useLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<API.LoginUserVO>({
    userName: '未登录',
  })

  /**
   * 远程获取用户
   */
  async function fetchLoginUser() {
    const res = await getLoginUserUsingPost()
    if (res.data.code === 0 && res.data.data) {
      loginUser.value = res.data.data
    }
    // // 测试用户登录，3 秒后自动登录
    // setTimeout(() => {
    //   loginUser.value = { userName: '测试用户', id: 1 }
    // }, 3000)
    // setTimeout(() => {
    //   loginUser.value = {
    //     userName: "测试用户", id:1
    //   };
    // }, 3000);
  }

  /**
   * 设置登录用户
   * @param newLoginUser
   */
  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser
  }
  return { loginUser, setLoginUser, fetchLoginUser }
})
