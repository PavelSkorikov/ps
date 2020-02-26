<template>
  <q-page>
    <Experience />
    <Portfolio />
    <About />
    <Contact />
  </q-page>
</template>

<script>
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";

export default {
  name: "Home",
  components: {
    Experience,
    Portfolio,
    About,
    Contact
  }
};
</script>
<style lang="scss" scoped>
  .bl{

  }
</style>
