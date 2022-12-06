<template>
  <div>
    <HomeHerSection />
    <HomeCardSection />
    <HomeFormSection />
    <FooterSection />
  </div>
</template>
<script>
import HomeHerSection from '@/components/HomeHerSection.vue'
import HomeCardSection from '@/components/HomeCardSection.vue'
import HomeFormSection from '@/components/HomeFormSection.vue'
import FooterSection from '@/components/FooterSection.vue'
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