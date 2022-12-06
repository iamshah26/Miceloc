<template>
    <v-img src="@/assets/b277de3.jpg">
        <div class="text-center mt-15 white--text ">
            <p class="font-weight-light">
                <span class="font-weight-black">M</span>EETINGS
                <span class="font-weight-black">I</span>NCENTIVES
                <span class="font-weight-black">C</span>ONVENTION
                <span class="font-weight-black">E</span>VENTS
            </p>
            <div class="headline">
                <h1 class=" font-weight-medium white--text  ">Hotels & Venues <span class="font-weight-light "> Under
                        one
                        roof </span>
                </h1>
            </div>
            <div class="mt-16">
                <v-tabs centered slider-color="white" background-color="transparent">
                    <v-tab class="white--text headline">ALL</v-tab>
                    <v-tab class="white--text headline">HOTELS</v-tab>
                    <v-tab class="white--text headline">VENUES</v-tab>
                </v-tabs>
            </div>
            <div class=" pa-6">
                <v-text-field solo label="Search for hotel, vunue, city or country" prepend-inner-icon="mdi-magnify">
                </v-text-field>
            </div>
        </div>
    </v-img>
</template>
<script>
export default {
    name: 'HomeHerSection'
}
</script>
<style>

</style>