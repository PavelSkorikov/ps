<template>
  <footer class="row justify-center bg-grey-10 contact">
    <div class="col-9">
      <div class="contact__title">
        мои контакты
        <div class="contact__title-line"></div>
      </div>
      <div class="row justify-center">
        <div class="col-6">
          <div class="text-h6 text-white q-pa-lg">Есть вопрос или желание вместе поработать?</div>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-field outlined dark label="Имя" v-model="name">
              
            </q-field>
          </q-form>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Contact",
  data () {
    return {
      name: "",
    }
  }
};
</script>
<style lang="scss" scoped>
.contact {
  padding: 50px 0 50px 0;
  @media (max-width: 900px) {
    padding: 20px 0 20px 0;
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
