<template>
  <q-layout>
    <Header />
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

