<template>
  <div class="max-w-4xl mx-auto p-6 py-12">
    <div v-if="loading" class="text-center py-20">
      <p class="text-gray-500">Memuat artikel...</p>
    </div>

    <div v-else-if="error" class="text-center py-20">
      <p class="text-red-500">{{ error }}</p>
      <router-link 
        to="/" 
        class="mt-4 inline-block text-blue-600 hover:underline"
      >
        Kembali ke Beranda
      </router-link>
    </div>

    <div v-else-if="blog">
      <img
        :src="getImageUrl(blog)"
        :alt="blog.title || 'Cover Image'"
        class="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
        @error="handleImageError"
      />
      
      <h1 class="text-4xl font-bold mb-4 text-gray-900">
        {{ blog.title }}
      </h1>
      
      <p class="text-gray-500 mb-8 text-lg">
        {{ formatDate(blog.publishDate) }}
      </p>
      
      <div
        class="prose prose-lg max-w-none text-gray-800 leading-relaxed"
        v-html="blog.content"
      ></div>

      <div class="mt-12 pt-8 border-t">
        <router-link 
          to="/" 
          class="inline-flex items-center gap-2 text-white px-6 py-3 rounded font-semibold hover:opacity-90 transition-opacity"
          style="background-color: #214791"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Beranda
        </router-link>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <h2 class="text-2xl font-bold text-gray-700 mb-4">Artikel tidak ditemukan</h2>
      <router-link 
        to="/" 
        class="text-blue-600 hover:underline"
      >
        Kembali ke Beranda
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

// --- KONFIGURASI STRAPI CLOUD ---
const STRAPI_BASE_URL = 'http://localhost:1337' 
// ---------------------------------

const route = useRoute()
const blog = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    loading.value = true
    error.value = null
    
    const slug = route.params.slug
    
    const API_ENDPOINT = `${STRAPI_BASE_URL}/api/blogs`

    // Menggunakan API_ENDPOINT Strapi Cloud
    const res = await axios.get(API_ENDPOINT, {
      params: {
        // Menggunakan filter Strapi v4
        'filters[slug][$eq]': slug, 
        populate: 'coverImage'
      }
    })
    
    if (res.data.data && res.data.data.length > 0) {
      const item = res.data.data[0]
      const attributes = item.attributes

      // Memproses data agar sesuai dengan Strapi v4
      blog.value = {
        id: item.id,
        // Semua properti data diambil dari attributes
        title: attributes.title,
        slug: attributes.slug,
        content: attributes.content,
        publishDate: attributes.publishDate,
        // Memproses data gambar yang di-populate
        coverImage: attributes.coverImage?.data?.attributes
      }
    } else {
      error.value = 'Artikel tidak ditemukan'
    }
    
  } catch (err) {
    console.error('Error fetching blog:', err)
    error.value = 'Gagal memuat artikel. Pastikan koneksi dan URL API Strapi sudah benar.'
  } finally {
    loading.value = false
  }
})

const getImageUrl = (blog) => {
  // Path gambar di Strapi v4: blog.coverImage.url
  const url = blog.coverImage?.url
  
  if (!url) {
    return '/logo_anugerah_auto.svg'
  }
  
  // Jika URL sudah lengkap (URL eksternal atau Strapi Cloud)
  if (url.startsWith('http')) {
    return url
  }
  
  // Jika URL masih relatif, tambahkan Base URL Strapi Cloud
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

<style scoped>
.prose p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.prose h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.75rem;
  font-weight: 700;
}

.prose h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.prose ul, .prose ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.prose li {
  margin-bottom: 0.5rem;
}
</style>