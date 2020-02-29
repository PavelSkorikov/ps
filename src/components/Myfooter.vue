<template>
  <footer bordered class="bg-black text-white">
    <q-tabs
      active-color="red-10"
      indicator-color="transparent"
      class="text-grey"
    >
      <q-tab name="mail" icon="mail" @click="sendmail" class="q-gutter-xs" />
      <a href="https://vk.com/skorikov1975" target="_blank">
        <q-tab name="vk" icon="img:/images/vk16.ico" class="q-gutter-xs" />
      </a>
      <a href="https://web.facebook.com/p.skorikov" target="_blank">
        <q-tab name="fb" icon="img:/images/fb.svg" class="q-gutter-xs" />
      </a>
       <a href="https://github.com/PavelSkorikov?tab=repositories" target="_blank">
        <q-tab name="github" icon="img:/images/github.ico" class="q-gutter-xs" />
      </a>
      <a href="skype:spg75_2" target="_blank">
        <q-tab name="github" icon="img:/images/skype.ico" class="q-gutter-xs" />
      </a>
      <a href="tg://resolve?domain=Pavel_Skorikov" target="_blank">
        <q-tab name="github" icon="img:/images/telegram.ico" class="q-gutter-xs" />
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
