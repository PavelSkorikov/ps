<template>
  <section class="about bg-grey-10">
    <div class="row justify-center">
      <div class="col-9 q-pa-xs">
        <div class="about__title text-white">
          обо мне
          <div class="about__title-line"></div>
        </div>
      </div>
    </div>
    <div class="row justify-center about__main">
      <div class="col-xs-12 col-md-9 q-pa-xs">
        <div class="row q-gutter-xl">
          <div class="col-xs-12 col-lg-4">
            <q-card class="about__card">
              <img src="@/assets/images/my.jpg"/>
              <q-card-section>
                <q-btn
                  fab
                  color="primary"
                  icon="mail"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%);"
                />
                <div class="row no-wrap items-center">
                  <div class="col text-h6 ellipsis">
                    Павел Скориков
                  </div>
                  <div
                    class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                  ></div>
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1">
                  Образование
                </div>
                <div class="text-caption text-grey">
                  Окончил Новочеркасский государственный технический университет
                  (НГТУ) по специальности "Промышленная электроника"
                </div>
                <div class="text-subtitle1">
                  Работа
                </div>
                <div class="text-caption text-grey">
                  Участвовал в разработке корпоративного портала дистанционного
                  обучения в области информационной безопасности.
                </div>
                <div class="text-caption text-grey">
                  Разрабатывал на языке Python скрипты автоматизации.
                </div>
                <div class="text-caption text-grey">
                  Разработка парссеров и чат-ботов.
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-xs-12 col-lg-7">
            <q-linear-progress
              v-for="progress in progresses"
              :key="progress"
              size="25px"
              :value="progress.percent"
              color="red-10"
              track-color="white"
              class="about__progress"
            >
              <div
                class="absolute-full flex content-center text-h6 text-white q-pa-sm"
              >
                {{ progress.label }}
              </div>
              <div class="absolute-full flex flex-center">
                <q-badge
                  outline
                  text-color="white"
                  :label="(progress.percent * 100).toFixed(2) + '%'"
                />
              </div>
            </q-linear-progress>

            <q-carousel arrows animated v-model="slide" height="500px" control-text-color="black">
              <q-carousel-slide
                v-for="slide in slides"
                :key="slide"
                :name="slide.name"
                :img-src="slide.url"
              >
              </q-carousel-slide>
            </q-carousel>
          </div>
        </div>
      </div>
    </div>
    <div class="row bg-red-10 justify-center">
      <div class="col-9">
        <div class="row items-center">
          <div
            v-for="skill in skills"
            :key="skill"
            class="col-xs-12 col-md-3 q-pa-xs text-white column items-center"
            style="font-size: 4em"
          >
            <q-icon :name="skill.icon"></q-icon>
            <div class="text-h6">{{ skill.title }}</div>
            <div class="text-subtitle2" style="text-align: center;">
              {{ skill.note }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      slide: 'slide1',
      slides: [
        {
          name: 'slide1',
          url: 'https://stepik.org/certificate/500d9dd95a9adc63efd85ad088bf7fb92a864c18.png'
        },
        {
          name: 'slide2',
          url: 'https://stepik.org/certificate/7f5c6f9aff6e44749af58b18e117dc4c0cd114ee.png'
        },
        {
          name: 'slide3',
          url: 'https://stepik.org/certificate/fadfee53327713365ef571ab22ef5a3e912e51d1.png'
        },
        {
          name: 'slide4',
          url: 'https://stepik.org/certificate/34cc7c8f24026dd32a4015402f5330a75c2de675.png'
        },
        {
          name: 'slide5',
          url: 'https://stepik.org/certificate/c1bbe1e76a49bf01e68dead3c5321d27ac8ed98e.png'
        },

      ],
      progresses: [
        {
          label: "HTML, PUG",
          percent: 0.8
        },
        {
          label: "CSS, SCSS",
          percent: 0.7
        },
        {
          label: "BOOTSTRAP4, QUASAR",
          percent: 0.9
        },
        {
          label: "JS, ES6",
          percent: 0.7
        },
        {
          label: "Vue.js, Vuex, Vue-router",
          percent: 0.8
        },
        {
          label: "Node.js, Koa.js",
          percent: 0.8
        },
        {
          label: "Python, Django",
          percent: 0.7
        },
        {
          label: "WORDPRESS REST API",
          percent: 0.4
        },
        {
          label: "SQL БД",
          percent: 0.7
        },
      ],
      skills: [
        {
          icon: "network_check",
          title: "БЫСТРО",
          note:
            "Быстрое время загрузки и отсутствие задержек при взаимодействии - мой главный приоритет"
        },
        {
          icon: "devices",
          title: "ОТЗЫВЧИВЫЙ",
          note:
            "Мои макеты будут работать на любом устройстве, большом или маленьком"
        },
        {
          icon: "flare",
          title: "ИНТУИТИВНЫЙ",
          note:
            "Наибольшие предпочтения для простого в использовании, интуитивно понятного UX / UI"
        },
        {
          icon: "directions_run",
          title: "ДИНАМИЧЕСКИЙ",
          note:
            "Веб-сайты не должны быть статичными, я люблю делать страницы живыми"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.about {
  padding-top: 100px;
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
    @media (max-width: 900px) {
      font-size: 36px;
    }
  }
  &__title-line {
    width: 100%;
    height: 10px;
    background-color: white;
  }
  &__main {
    padding-bottom: 50px;
  }
  &__progress {
    margin-bottom: 20px;
  }
}
.custom-caption{
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}
</style>
