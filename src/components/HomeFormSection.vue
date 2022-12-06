<template>
    <div class="contact-section">
        <v-container>
            <v-card elevation="4" class="pa-15 ">
                <v-row>
                    <v-col cols="12" sm="6" md="6" class="headline">
                        <h2>Any questions?</h2>
                        <p class="font-weight-light mt-5">Reach out to us if you have any inquiries about MICELOC, want
                            to get
                            started or learn more and we will
                            get back to you.</p>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">

                        <v-form ref="form"  lazy-validation>
                            <v-row>
                                <v-col col="6">
                                    <v-text-field label="First Name" required></v-text-field>
                                </v-col>
                                <v-col col="6">
                                    <v-text-field  label="last Name"
                                        required></v-text-field>
                                </v-col>

                            </v-row>
                            <v-row>
                                <v-col col="6">
                                    <v-text-field  label="E-mail"
                                        required></v-text-field>
                                </v-col>
                                <v-col col="6">
                                    <v-text-field  label="phone"
                                        required></v-text-field>
                                </v-col>

                            </v-row>
                            <v-text-field label="Message" required></v-text-field>
                            <v-btn color="#1f4643" class="mr-4 white--text  " absolute right >
                                Submit
                            </v-btn>
                        </v-form>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'HomeFormSection'
}
</script>
<style scoped>
.contact-section {
    position: relative;
    top: 100px;
    z-index: 9;
}
</style>