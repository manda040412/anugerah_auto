<template>
  <!-- Tambahkan loading state -->
  <div v-if="loading" class="w-full h-[350px] md:h-[500px] bg-gray-200 animate-pulse flex items-center justify-center">
    <p class="text-gray-500">Memuat carousel...</p>
  </div>

  <!-- Tampilkan hanya jika data sudah ada -->
  <div v-else-if="carousels.length > 0" class="relative w-full h-[350px] md:h-[500px] overflow-hidden">
    <div
      v-for="(item, index) in carousels"
      :key="item.id"
      class="absolute inset-0 transition-opacity duration-700 ease-in-out"
      :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }"
    >
      <img
        :src="getImageUrl(item)"
        class="w-full h-full object-cover"
        :alt="item.attributes?.title || 'Carousel Image'"
        @error="handleImageError"
      />
      <div
        v-if="item.attributes?.title"
        class="absolute bottom-6 left-6 bg-black bg-opacity-40 text-white p-4 rounded-lg"
      >
        <h2 class="text-xl font-bold">{{ item.attributes.title }}</h2>
        <a
          v-if="item.attributes.link"
          :href="item.attributes.link"
          target="_blank"
          class="underline text-sm"
        >Lihat Selengkapnya</a>
      </div>
    </div>

    <!-- Navigation Buttons (Optional) -->
    <button
      @click="prevSlide"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
    >
      &#10094;
    </button>
    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
    >
      &#10095;
    </button>

    <!-- Indicators (Optional) -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(item, index) in carousels"
        :key="`indicator-${item.id}`"
        @click="currentIndex = index"
        class="w-3 h-3 rounded-full transition"
        :class="currentIndex === index ? 'bg-white' : 'bg-white/50'"
      />
    </div>
  </div>

  <!-- Jika tidak ada data -->
  <div v-else class="w-full h-[350px] md:h-[500px] bg-gray-100 flex items-center justify-center">
    <p class="text-gray-500">Tidak ada carousel tersedia</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'

const STRAPI_BASE_URL = 'http://localhost:1337'
const API_ENDPOINT = `${STRAPI_BASE_URL}/api/carousels?populate=image`

const carousels = ref([])
const currentIndex = ref(0)
const loading = ref(true)
let intervalId = null

onMounted(async () => {
  try {
    loading.value = true
    const res = await axios.get(API_ENDPOINT)
    
    carousels.value = res.data.data || []
    
    console.log('Fetched Carousels:', carousels.value)
    
    if (carousels.value.length > 0) {
      startAutoSlide()
    }

  } catch (err) {
    console.error('Gagal ambil data Carousel:', err)
  } finally {
    loading.value = false
  }
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

const getImageUrl = (item) => {
  try {
    const imageAttribute = item?.attributes?.image?.data?.attributes
    
    if (!imageAttribute?.url) {
      console.warn('Gambar tidak ditemukan untuk item:', item?.id)
      return '/logo_anugerah_auto.svg' // Fallback image
    }

    const url = imageAttribute.url
    
    if (url.startsWith('http')) {
      return url
    }
    
    return `${STRAPI_BASE_URL}${url}`
  } catch (err) {
    console.error('Error getting image URL:', err)
    return '/logo_anugerah_auto.svg'
  }
}

const handleImageError = (event) => {
  console.error('Image failed to load:', event.target.src)
  event.target.src = '/logo_anugerah_auto.svg'
}

const startAutoSlide = () => {
  intervalId = setInterval(() => {
    if (carousels.value.length > 0) {
      currentIndex.value = (currentIndex.value + 1) % carousels.value.length
    }
  }, 4000)
}

const nextSlide = () => {
  if (carousels.value.length > 0) {
    currentIndex.value = (currentIndex.value + 1) % carousels.value.length
  }
}

const prevSlide = () => {
  if (carousels.value.length > 0) {
    currentIndex.value = currentIndex.value === 0 ? carousels.value.length - 1 : currentIndex.value - 1
  }
}
</script>