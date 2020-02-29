<template>
  <q-page>
    <img
      style="width: 100%; height: auto; opacity: 0.9; vertical-align:bottom;"
      class="flex-auto"
      src="../assets/images/header-bg.jpg"
      alt=""
    />
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
    Contact,
  }
};
</script>
