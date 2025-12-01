<template>
  <div class="container mx-auto px-6 py-12">
    <div class="mb-8">
      <span class="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
        Artikel & Tips
      </span>
      <h2 class="text-4xl font-bold mt-4 mb-8">Artikel Terbaru Kami</h2>
    </div>

    <div v-if="loading" class="text-center py-20">
      <p class="text-gray-500">Memuat artikel...</p>
    </div>

    <div v-else-if="error" class="text-center py-20">
      <p class="text-red-500">{{ error }}</p>
    </div>

    <div v-else class="grid md:grid-cols-3 gap-6">
      <div
        v-for="post in blogs"
        :key="post.id"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      >
        <img
          :src="getImageUrl(post)"
          :alt="post.title || 'Cover Image'"
          class="w-full h-48 object-cover"
          @error="handleImageError"
        />
        
        <div class="p-6">
          <span class="text-sm text-gray-500 uppercase block mb-2">ARTIKEL</span>
          <h3 class="font-bold text-gray-900 mb-3 text-lg">
            {{ post.title || 'Judul tidak tersedia' }}
          </h3>
          <p class="text-sm text-gray-600 mb-4">
            {{ formatDate(post.publishDate) }}
          </p>

          <router-link
            v-if="post.slug"
            :to="{ name: 'BlogDetail', params: { slug: post.slug } }"
            class="inline-flex items-center gap-2 text-white px-4 py-2 rounded font-semibold hover:opacity-90 transition-opacity"
            style="background-color: #214791"
          >
            Selengkapnya
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>

          <button 
            v-else 
            disabled 
            class="inline-flex items-center gap-2 text-white px-4 py-2 rounded font-semibold opacity-50 cursor-not-allowed" 
            style="background-color: #214791"
          >
            Slug tidak tersedia
          </button>
        </div>
      </div>
    </div>

    <div v-if="!loading && !error && blogs.length === 0" class="text-center py-20">
      <p class="text-gray-500">Belum ada artikel tersedia.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// 1. Ganti URL ini dengan URL Strapi Cloud Anda yang lengkap
const STRAPI_BASE_URL = 'http://localhost:1337' 
const API_ENDPOINT = `${STRAPI_BASE_URL}/api/blogs`

const blogs = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    loading.value = true
    error.value = null
    
    // 2. Menggunakan API_ENDPOINT yang sudah diupdate
    const res = await axios.get(API_ENDPOINT, { 
      params: {
        populate: 'coverImage'
      }
    })
    
    // Asumsi Strapi menggunakan format data Strapi v4 (data: [{ attributes: {...} }])
    blogs.value = res.data.data.map(item => ({
      id: item.id,
      // Menggunakan item.attributes untuk data Strapi v4
      ...item.attributes, 
      // Mengambil data gambar dari object data.attributes.coverImage.data.attributes
      coverImage: item.attributes.coverImage?.data?.attributes
    }))
    
  } catch (err) {
    console.error('Error fetching blogs:', err)
    error.value = 'Gagal memuat artikel. Pastikan CORS sudah diatur di Strapi Cloud!'
  } finally {
    loading.value = false
  }
})

// Fungsi untuk mendapatkan URL Gambar
const getImageUrl = (post) => {
  // Cek apakah ada URL gambar yang valid dari Strapi
  const url = post.coverImage?.url
  
  if (!url) {
    return '/logo_anugerah_auto.svg'
  }

  // Jika URL sudah lengkap (URL eksternal, misalnya dari Cloudinary/S3 atau Strapi Cloud)
  if (url.startsWith('http')) {
    return url
  }
  
  // Jika URL gambar masih relatif, tambahkan Base URL Strapi Cloud
  return `${STRAPI_BASE_URL}${url}`
}

const handleImageError = (event) => {
  console.error('Image failed to load:', event.target.src)
  event.target.src = '/logo_anugerah_auto.svg'
}

const formatDate = (date) => {
  if (!date) return 'Tanggal tidak tersedia'
  
  try {
    return new Date(date).toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  } catch (err) {
    return 'Tanggal tidak valid'
  }
}
</script>