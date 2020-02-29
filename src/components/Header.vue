<template>
  <q-header>
    <q-toolbar class="row no-wrap glossy bg-black fixed">
      <q-btn icon="menu" class="lt-sm" style="font-size: 1em">
        <q-menu
          transition-show="scale"
          transition-hide="scale"
          icon="menu"
          content-class="bg-black text-white"
          auto-close
          dark
        >
          <q-list>
            <q-item v-for="item in menu" :key="item" :to="item.to" clickable v-close-popup>
              <q-item-section
                style="width: 250px;
                  text-transform: uppercase;"
              >
                {{ item.label }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-tabs v-model="tab" class="gt-xs col-sm-12">
        <q-route-tab
          v-for="item in menu"
          :key="item"
          :name="item.name"
          :label="item.label"
          :to="item.to"
          indicator-color="red"
        />
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menu: [
        { name: "main", label: "Главная", to: "/" },
        { name: "portfolio", label: "Портфолио", to: "/portfolio" },
        { name: "about", label: "Обо мне", to: "/about" },
        { name: "contacts", label: "контакты", to: "/contact" }
      ]
    };
  }
};
</script>
