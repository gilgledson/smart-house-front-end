<template>
  <v-app>
    <v-container fluid pa-0>
      <v-row align="center" justify="center" style="height:100vh" dense>
        <v-col class=" primary fill-height d-flex flex-column justify-center align-center">
          <v-card flat tile>
            <v-card elevation="3" min-height="350" class="login-card mx-auto">
              <v-row>
                <v-col justify="center" align="center">
                  <v-img height="60" width="60" :src="require(`~/assets/images/smart-house.png`)"></v-img>
                </v-col>
              </v-row>
              <v-container class="p-6" justify="center" align="center">
                <v-row>
                  <v-col>
                    <v-text-field label="E-mail"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field label="Senha"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-btn block color="primary">
                      ENTRAR
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: 'login',
}
</script>
<style lang="scss">
@import './scss/style.scss';
</style>
