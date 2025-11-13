<template>
  <div class="w-full">
    <!-- Top Bar -->
    <div class="bg-blue-900 text-white py-2 px-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center text-xs md:text-sm">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" style="width: 16px; height: 16px; min-width: 16px; min-height: 16px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="hidden sm:inline">Jl. Danau Sunter Barat Blok A4 No. 2, Jakarta Utara, DKI Jakarta 14350</span>
          <span class="sm:hidden">Jakarta Utara</span>
        </div>
        <span>Indonesia</span>
      </div>
    </div>

    <!-- Main Navbar -->
    <div class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center gap-3">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-blue-900 flex items-center justify-center rounded">
                <div class="text-white font-bold text-xl">AK</div>
              </div>
            </div>
            <div>
              <div class="font-bold text-blue-900 text-lg leading-tight">ANUGERAH AUTO</div>
              <div class="text-xs text-gray-600">SPESIALIS HARI RAYA</div>
            </div>
          </div>

          <!-- Contact Info & CTA - Desktop -->
          <div class="hidden lg:flex items-center gap-6">
            <div class="flex items-center gap-4">
              <div class="text-right">
                <div class="flex items-center gap-2 text-gray-700 font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" style="width: 16px; height: 16px; min-width: 16px; min-height: 16px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0851-8605-4378
                </div>
                <div class="text-xs text-gray-500">Hubungi Kami Sekarang</div>
              </div>
              <div class="text-right">
                <div class="flex items-center gap-2 text-gray-700 font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" style="width: 16px; height: 16px; min-width: 16px; min-height: 16px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Senin - Jumat: 09.00 - 17.30 WIB
                </div>
                <div class="text-xs text-gray-500">Sabtu: Hanya dengan Janji Temu (Booking)</div>
              </div>
            </div>
            <button class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Book Appointment
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            class="lg:hidden p-2"
            @click="toggleMobileMenu"
          >
            <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Navigation Links - Desktop -->
        <nav class="hidden lg:flex items-center gap-8 mt-4 pt-4 border-t border-gray-200">
          <a href="#beranda" class="text-gray-700 hover:text-blue-900 font-medium transition-colors">Beranda</a>
          <a href="#tentang" class="text-gray-700 hover:text-blue-900 font-medium transition-colors">Tentang Kami</a>
          <a href="#layanan" class="text-gray-700 hover:text-blue-900 font-medium transition-colors">Layanan</a>
          <a href="#artikel" class="text-gray-700 hover:text-blue-900 font-medium transition-colors">Artikel & Tips</a>
          <a href="#kontak" class="text-gray-700 hover:text-blue-900 font-medium transition-colors">Kontak Kami</a>
        </nav>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="lg:hidden border-t border-gray-200 bg-white">
        <nav class="flex flex-col px-4 py-3">
          <a href="#beranda" class="py-2 text-gray-700 hover:text-blue-900 font-medium">Beranda</a>
          <a href="#tentang" class="py-2 text-gray-700 hover:text-blue-900 font-medium">Tentang Kami</a>
          <a href="#layanan" class="py-2 text-gray-700 hover:text-blue-900 font-medium">Layanan</a>
          <a href="#artikel" class="py-2 text-gray-700 hover:text-blue-900 font-medium">Artikel & Tips</a>
          <a href="#kontak" class="py-2 text-gray-700 hover:text-blue-900 font-medium">Kontak Kami</a>
        </nav>
        <div class="px-4 pb-4 space-y-3 border-t border-gray-200 pt-3">
          <div class="flex items-center gap-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="font-semibold">0851-8605-4378</span>
          </div>
          <div class="text-sm text-gray-600">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Senin - Jumat: 09.00 - 17.30 WIB</span>
            </div>
            <div class="ml-6 text-xs">Sabtu: Hanya dengan Janji Temu (Booking)</div>
          </div>
          <button class="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>