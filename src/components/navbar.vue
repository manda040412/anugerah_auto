<template>
  <div class="sticky top-0 z-50 shadow-lg">
    
    <div class="bg-brand-blue text-white py-1 px-4 border-b border-white/10">
      <div class="max-w-7xl mx-auto flex justify-between items-center text-xs md:text-sm">
        
        <div class="flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
             <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
           </svg>
          <span class="text-white opacity-90">
             Jl. Danau Sunter Barat Blok A4 No. 2, Jakarta Utara, DKI Jakarta 14350
          </span>
        </div>
        
        <div class="flex items-center gap-2">
           <div class="flex items-center rounded overflow-hidden bg-white/5">
            <button
              @click="setLocale('id')"
              :class="[ 'px-2 py-1 text-xs flex items-center gap-1', locale === 'id' ? 'bg-white/20' : 'hover:bg-white/10' ]"
              aria-label="Pilih Bahasa Indonesia"
            >
              <span class="text-lg leading-none">🇮🇩</span>
              <span class="hidden sm:inline">ID</span>
            </button>
            <button
              @click="setLocale('en')"
              :class="[ 'px-2 py-1 text-xs flex items-center gap-1', locale === 'en' ? 'bg-white/20' : 'hover:bg-white/10' ]"
              aria-label="Select English"
            >
              <span class="text-lg leading-none">🇬🇧</span>
              <span class="hidden sm:inline">EN</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="max-w-7xl mx-auto px-4 py-5 md:py-0">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          
          <div class="flex items-center justify-start col-span-2 lg:col-span-1">
            <div class="w-32 h-24 flex items-center justify-center flex-shrink-0">
              <img :src="logo" alt="Anugerah Auto" class="w-full h-full object-contain"/>
            </div>
          </div>

          <div class="hidden lg:flex flex-col items-start justify-center">
              <div class="flex items-center gap-2 mb-1"> 
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-brand-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span class="text-sm text-gray-600">{{ L.phoneLabel }}</span>
              </div>
              <p class="font-bold text-2xl text-brand-blue">0851-8605-4378</p> 
          </div>

          <div class="hidden lg:flex items-center gap-3 justify-start">
             <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-brand-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p class="font-semibold text-base text-gray-800 leading-snug">{{ L.schedule }}</p>
              <p class="text-xs text-gray-600 leading-snug">{{ L.scheduleHelper }}</p>
            </div>
          </div>
          
          <div class="flex justify-end col-span-2 lg:col-span-1">
            <button class="bg-brand-red hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-colors lg:block hidden">
              {{ L.book }} 
            </button>
            
            <button class="lg:hidden p-2" @click="toggleMobileMenu">
              <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
        </div>
      </div>
    </div>
    
    <div class="bg-white border-t border-gray-200 hidden lg:block">
      <div class="max-w-7xl mx-auto px-4 py-3">
        <nav class="flex items-center gap-16 justify-start">
          <a href="#beranda" class="text-gray-700 hover:text-brand-blue font-semibold transition-colors">{{ L.home }}</a>
          <a href="#tentang" class="text-gray-700 hover:text-brand-blue font-semibold transition-colors">{{ L.about }}</a>
          <a href="#layanan" class="text-gray-700 hover:text-brand-blue font-semibold transition-colors">{{ L.services }}</a>
          <a href="#artikel" class="text-gray-700 hover:text-brand-blue font-semibold transition-colors">{{ L.articles }}</a>
          <a href="#kontak" class="text-gray-700 hover:text-brand-blue font-semibold transition-colors">{{ L.contact }}</a>
        </nav>
      </div>
    </div>

    <div v-if="mobileMenuOpen" class="lg:hidden border-t border-gray-200 bg-white shadow-xl">
      <nav class="flex flex-col px-4 py-3">
        <a href="#beranda" class="py-2 text-gray-700 hover:text-brand-blue font-medium">{{ L.home }}</a>
        <a href="#tentang" class="py-2 text-gray-700 hover:text-brand-blue font-medium">{{ L.about }}</a>
        <a href="#layanan" class="py-2 text-gray-700 hover:text-brand-blue font-medium">{{ L.services }}</a>
        <a href="#artikel" class="py-2 text-gray-700 hover:text-brand-blue font-medium">{{ L.articles }}</a>
        <a href="#kontak" class="py-2 text-gray-700 hover:text-brand-blue font-medium">{{ L.contact }}</a>
      </nav>
       <button class="w-full bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-b-lg font-semibold transition-colors">
        {{ L.book }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import logo from '../assets/logo_anugerah_auto.svg' 

const mobileMenuOpen = ref(false)
const locale = ref('id') 

const labels = {
  id: {
    country: 'Indonesia',
    home: 'Beranda',
    about: 'Tentang Kami',
    services: 'Layanan',
    articles: 'Artikel & Tips',
    contact: 'Kontak Kami',
    book: 'Book Appointment',
    phoneLabel: 'Hubungi Kami Sekarang',
    schedule: 'Senin - Jumat: 09.00 - 17.30 WIB',
    scheduleHelper: 'Sabtu: Hanya dengan Janji Temu (Booking)'
  },
  en: {
    country: 'Indonesia',
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    articles: 'Articles & Tips',
    contact: 'Contact Us',
    book: 'Book Appointment',
    phoneLabel: 'Contact Us Now',
    schedule: 'Mon - Fri: 09.00 - 17.30 WIB',
    scheduleHelper: 'Sat: By appointment only (Booking)'
  }
}

const L = computed(() => labels[locale.value])

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const setLocale = (l) => {
  locale.value = l === 'en' ? 'en' : 'id'
}
</script>

<style scoped>
.bg-brand-blue { background-color: #214791; }
.bg-brand-red { background-color: #EC2529; }
</style>