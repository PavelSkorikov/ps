import Vue from "vue";

import "./styles/quasar.scss";
import "quasar/dist/quasar.ie.polyfills";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import {
  Quasar,
  QLayout,
  QHeader,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QBtnToggle,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QTabs,
  QTab,
  QRouteTab,
  QMenu,
  ClosePopup,
  QCard,
  QCardSection,
  QCardActions,
  QLinearProgress,
  QBadge,
  QCarousel,
  QCarouselControl,
  QCarouselSlide
} from "quasar";

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QBtnToggle,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QTabs,
    QTab,
    QRouteTab,
    QMenu,
    QCard,
    QCardSection,
    QCardActions,
    QLinearProgress,
    QBadge,
    QCarousel,
    QCarouselControl,
    QCarouselSlide
  },
  directives: {
    ClosePopup
  },
  plugins: {}
});
