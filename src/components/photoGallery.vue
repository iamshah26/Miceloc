<template>
    <div>
        <div style="background-color: #ddd;" color="#ddd" id="PHOTOGALARY">
            <v-container>
                <v-row>
                    <v-col cols="6" md="6" sm="12">
                        <h2 class="display-1 font-weight-regular mt-12 ">Gallery</h2>
                    </v-col>
                    <v-col cols="6" md="6" sm="12">
                        <div>
                            <v-tabs class="mt-12" background-color="#ddd" left dark>
                                <v-tab class="black--text " href="#tab-1">
                                    ALL
                                </v-tab>
                                <v-tab disabled class="black--text " href="#tab-2">
                                    ROOM
                                </v-tab>
                                <v-tab class="black--text " href="#tab-3">
                                    OUTSIDE
                                </v-tab>
                                <v-tab disabled class="black--text " href="#tab-1">
                                    RESTAURANT
                                </v-tab>
                                <v-tab disabled class="black--text " href="#tab-2">
                                    SPACE
                                </v-tab>
                                <v-tab disabled class="black--text " href="#tab-3">
                                    OTHER
                                </v-tab>
                                <v-tab disabled class="black--text " href="#tab-3">
                                    NEARBY
                                </v-tab>
                            </v-tabs>
                        </div>
                    </v-col>
                </v-row>
                <!-- images -->
                <div class="mt-12 my-12">
                    <v-row class="">
                        <v-col v-for="n in 14" :key="n" class="d-flex child-flex" cols="4">
                            <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" aspect-ratio="1"
                                class="grey lighten-2 img-border">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    name: 'photoGallery',
}
</script>

<style >
.img-border {
    border-radius: 20px;
}
</style>