<template>
  <v-app>
    <v-container>
      <v-app-bar app dark>
        <div class="d-flex align-center">
          <v-btn text>
            <span class="mr-2">Youtube Client</span>
          </v-btn>
        </div>

        <v-spacer></v-spacer>
      </v-app-bar>
      <v-content class="fill-height" fluid>
        <v-card width="400" style="top: 400% !important;" class="mx-auto">          
          <v-card-text>
                <v-btn
                style="left: 8%"
                  :loading="loading3"
                  :disabled="loading3"
                  color="blue-grey"
                  class="ma-2 ml-12 white--text"
                  @click="loader = 'loading3'"
                >
                <v-icon left dark>mdi-google</v-icon>
                  Sign In With Google
                  
                </v-btn>        
            <v-alert v-if="signinError" dense type="error">Details are incorrect</v-alert>            
          </v-card-text>
        </v-card>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    loading3: false,
  })
};
</script>
