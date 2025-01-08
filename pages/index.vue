<template>
  Home
  <button @click="onClick1">getMenus</button>
  <button @click="onClick2">getUserInfo</button>
  <h1>{{ userInfo }}</h1>
  <ul>
    <li v-for="menu of menus">
      {{  menu.navName }}
    </li>
  </ul>
</template>
<script setup lang="ts">
const { data: userInfo, refresh: getUserInfo} = useFetch('http://localhost:5000/userinfo')
const { data, refresh } = useFetch('http://localhost:5000/menus')
const menus = computed( () => data.value?.data.parent)
const onClick1 = () => {
  refresh()
}
const onClick2 = () => {
  getUserInfo()
}
</script>