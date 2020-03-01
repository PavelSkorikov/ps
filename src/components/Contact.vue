<template>
  <section>
    <div class="row justify-center bg-grey-10 contact">
      <a name="contact"></a>
      <div class="col-9">
        <div class="contact__title">
          мои контакты
          <div class="contact__title-line"></div>
        </div>
        <div class="row justify-center">
          <div class="col-xs-12 col-md-6">
            <div
              class="text-h6 text-white"
              style="text-align: center; margin-bottom:40px;"
            >
              Есть вопрос или желание вместе поработать?
            </div>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                filled
                color="red-10"
                v-model="name"
                dark
                label="Имя"
                lazy-rules
                :rules="[
                  val =>
                    (val && val.length > 0) || 'Пожалуйста введите Ваше имя',
                  val => val.length <= 10 || 'доступно максимум 10 символов'
                ]"
              />
              <q-input
                filled
                color="red-10"
                v-model="email"
                type="email"
                dark
                label="Email"
                :rules="[
                  val => (val && val.length > 0) || 'Пожалуйста введите E-mail',
                  val => val.length <= 20 || 'доступно максимум 20 символов'
                ]"
              />
              <q-input
                filled
                color="red-10"
                v-model="message"
                type="textarea"
                dark
                label="Ваше сообщение"
                :rules="[
                  val =>
                    (val && val.length > 0) ||
                    'Пожалуйста введите текст сообщения',
                  val => val.length <= 40 || 'доступно максимум 40 символов'
                ]"
              />
              <q-btn
                label="Отправить"
                type="submit"
                icon-right="send"
                glossy
                color="red-10"
              />
              <q-btn
                label="Сброс"
                type="reset"
                color="white"
                flat
                class="q-ml-sm"
              />
            </q-form>
          </div>
        </div>
      </div>
    </div>
    <Myfooter />
  </section>
</template>
<script>
import Myfooter from "../components/Myfooter";
export default {
  name: "Contact",
  components: { Myfooter },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  methods: {
    onReset() {
      this.name = null;
      this.email = null;
      this.message = null;
      this.$q.notify({
        message: "Данные очищены",
        color: "red-10"
      });
    },
    async onSubmit() {
      let request =
        "https://sms.ru/sms/send?api_id=" +
        process.env.VUE_APP_SMS +
        "&to=" +
        process.env.VUE_APP_PHONE +
        "&msg=" +
        this.name +
        " " +
        this.email +
        " " +
        this.message +
        "&json=1";
      let answer = await fetch(request, { mode: "no-cors" });
      if (answer.status == "0") {
        this.$q.notify({
          message: "Сообщение доставлено",
          color: "green"
        });
      } else {
        this.$q.notify({
          message: "Ошибка доставки" + answer.status,
          color: "red-10"
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.contact {
  padding: 100px 0 100px 0;
  @media (max-width: 600px) {
    padding: 50px 0 50px 0;
  }
  &__title {
    max-width: 370px;
    color: white;
    font-size: 52px;
    line-height: 50px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 50px;
    @media (max-width: 900px) {
      font-size: 36px;
    }
  }
  &__title-line {
    width: 100%;
    height: 10px;
    background-color: #ffffff;
  }
}
</style>
