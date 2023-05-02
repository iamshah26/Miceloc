<template>
  <div>
    <HomeHerSection />
    <HomeCardSection />
    <HomeFormSection />
    <FooterSection />
  </div>
</template>
<script>
const HomeHerSection = () =>
  import(
    /* webpackChunkName: "HomeHerSection" */ '@/components/HomeHerSection.vue'
  );
  const HomeCardSection = () =>
  import(
    /* webpackChunkName: "HomeCardSection" */ '@/components/HomeCardSection.vue'
  );
  const HomeFormSection = () =>
  import(
    /* webpackChunkName: "HomeFormSection" */ '@/components/HomeFormSection.vue'
  );
  const FooterSection = () =>
  import(
    /* webpackChunkName: "FooterSection" */ '@/components/FooterSection.vue'
  );

export default {
  name: 'HomeView',
  components: {
    HomeHerSection,
    HomeCardSection,
    HomeFormSection,
    FooterSection
  },
  // data: () => ({
  //   valid: false,
  //   firstname: '',
  //   lastname: '',
  //   nameRules: [
  //     v => !!v || 'Name is required',

  //   ],
  //   email: '',
  //   emailRules: [
  //     v => !!v || 'E-mail is required',
  //     v => /.+@.+/.test(v) || 'E-mail must be valid',
  //   ],
  //   phone: '',
  //   phoneRules: [
  //     v => !!v || 'number is required',
  //     v => /.+0.+/.test(v) || 'number must be valid',
  //   ],
  // }),
}
</script>
<style scoped>
</style>