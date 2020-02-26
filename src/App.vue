<template>
  <q-layout>
    <Header />
    <img
      style="width: 100%; height: auto; opacity: 0.9; vertical-align:bottom;"
      class="flex-auto"
      src="./assets/images/header-bg.jpg"
      alt=""
    />
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "LayoutDefault",
  components: { Header }
};
</script>

