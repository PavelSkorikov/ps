<template>
  <div class="row bg-red-10 justify-center experience">
    <div class="col-md-12 col-lg-3 col-xs-12 q-pa-xs">
      <div class="title">
        чем я занимаюсь
        <div class="title__line"></div>
      </div>
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
          Разработка backend логики для уже готового frontend'а, либо по подробному техническому заданию с обеспечением максимальной эффективности и производительности.
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section avatar>
          <q-icon color="white" name="backup" style="font-size: 6em"></q-icon>
        </q-item-section>
        <q-item-section class="text-white">
          Оптимизация структуры сайта для лучшей его обработки поисковыми системами, что улучшает его позиции в поисковой выдаче,   увеличивая посещаемость.
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
  @media (max-width: 900px) {
    padding: 20px 0 20px 0;
  }
}
.title {
  max-width: 370px;
  color: white;
  font-size: 52px;
  line-height: 50px;
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
