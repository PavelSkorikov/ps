<template>
  <q-header elevated>
    <q-toolbar class="row no-wrap glossy bg-black fixed">
      <q-btn icon="menu" class="lt-sm" style="font-size: 1em">
        <q-menu
          transition-show="scale"
          transition-hide="scale"
          icon="menu"
          content-class="bg-black text-white"
          auto-close
        >
          <q-list>
            <q-item v-for="item in menu" :key="item" clickable v-close-popup>
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
        <q-tab
          v-for="item in menu"
          :key="item"
          :name="item.name"
          :label="item.label"
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
        { name: "experience", label: "Чем я занимаюсь", to: "" },
        { name: "portfolio", label: "Портфолио", to: "" },
        { name: "about", label: "Обо мне" },
        { name: "contacts", label: "контакты" }
      ]
    };
  }
};
</script>
