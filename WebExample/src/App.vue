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
              color="blue-grey"
              class="ma-2 ml-12 white--text"
              @click="test"
            >
              <v-icon left dark>mdi-google</v-icon>
Sign In With Google
            </v-btn>            
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
  methods: {
    test() {
     /*
 * Create form to request access token from Google's OAuth 2.0 server.
 */

  // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {'client_id': process.env.VUE_APP_CLIENT_ID,
                'redirect_uri': 'http://youtube-client-revolvecs.s3-website.eu-west-2.amazonaws.com',
                'response_type': 'token',
                'scope': 'https://www.googleapis.com/auth/youtube.readonly',
                'include_granted_scopes': 'true',
                'state': 'pass-through value'};

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();

    
  },
  data: () => ({
    loading3: false,
  })
},
mounted() {
    console.log("HAi")
    console.log(process.env.VUE_APP_CLIENT_ID)
    
  }
}
</script>
