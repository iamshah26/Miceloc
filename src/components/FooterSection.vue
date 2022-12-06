<template>
    <div>
        <v-footer color="#1f4643 " class=" white--text ">
            <v-container class="pt-15 mt-10">
                <v-row>
                    <v-col cols="12" md="6">
                        <p class="font-weight-regular headline "> <span class="font-weight-bold"> MICE</span>LOC</p>
                        <p>We aim to become the ultimate, contemporary search engine for hotels and venues across the
                            globe.</p>
                        <p>Changing times have transformed the event planning landscape. Nowadays, people are searching
                            for ways
                            to save time and money. Digital innovation, coupled with a user-friendly approach that
                            encourages direct
                            contact, is the answer.</p>
                        <v-btn elevation color="transparent">
                            <v-icon color="white" large>mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn elevation color="transparent">
                            <v-icon color="white" large>mdi-instagram</v-icon>
                        </v-btn>
                        <v-btn elevation color="transparent">
                            <v-icon color="white" large>mdi-linkedin</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <h1 class="font-weight-light">Quick access</h1>
                        <p>Home</p>
                        <p>How it works</p>
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>Become a partner</p>
                        <p>Partner Login</p>

                    </v-col>
                    <v-col cols="12" sm="6" md="3">

                        <h1 class="font-weight-light"> Contact Us</h1>
                        <p>
                            <v-icon color="white" class="">mdi-email-outline</v-icon>saina@miceloc.com
                        </p>
                        <p>
                            <v-icon color="white">mdi-phone</v-icon>+49 152 04902376
                        </p>
                        <p>
                            <v-icon color="white">mdi-map-marker-outline</v-icon>MICELOC GmbH
                        </p>
                        <p class="ms-4">Landshuter Allee 39, 80637 Munich, <br>
                            Germany</p>
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
        <v-footer color="#0b2b29" class="white--text">
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="6">
                        <p>MICELOC © 2021 • All rights reserved</p>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                        <p>Privacy Policy • Terms and Conditions</p>
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </div>
</template>
<script>
export default {
    name: 'FooterSection'
}
</script>
<style>

</style>