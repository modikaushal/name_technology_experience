<template>
  <v-container>
    <v-row no-gutters class="primary base" justify="center">
      <v-list three-line class="pa-0 ma-0 primary base" flat>
        <p>
          <v-text-field
            class="mt-3"
            outlined
            label="Search by name"
            append-icon="search"
            color="white"
            v-model="searchkey"
          ></v-text-field>
        </p>
        <v-card
          class="my-2"
          max-width="400"
          height="70"
          tiles
          v-for="item in userData"
          :key="item.id"
          :to="'/about/' + item.id"
        >
          <template>
            <v-list-item max-height="50">
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="ma-0 pa-0">
                  <v-badge dot color="success" class="ml-2 mb-1" />
                  <span class="ml-2 secondary--text text--base text-h6">
                    {{ item.first_name | filterName(item.last_name) }}
                  </span>
                  <span
                    class="
                      mt-1
                      text-caption
                      float-end
                      secondary--text
                      text--lighten2
                    "
                    justify="end"
                  >
                    11:13AM
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle
                  class="ml-1 mb-6 ma-0 pa-0 secondary--text text--lighten1"
                  v-html="item.email"
                />
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-card>
      </v-list>
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
export default class Home extends Vue {
  userApi = User;
  searchkey = "";

  get userData() {
    if (this.searchkey) {
      const resources = this.userApi.userData;
      return resources.filter((item: any) => {
        return this.searchkey
          .toLowerCase()
          .split(" ")
          .every(v => item.first_name.toLowerCase().includes(v) || item.last_name.toLowerCase().includes(v))
      });
    }
    return this.userApi.userData;
  }

  mounted() {
    this.userApi.getUseData(20);
  }
}
</script>
