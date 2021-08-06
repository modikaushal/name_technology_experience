<template>
  <v-container>
    <v-row no-gutters class="primary base" justify="center">
      <v-card width="400" justify="center">
        <v-img
          height="200px"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <v-card-title class="mt-2">
            <v-btn icon color="white" to="/">
              <v-icon>arrow_back</v-icon>
            </v-btn>
          </v-card-title>
        </v-img>

        <v-card-text class="text-center">
          <p class="mt-n14">
            <v-avatar size="100">
              <img alt="user" :src="userDataByID.avatar" />
            </v-avatar>
          </p>
          <p class="ml-2 secondary--text text--base text-h6 mt-n2">
            {{ userDataByID.first_name | filterName(userDataByID.last_name) }}
          </p>
          <p class="ml-1 mb-6 ma-0 pa-0 secondary--text text--lighten1 mt-n2">
            {{ userDataByID.email }}
          </p>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import User from "@/store/modules/users";

@Component({
  filters: {
    filterName(value: any, arg1: any) {
      return value + " " + arg1;
    }
  }
})
export default class About extends Vue {
  userApi = User;

  get userDataByID() {
    return this.userApi.userData;
  }

  mounted() {
    this.userApi.getUseDataById(this.$route.params.id);
  }
}
</script>
