<template>
    <div>
        <v-app-bar app clipped-left width="100%" :style="'z-index:999'" color="white">
            <v-container class="d-flex align-center ">
                <v-btn icon small v-if="$vuetify.breakpoint.smAndDown" @click="drawer = true">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
                <div class="mx-auto justify-start d-flex align-center">
                    <v-img contain src="@/assets/celoc.svg"></v-img>
                </div>
                <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
                <div class=" d-flex align-center" v-if="$vuetify.breakpoint.mdAndUp">
                    <div class="mx-2 pointer" v-for="item in items" :key="item">
                        <span @click="navigate(item.name)">{{ item.title }}</span>
                    </div>
                </div>
                <div class="d-none d-sm-flex">
                    <v-btn elevation="2" class="mr-3 white--text" color="#1f4643" medium> SIGN UP</v-btn>
                    <v-btn elevation="2" class=" #1f4643--text" outlined medium> LOGIN</v-btn>
                </div>
            </v-container>
        </v-app-bar>
        <v-navigation-drawer app clipped temporary v-model="drawer" width="100%" class="mt-11" color="#1f4643">
            <v-list nav dense>
                <v-list-item-group v-model="group">
                    <v-list-item class="white--text">
                        <v-list-item-title><router-link style="text-decoration: none; color: inherit;"
                                :to="{ name: 'home' }">Home</router-link></v-list-item-title>
                    </v-list-item>
                    <v-list-item class="white--text">
                        <v-list-item-title><router-link style="text-decoration: none; color: inherit;"
                                :to="{ name: 'howItWorks' }">HOW IT WORKS</router-link></v-list-item-title>
                    </v-list-item>
                    <v-list-item class="white--text">
                        <v-list-item-title><router-link style="text-decoration: none; color: inherit;"
                                :to="{ name: 'becomePartner' }">HOW IT WORKS</router-link></v-list-item-title>
                    </v-list-item>
                    <v-list-item class="white--text">
                        <v-list-item-title>ABOUT US</v-list-item-title>
                    </v-list-item>
                    <v-list-item class="white--text">
                        <v-list-item-title>Account</v-list-item-title>
                    </v-list-item>
                    <div>
                        <v-btn elevation="2" class="mx-2 #1f4643--text" small> REGISTER NOW</v-btn>
                        <v-btn elevation="2" class="white--text " outlined small> LOGIN</v-btn>
                    </div>
                </v-list-item-group>
            </v-list>
            <v-btn absolute top right elevation="none" class="close white--text" color="#1f4643"
                @click="drawer = false">
                <v-icon color="white">mdi-close</v-icon>
            </v-btn>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    name: 'navBar',
    data: () => ({
        //
        drawer: false,
        group: null,
        items: [
            { title: 'HOME', name: "home" }, { title: 'HOW IT WORKS', name: "howItWorks" }, { title: 'BECOME A PARTNER', name: "becomePartner" }, { title: 'ABOUT US' },
        ],
    }),
    methods: {
        navigate(name) {
            if (this.$route.name !== name) {
                this.$router.push({ name: name })
            }
        }
    }
}
</script>
<style scoped>
.pointer {
    cursor: pointer;
}

.pointer:hover {
    background-color: #1f4643;
    color: white;
    padding: 7px 7px;
}
</style>