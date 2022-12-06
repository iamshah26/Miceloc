<template>
    <div>

        <v-container id="NEARBY">
            <div>
                <h2 class="py-5">Nearby</h2>
                <v-card class="img-border" hover max-width="310" height="350">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

                    <v-card-subtitle >
                       <p class="font-weight-bold black--text"> POOL • 26.7km away </p>
                    </v-card-subtitle>

                    <h3 class="mx-3 font-weight-regular">
                        Arborea Marina Resort Neustadt
                    </h3>
                </v-card>
            </div>
        </v-container>

    </div>
</template>

<script>
export default {
    name: 'nearBy'

}
</script>

<style scoped >
.img-border {
    border-radius: 20px;
}
</style>
<!-- <template>
    
      <div >
        <v-container id="NEARBY">
          <h2 class="py-5">Nearby</h2>
          <v-row>
            <v-col v-for="item in items" :key="item.id"  cols="12" sm="4">
              <v-card class="img-border" hover >
                <v-img  min-width="250" height="250" :src="item.src" aspect-ratio="1" class="grey lighten-2"></v-img>
                <v-card-text class=" ">
                  <div class="title">{{ item.name }}</div>
                  <p>{{ item.title }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    
  </template>
  
  <script>
  export default {
    name: "nearBy",
    data() {
      return {
        items: [
          {
            id: 1,
            src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
            name: 'POOL • 26.7km ',
            title: 'Arborea Marina '
          },
          {
            id: 2,
            src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
            name: 'Mehboob',
            title: 'Photographer'
          },
          {
            id: 3,
            src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
            name: 'Shoaib',
            title: 'Freelancer'
          }
        ]
      };
    }
  };
  </script>
  <style scoped >
  .img-border {
      border-radius: 20px;
  }
  </style> -->