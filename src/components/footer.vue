<template>
  <footer id="footer" class="bg-white border-t border-gray-200">
    <div class="bg-white py-2 px-4">
      <div class="max-w-7xl mx-auto">
        
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-8 items-center">
          
          <!-- Logo -->
          <div class="flex flex-col h-full items-start space-y-2 col-span-2 md:col-span-1">
            <div class="w-64 h-64 flex items-center justify-start">
              <img :src="logo" alt="Anugerah Auto" class="w-full h-full object-contain" />
            </div>
          </div>

          <!-- Hubungi Kami -->
          <div class="flex flex-col h-full justify-center items-start">
            <h3 class="font-bold text-gray-800 text-sm mb-1">{{ L.hubungiKami }}:</h3>
            <p class="font-bold text-2xl text-gray-900 mb-2">0851-8605-4378</p>
            
            <div class="flex justify-start">
              <div class="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <img :src="instagramIcon" alt="Instagram" class="w-5 h-5" />
              </div>
            </div>
          </div>

          <!-- Jadwal & Maps -->
          <div class="flex flex-col h-full justify-center items-start">
            <div class="flex items-start gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div class="text-gray-800 text-sm md:text-base">
                <p class="font-semibold leading-snug">{{ L.schedule }}</p>
                <p class="text-sm leading-snug">{{ L.scheduleHelper }}</p>
              </div>
            </div>
            <div class="w-full max-w-xs h-30 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.869893758414!2d106.8585981!3d-6.1481706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1f05680f3797%3A0x77463fa474ce30e1!2sAnugerah%20Auto%20Sunter!5e0!3m2!1sid!2sid!4v1763107020663!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <!-- Lokasi -->
          <div class="flex flex-col h-full justify-center items-start md:items-end">
            <div class="text-left md:text-right">
              <h3 class="font-bold text-gray-900 text-lg mb-3">{{ L.locationTitle }}</h3>
              <a 
                href="https://maps.app.goo.gl/vWJXSwCKZorgrm6e7" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-block border-2 border-brand-blue text-brand-blue px-6 py-2 rounded-full font-semibold hover:bg-brand-blue hover:text-white transition-colors"
              >
                {{ L.lihatRute }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="bg-brand-blue text-white text-left py-4 px-6 md:px-24">
      <p class="text-xs md:text-sm">
        © {{ currentYear }} {{ L.copyright }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import logo from '../assets/logo_anugerah_auto.svg'
import instagramIcon from '../assets/instagram.png' 

const currentYear = new Date().getFullYear()

const labels = {
  id: {
    hubungiKami: 'Hubungi Kami',
    schedule: 'Senin - Jumat: 09.00 - 17.30 WIB',
    scheduleHelper: 'Sabtu: Hanya dengan Janji Temu (Booking)',
    locationTitle: 'Kesulitan Menemukan Lokasi Bengkel Kami?',
    lihatRute: 'LIHAT RUTE',
    copyright: 'Anugerah Auto. All Rights Reserved'
  },
  en: {
    hubungiKami: 'Contact Us',
    schedule: 'Mon - Fri: 09.00 - 17.30 WIB',
    scheduleHelper: 'Sat: By appointment only (Booking)',
    locationTitle: 'Need Help Finding Our Workshop?',
    lihatRute: 'VIEW ROUTE',
    copyright: 'Anugerah Auto. All Rights Reserved'
  }
}

const locale = ref('id') 
const L = computed(() => labels[locale.value])

defineProps({
  currentLocale: {
    type: String,
    default: 'id'
  }
})

const updateLocale = (newLocale) => {
  locale.value = newLocale
}

defineExpose({
  updateLocale
})
</script>

<style scoped>
.bg-brand-blue { background-color: #214791; }
.bg-brand-red { background-color: #EC2529; }
</style>
