<template>
  <q-page>
    <Experience />
    <Portfolio />
    <About />
  </q-page>
</template>

<script>
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import About from "../components/About"

export default {
  name: "Home",
  components: {
    Experience,
    Portfolio,
    About
  }
};
</script>
<style lang="scss" scoped>
  .bl{

  }
</style>
