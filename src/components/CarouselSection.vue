<template>
    <div>
        <v-carousel v-if="$vuetify.breakpoint.mdAndUp" height="80vh">
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
            </v-carousel-item>
        </v-carousel>
        <div v-else>
            <v-img src="@/assets/b277de3.jpg" height="50vh">
                <div class="d-flex mt-2">
                    <v-btn x-small fab color="white" class="mx-2">
                        <v-icon small color="black" >
                            mdi-arrow-left
                        </v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <div>
                        <v-icon color="white" class="mx-2">
                            mdi-share-variant-outline
                        </v-icon>
                        <v-icon color="white " class="mx-2">
                            mdi-file-pdf-box
                        </v-icon>
                    </div>
                </div>
            </v-img>
        </div>
        <div class=" fixedCard " v-if="$vuetify.breakpoint.mdAndUp">
            <div class="d-flex my-3">
                <v-btn x-small fab color="white">
                    <v-icon small color="black">
                        mdi-arrow-left
                    </v-icon>
                </v-btn>
                <div class="mx-4 mt-1 white--text ">back to list</div>
            </div>
            <v-card class="fixed" max-width="600" height="350" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="text-overline font-weight-bold d-flex ">
                            HOTEL.BUSINESS.CITY
                            <div>
                                <v-rating v-model="rating" small background-color="black" color="yellow">
                                </v-rating>
                            </div>
                            <v-spacer></v-spacer>
                            <div class="">
                                <v-icon>
                                    mdi-file-pdf-box
                                </v-icon>
                                <v-icon>
                                    mdi-bookmark-outline
                                </v-icon>
                                <v-icon>
                                    mdi-share-variant
                                </v-icon>
                            </div>
                        </div>
                        <v-list-item-title class="display-1 font-weight-regular mb-1">
                            Premier Inn Lübeck City Stadtgraben
                        </v-list-item-title>
                            <div class="text-overline  d-flex ">
                             locations
                                <v-spacer></v-spacer>
                                <div class="black--text">
                                     show on map
                                </div>
                            </div>
                                <div class="font-weight-bold">
                                    Moislinger Allee 9, Luebeck, Germany
                                </div>
                            <div class="mt-3 ">
                                <v-row no-gutters cols="12">
                                    <v-col cols="4">
                                        <div class="font-weight-bold text-overline">GUEST ROOMS
                                        </div>
                                    </v-col>
                                    <v-col cols="4">
                                        <div class="font-weight-bold text-overline">
                                            MEETING SPACES</div>
                                    </v-col>
                                    <v-col cols="4">
                                        <div class="font-weight-bold text-overline">
                                            PARKING SPACES</div>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters>
                                    <v-col cols="4">
                                        <div class="font-weight-bold text-overline">0
                                        </div>
                                    </v-col>
                                    <v-col cols="4">
                                        <div class="font-weight-bold text-overline">
                                            0</div>
                                    </v-col>
                                    <v-col cols="4">
                                        <div class="font-weight-bold text-overline">
                                            0</div>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters>
                                    <v-col cols="4">
                                        <div class="font-weight-bold text-overline">EVENT SPACES
                                        </div>
                                    </v-col>
                                    <v-col cols="4">
                                        <div class="font-weight-bold text-overline">
                                            RECEPTION</div>
                                    </v-col>

                                </v-row>
                                <v-row no-gutters>
                                    <v-col cols="4">
                                        <div class="font-weight-bold text-overline">0
                                        </div>
                                    </v-col>
                                    <v-col cols="4" class="black--text font-weight-bold text-overline">
                                        <div>
                                            Available</div>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters>
                                    <v-col cols="12" class="font-weight-bold justify-end d-flex">
                                        <v-btn disabled >EXPRESS REQUEST</v-btn>
                                    </v-col>
                                </v-row>
                            </div>
                      
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </div>
        <v-container v-else>
            <div class="text-overline font-weight-bold py-4 px-0" :class="{ 'd-flex': $vuetify.breakpoint.smOnly }">
                <div>HOTEL.BUSINESS.CITY</div>
                <v-rating v-model="rating" small background-color="black" color="yellow">
                </v-rating>
            </div>
            <v-row class=" font-weight-bold " :class="{ 'd-flex': $vuetify.breakpoint.smOnly }">
                <v-col class="px-4">
                    <div class="">Premier Inn Lübeck City Stadtgraben</div>
                </v-col>
                <v-col class="px-4">
                    <div class=" text--secondary text-body-1">Moislinger Allee 9, Luebeck, Germany</div>
                </v-col>
            </v-row>
            <v-row class=" font-weight-bold ">
                <v-col class="px-4">
                    <div class=" text--secondary text-body-1">Guest Rooms</div>
                    <div class="d-flex ">
                        <v-icon color="grey">
                            mdi-bed
                        </v-icon>
                        <div class="mx-2">30</div>
                    </div>
                    <div class=" mt-4 text--secondary text-body-1">Largest Room</div>
                    <div class="d-flex">
                        <v-icon>
                            mdi-floor-plan
                        </v-icon>
                        <div class="mx-2">13,9993 sq.ft.</div>
                    </div>
                </v-col>
                <v-col class="px-0">
                    <div class=" text--secondary text-body-1">Meeting Rooms</div>
                    <div class="d-flex ">
                        <v-icon>
                            mdi-table-chair
                        </v-icon>
                        <div class="mx-2">1,658</div>
                    </div>
                    <div class=" mt-4 text--secondary text-body-1">Total Meeting Space</div>
                    <div class="d-flex ">
                        <v-icon>
                            mdi-gamepad-down
                        </v-icon>
                        <div class="mx-2">900 sq.ft.</div>
                    </div>
                </v-col>
            </v-row>
            <v-btn width="100%" class="mt-4" disabled>EXPRESS REQUEST</v-btn>
        </v-container>

    </div>
</template>
<script>
export default {
    name: 'CarouselSection',
    data() {
        return {
            items: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',

                },

            ],
            rating: 3,
        }
    },
}
</script>

<style>
.fixedCard {
    position: absolute;
    top: 0.5%;
    left: 10%;
}
</style>