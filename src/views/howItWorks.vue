<template>
    <div>
        <CarouselSection />
        <tabBar />
        <overView />
        <photoGallery />
        <nearBy />
    </div>
</template>
<script>
import tabBar from '@/components/tabBar.vue'
import overView from '@/components/overView.vue'
import photoGallery from '@/components/photoGallery.vue'
import nearBy from '@/components/nearBy.vue'
import CarouselSection from '@/components/CarouselSection.vue'
export default {
    components: {
        tabBar,
        overView,
        photoGallery,
        nearBy,
        CarouselSection
    },
}
</script>
<style scoped>

</style>