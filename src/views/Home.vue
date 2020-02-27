<template>
  <q-page>
    <Experience />
    <Portfolio />
    <About />
    <Contact />
    <Footer/>
  </q-page>
</template>

<script>
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Experience,
    Portfolio,
    About,
    Contact,
    Footer
  }
};
</script>
