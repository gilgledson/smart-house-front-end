<template>
<v-container fill-height fluid>
  <v-row align="center"
      justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-row justify="center">
        <v-col cols="12">
              <v-card
              elevation="3"
              class="login-card"
              align="center"
              justify="center"
            >

            </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: 'authenticated'
}
</script>
<style scoped>

</style>
