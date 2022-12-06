<template>

    <v-card class="stickyTabBar">
            <v-container>
                <v-tabs  background-color="white" left dark>
                    <v-tabs-slider color="#1f4643"></v-tabs-slider>
                    <v-tab class="black--text  " @click="handleScroll('overview')">
                        OVERVIEW
                    </v-tab>
                    <v-tab class="black--text " @click="handleScroll('PHOTOGALARY')">
                        PHOTO GALARY
                    </v-tab>
                    <v-tab class="black--text " @click="handleScroll('NEARBY')">
                        NEARBY
                    </v-tab>
                </v-tabs>
            </v-container>
        </v-card>

</template>

<script>
export default {
    name:'tabBar',
    methods: {
        handleScroll(id) {
            this.$vuetify.goTo("#" + id, { offset: 50 });
        }
    }
}

</script>

<style scoped>
.stickyTabBar {
    position: sticky;
    top: 60px;
    z-index: 2;
}

</style>