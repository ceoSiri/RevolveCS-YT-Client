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
          <!-- <v-card-title class="pb-0">
            Sign In
            <hr />
          </v-card-title> -->
          <v-card-text>
            <!-- <v-form> -->
            <!-- <v-card> -->
              <!-- <v-card-text> -->
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
              <!-- </v-card-text> -->
            <!-- </v-card> -->
            <!-- <v-text-field
                                
                                
                          
                                label="Email"
                                prepend-icon="mdi-email"
                        />
                        <v-text-field
                                
                                type="password"
                                label="Password"
                                prepend-icon="mdi-lock"
            />-->
            <!-- </v-form> -->
            <v-alert v-if="signinError" dense type="error">Details are incorrect</v-alert>
            <!-- <p style="font-size: 14px" @click="$emit('changeSignUp', 'signUp')" class="ma-0 pa-0 toggle">Need an -->
            <!-- account? Sign Up</p> -->
          </v-card-text>
          <!-- <v-divider></v-divider> -->
          <!-- <v-card-actions> -->
          <!-- <v-btn @click="login" dark color="grey">Login</v-btn> -->
          <!-- </v-card-actions> -->
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
