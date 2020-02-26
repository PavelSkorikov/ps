<template>
  <section class="row justify-center bg-grey-5 portfolio">
    <div class="col-xs-12 col-lg-9 q-pa-xs">
      <div class="col-xs-12 col-lg-3 q-pa-xs">
        <div class="portfolio__title">
          мои работы
          <div class="portfolio__title-line"></div>
          <q-btn-toggle
            v-model="portfolio_btn"
            push
            glossy
            toggle-color="red-10"
            :options="[
              { label: 'Все', value: 'all' },
              { label: 'Продакшн', value: 'production' },
              { label: 'Личные', value: 'my' }
            ]"
          />
        </div>
      </div>
      <div class="row justify-center">
        <div v-for="card in cards" :key="card" class="col-auto q-pa-sm">
          <q-card class="portfolio__card">
            <img :src="card.img">
            <q-card-section>
              <div class="text-h6">{{ card.title }}</div>
              <div class="text-subtitle2">{{ card.note }}</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Portfolio",
  data () {
    return {
      portfolio_btn: null,
      cards: [
        {img: "https://cdn.quasar.dev/img/mountains.jpg", title: 'Our Changing Planet', note: 'by John Doe'},
        {img: "https://cdn.quasar.dev/img/mountains.jpg", title: 'Our Changing Planet', note: 'by John Doe'},
        {img: "https://cdn.quasar.dev/img/mountains.jpg", title: 'Our Changing Planet', note: 'by John Doe'},
        {img: "https://cdn.quasar.dev/img/mountains.jpg", title: 'Our Changing Planet', note: 'by John Doe'},
        {img: "https://cdn.quasar.dev/img/mountains.jpg", title: 'Our Changing Planet', note: 'by John Doe'},
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
.portfolio {
  padding: 100px 0 100px 0;
  @media (max-width: 900px) {
    padding: 20px 0 20px 0;
  }
  &__title {
    max-width: 370px;
    padding-bottom: 30px;
    font-size: 52px;
    line-height: 60px;
    font-weight: 700;
    text-transform: uppercase;
    color: #363636;
    @media (max-width: 900px) {
      font-size: 36px;
    }
  }
  &__title-line {
    width: 100%;
    height: 10px;
    background-color: #363636;
  }
  &__card{
    max-width: 280px;
  }
}
</style>
