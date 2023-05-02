<template>
  <v-app>
    <navBar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>

</template>
<script>
const navBar = () =>
  import(
    /* webpackChunkName: "navBar" */ '@/components/navBar.vue'
  );
export default {
  name: 'App',
  components: {
    navBar,
  }
}
</script>
