<template>
  <section class="about bg-grey-3">
    <div class="row justify-center">
      <div class="col-xs-12 col-lg-9 q-pa-md">
        <div class="about__title">
          обо мне
          <div class="about__title-line"></div>
        </div>
      </div>
    </div>
    <div class="row justify-center about__main">
      <div class="col-xs-12 col-md-9 q-pa-xs">
        <div class="row q-gutter-xl justify-center">
          <div class="col-xs-10 col-sm-6 col-md-6 col-lg-4">
            <q-card>
              <img src="@/assets/images/my.jpg" />
              <q-card-section>
                <q-btn
                  fab
                  color="red-10"
                  icon="mail"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%);"
                  @click="sendmail"
                />
              </q-card-section>
              <q-card-section>
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
                <div class="text-caption1 text-grey">
                  Окончил Новочеркасский государственный технический университет
                  (НГТУ) по специальности "Промышленная электроника"
                </div>
                <div class="text-caption1 text-grey">
                  Имеется университетская база по программированию на языках
                  высокого и низкого уровня (Pascal, Assembler)
                </div>
                <div class="text-subtitle1">
                  Работа
                </div>
                <div class="text-caption1 text-grey">
                  Участвовал в разработке корпоративного портала дистанционного
                  обучения в области информационной безопасности.
                </div>
                <div class="text-caption1 text-grey">
                  Разрабатывал на языке Python скрипты автоматизации.
                </div>
                <div class="text-caption1 text-grey">
                  Разработка парссеров и чат-ботов.
                </div>
                <div class="text-caption1 text-grey">
                  В настоящее время занимаюсь разработкой Web - приложений SPA
                  PWA SSR как front так и back составляющей.
                </div>
                <q-separator />
                <br />
                <a href="https://github.com/PavelSkorikov?tab=repositories"
                  ><p>Мой GitHub</p></a
                >
              </q-card-section>
            </q-card>
          </div>

          <div class="col-xs-10 col-sm-11 col-md-12 col-lg-7  justify-between">
            <q-linear-progress
              v-for="progress in progresses"
              :key="progress"
              size="25px"
              :value="progress.percent"
              color="red-10"
              track-color="grey-10  "
              class="about__progress"
            >
              <div
                class="absolute-full flex content-center text-h6 text-white q-pa-sm about__progress-string"
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
            <div class="about__carousel">
              <q-carousel
                swipeable
                animated
                infinite
                v-model="slide"
                ref="carousel"
                control-text-color="black"
                height="100%"
                width="100%"
                class="shadow-10"
              >
                <q-carousel-slide
                  v-for="slide in slides"
                  :key="slide"
                  :name="slide.name"
                  :img-src="slide.url"
                  class="fit shadow-5"
                >
                </q-carousel-slide>
                <template v-slot:control>
                  <q-carousel-control
                    position="top-right"
                    :offset="[10, 0]"
                    class="q-gutter-sm lt-xs"
                  >
                    <q-btn
                      push
                      round
                      dense
                      color="grey-2"
                      text-color="red-10"
                      icon="arrow_left"
                      @click="$refs.carousel.previous()"
                    />
                    <q-btn
                      push
                      round
                      dense
                      color="grey-2"
                      text-color="red-10"
                      icon="arrow_right"
                      @click="$refs.carousel.next()"
                    />
                  </q-carousel-control>
                </template>
              </q-carousel>
            </div>
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
            class="col-xs-12 col-sm-6 col-md-3 q-pa-xs text-white column items-center"
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
      slide: "slide1",
      slides: [
        {
          name: "slide1",
          url: "/images/1.png"
        },
        {
          name: "slide2",
          url: "/images/2.png"
        },
        {
          name: "slide3",
          url: "/images/3.png"
        },
        {
          name: "slide4",
          url: "/images/4.png"
        },
        {
          name: "slide5",
          url: "/images/5.png"
        }
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
        }
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
  },
  methods: {
    sendmail() {
      window.open("mailto:spg75@yandex.ru");
    }
  }
};
</script>
<style lang="scss" scoped>
.about {
  padding-top: 100px;
  @media (max-width: 600px) {
    padding: 50px 0 50px 0;
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
  &__main {
    padding-bottom: 50px;
  }
  &__progress {
    margin-bottom: 20px;
  }
  &__progress-string {
    @media (max-width: 600px) {
      font-size: 11px;
    }
  }
  &__carousel {
    max-width: 850px;
    height: 550px;
    @media (max-width: 760px) {
      max-width: 500px;
      height: 350px;
    }
    @media (max-width: 520px) {
      max-width: 350px;
      height: 230px;
    }
  }
}
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
