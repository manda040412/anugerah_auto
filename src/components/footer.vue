<template>
  <footer id="footer" class="bg-white border-t border-gray-200">
    <div class="bg-white py-6 md:py-8 px-4">
      <div class="max-w-7xl mx-auto px-4">

        <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-8 lg:gap-x-12 gap-y-6 md:gap-y-0 items-start">

          <div class="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
            <div class="w-36 md:w-48 h-auto flex items-center justify-center">
              <img :src="logo" alt="Anugerah Auto" class="w-full h-auto object-contain" />
            </div>
          </div>

          <div class="col-span-1 md:col-span-1 flex flex-col h-full justify-start items-center md:items-start text-center md:text-left">
            <h3 class="font-normal text-gray-800 text-sm mb-1">{{ L.hubungiKami }}</h3>
            <!-- Nomor telepon dengan link WhatsApp -->
            <a 
              href="https://wa.me/6285186054378" 
              target="_blank"
              class="font-bold text-lg md:text-xl text-gray-900 mb-2 hover:text-blue-700 transition-colors"
            >
              0851-8605-4378
            </a>

            <div class="flex justify-center md:justify-start gap-x-2">
              <!-- Instagram dengan link -->
              <a 
                href="https://www.instagram.com/anugerahauto/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img :src="instagramIcon" alt="Instagram" class="w-5 h-5" />
              </a>
              <!-- TikTok dengan link -->
              <a 
                href="https://www.tiktok.com/@anugerahautosunter" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img :src="tiktokIcon" alt="Tiktok" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <div class="col-span-1 md:col-span-1 flex flex-col h-full justify-start items-center md:items-start text-center md:text-left">
            <div class="flex items-start gap-2"> 
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div class="text-gray-800 text-left">
                <p class="font-bold text-lg md:text-xl leading-snug">{{ L.schedule }}</p>
                <p class="text-sm text-gray-700 leading-snug">{{ L.scheduleHelperMini }}</p>
              </div>
            </div>
          </div>

          <div class="col-span-1 md:col-span-1 flex flex-col h-full justify-start items-center md:items-start">
            <a 
              href="https://share.google/xtn8DjG1kzj4t5vhM" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-blue-600 hover:text-blue-800 text-xs mb-1 md:mb-2 text-left hover:underline"
            >
              {{ L.lihatRute }}
            </a>
            <div class="w-full max-w-[150px] md:max-w-xs h-24 md:h-28 rounded-md overflow-hidden border border-gray-300">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.869893758414!2d106.8585981!3d-6.1481706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1f05680f3797%3A0x77463fa474ce30e1!2sAnugerah%20Auto%20Sunter!5e0!3m2!1sid!2sid!4v1763107020663!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Lokasi Anugerah Auto Sunter"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="bg-brand-blue text-white text-center py-3 px-4">
      <div class="max-w-7xl mx-auto px-4">
        <p class="text-xs md:text-sm">
          © {{ currentYear }} {{ L.copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import logo from '../assets/logo_anugerah_auto.svg'
import instagramIcon from '../assets/instagram.png'
import tiktokIcon from '../assets/tiktok.png'

const currentYear = new Date().getFullYear()

const labels = {
  id: {
    hubungiKami: 'Hubungi Kami',
    schedule: 'Senin - Jumat: 08.00 - 17.30 WIB',
    scheduleHelperMini: 'Sabtu: Hanya dengan Janji Temu (Booking)',
    locationTitle: 'Kesulitan Menemukan Lokasi Bengkel Kami?', 
    lihatRute: 'Lihat Peta', 
    copyright: 'Anugerah Auto. All Rights Reserved'
  },
  en: {
    hubungiKami: 'Contact Us',
    schedule: 'Mon - Fri: 08.00 - 17.30 WIB',
    scheduleHelperMini: 'Sat: By appointment only (Booking)',
    locationTitle: 'Need Help Finding Our Workshop?',
    lihatRute: 'View Map',
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
/* Pastikan warna-warna ini sesuai dengan variabel tema Anda */
.bg-brand-blue { background-color: #214791; }
.bg-brand-red { background-color: #EC2529; }

/* Style untuk link */
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
</style>