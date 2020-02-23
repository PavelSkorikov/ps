<template>
  <div class="row bg-red-10 justify-center experience">
    <div class="col-md-12 col-lg-3 col-xs-12 title">
      Мои навыки
      <div class="title__line"></div>
    </div>
    <q-list class="col-lg-3 col-sm-6 col-xs-12">
      <q-item>
        <q-item-section avatar>
          <q-icon color="white" name="devices" style="font-size: 6em"></q-icon>
        </q-item-section>
        <q-item-section class="text-white">
          Адаптивная, отзывчивая, кроссбраузерная верстка сайтов, лендингов, веб - приложений.
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section avatar>
          <q-icon color="white" name="developer_board" style="font-size: 6em"></q-icon>
        </q-item-section>
        <q-item-section class="text-white">
          Frontend разработка SPA, PWA, SSR приложений с использованием современных фреймворков и библиотек программирования.
        </q-item-section>
      </q-item>
    </q-list>
    <q-list class="col-lg-3 col-sm-6 col-xs-12">
      <q-item>
        <q-item-section avatar>
          <q-icon color="white" name="settings_applications" style="font-size: 6em"></q-icon>
        </q-item-section>
        <q-item-section class="text-white">
          Разработка бэкенда на стороне сервера с использованием CMS Wordpress, Firebase, Node.js, Djando REST API.
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section avatar>
          <q-icon color="white" name="backup" style="font-size: 6em"></q-icon>
        </q-item-section>
        <q-item-section class="text-white">
          Размещение и настройка готового Web - сайта, приложения на хостинге VPS, VDS
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: "Experience"
};
</script>

<style lang="scss" scoped>
.experience {
  padding: 50px 0 50px 0;
}
.title {
  padding: 0 10px 0 10px;
  color: white;
  font-size: 72px;
  line-height: 60px;
  font-weight: 700;
  text-transform: uppercase;
  @media (max-width: 900px) {
    font-size: 36px;
  }
  &__line {
    width: 100%;
    height: 10px;
    background-color: #ffffff;
  }
}
</style>
