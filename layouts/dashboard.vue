<template>
  <v-app>

    <v-main>


      <v-container>
        <v-app-bar absolute color="primary" dark scroll-target="#scrolling-techniques-6">


          <v-toolbar-title>Casa Inteligênte</v-toolbar-title>

          <v-spacer></v-spacer>
        </v-app-bar>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style lang="scss">
@import '~vuetify/src/styles/styles.sass';


</style>
