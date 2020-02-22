<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar class="row no-wrap glossy bg-black fixed">
        <q-btn icon="menu" class="menu__btn">
          <q-menu flat round dense icon="menu" content-class="bg-black text-white" auto-close>
            <q-list>
              <q-item v-for="item in menu" :key="item" clickable v-close-popup>
                <q-item-section
                  style="width: 250px;
                  text-transform: uppercase;">
                  {{ item.label }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-tabs v-model="tab" class="col-xs-0 col-sm-12">
          <q-tab v-for="item in menu" :key="item" :name=item.name :label=item.label />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "LayoutDefault",

  components: {},

  data() {
    return {
      menu: [
        {name: 'about', label: 'Обо мне'},
        {name: 'services', label: 'услуги'},
        {name: 'portfolio', label: 'Портфолио'},
        {name: 'blog', label: 'блог'},
        {name: 'contacts', label: 'контакты'},
      ]
      }
  }
};
</script>
<style scoped lang="scss">
 @media (min-width: 600px) {
   .menu__btn{display: none;}
 }
</style>
