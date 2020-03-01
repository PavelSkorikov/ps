<template>
  <footer bordered class="bg-black text-white">
    <div class="row justify-center">
      <div class="col-xs-12 col-lg-6">
        <q-tabs
          narrow-indicator
          active-color="red-10"
          indicator-color="transparent"
          class="text-grey"
        >
          <q-tab name="mail" icon="mail" @click="sendmail" />
          <q-tab name="skype" icon="img:/images/skype.ico" @click="skype" />
          <q-tab name="telegram" icon="img:/images/telegram.ico" @click="telegram" />
          <q-tab name="vk" icon="img:/images/vk16.ico" @click="vk" />
          <q-tab name="fb" icon="img:/images/fb.svg" @click="fb"/>
          <q-tab name="github" icon="img:/images/github.ico" @click="github"/>
        </q-tabs>
      </div>
    </div>
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
    },
    skype() {
      window.open("skype:spg75_2");
    },
    telegram() {
      window.open("tg://resolve?domain=Pavel_Skorikov");
    },
    vk() {
      window.open("https://vk.com/skorikov1975");
    },
    fb() {
      window.open("https://web.facebook.com/p.skorikov");
    },
    github() {
      window.open("https://github.com/PavelSkorikov?tab=repositories");
    },
  }
};
</script>
<style lang="scss" scoped>
a{
  text-decoration: none;
  padding: 0;
  margin: 0;
}
</style>
