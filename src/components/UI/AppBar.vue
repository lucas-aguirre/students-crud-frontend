<template>
  <div>
    <v-app-bar elevation="1" app color="grey lighten-5">
      <v-app-bar-nav-icon @click.stop="sidebarMenu = !sidebarMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>GrupoA</v-toolbar-title>
    </v-app-bar>
    <v-app>
      <v-navigation-drawer
        v-model="sidebarMenu"
        app
        :mini-variant="mini"
        :permanent="sidebarMenu"
        class="py-3"
        color="grey lighten-5"
      >
        <v-list>
          <v-list-item-action>
            <div class="d-flex align-center">
              <v-img
                alt="GrupoA Logo"
                class="shrink mr-2"
                contain
                src="@/assets/logo.png"
                transition="scale-transition"
                :width="mini ? '50' : '80'"
              />
            </div>
          </v-list-item-action>
        </v-list>
        <router-link to="/">
          <v-list-item :class="mini ? 'px-2' : 'px-6'">
            <v-list-item-avatar>
              <v-icon>mdi-account-outline</v-icon>
            </v-list-item-avatar>
            <v-toolbar-title>Alunos</v-toolbar-title>
          </v-list-item>
        </router-link>
        <v-divider></v-divider>
      </v-navigation-drawer>

      <v-content>
        <v-container class="px-3 py-0 fill-height" fluid>
          <v-row class="fill-height">
            <v-col>
              <transition name="fade">
                <router-view></router-view>
              </transition>
            </v-col>
          </v-row>
        </v-container>
        <v-footer app color="grey lighten-5" class="py-1">
          <span class="ml-auto overline">Lucas de Melo Aguirre &copy;2020</span>
        </v-footer>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    sidebarMenu: true,
  }),

  computed: {
    mini() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return true;
        case 'sm':
          return true;
        case 'md':
          return true;
        case 'lg':
          return false;
        case 'xl':
          return false;
        default:
          return false;
      }
    },
  },
};
</script>
