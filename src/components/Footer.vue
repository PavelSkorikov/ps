<template>
  <footer bordered class="bg-black text-white">
    <q-tabs
      no-caps
      active-color="red-10"
      indicator-color="transparent"
      class="text-grey"
    >
      <q-tab name="mail" icon="mail" @click="sendmail" />
      <a href="https://vk.com/skorikov1975" target="_blank">
        <q-tab name="vk" icon="img:/images/vk16.ico" />
      </a>
      <a href="https://web.facebook.com/p.skorikov" target="_blank">
        <q-tab name="fb" icon="img:/images/fb.svg" />
      </a>
       <a href="https://github.com/PavelSkorikov?tab=repositories" target="_blank">
        <q-tab name="github" icon="img:/images/github.ico" />
      </a>
    </q-tabs>
    <div class="row justify-center">
      <div class="col-xs-12 col-md-3" style="text-align: center;">
        © 2020 by Pavel Skorikov
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  methods: {
    sendmail() {
      window.open("mailto:spg75@yandex.ru");
    }
  }
};
</script>
<style lang="scss" scoped></style>
