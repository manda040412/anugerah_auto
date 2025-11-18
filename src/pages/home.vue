<template>
  <div class="w-full bg-white">

    <div class="relative w-full h-[350px] md:h-[500px] bg-gray-300 flex items-center justify-center">
      <span class="text-gray-500 text-xl">Hero Image / Slider</span>

      <div class="absolute bottom-0 w-full z-0 mb-4 hidden sm:block">
        <div class="max-w-7xl mx-auto px-4">
          <FasilitasOverlay :locale="props.locale" />
        </div>
      </div>
    </div>


    <section id="tentang" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{{ L.aboutTitle }}</h2>
        <h3 class="text-xl md:text-2xl mb-8" :style="{ color: '#214791' }">{{ L.aboutSubtitle }}</h3>
        <div class="grid md:grid-cols-2 gap-8 mb-4">
          <div class="text-gray-700 leading-relaxed">
            <p class="mb-4 text-justify">{{ L.aboutDesc1 }}</p>
          </div>
          <div class="text-gray-700 leading-relaxed">
            <p class="text-justify">{{ L.aboutDesc2 }}</p>
          </div>
        </div>

        <a 
          href="https://tranugerah.com" 
          target="_blank" 
          class="inline-block px-8 py-3 mt-4 mb-12 text-sm font-bold text-white uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          :style="{ backgroundColor: '#EC2529' }" 
        >
          {{ L.aboutLink }}
        </a>
        <div class="grid md:grid-cols-3 gap-6 mb-16">
          <div class="w-full max-w-xs h-48 flex items-center justify-center mx-auto mb-4">
            <img src="../assets/cctv anugerah_auto.JPG" alt="Image 1" class="w-full h-full object-cover rounded-lg" />
          </div>

          <div class="w-full max-w-md h-48 flex items-center justify-center mx-auto mb-4">
            <img src="../assets/anugerah_auto.JPG" alt="Image 2" class="w-full h-full object-cover rounded-lg" />
          </div>

          <div class="w-full max-w-xs h-48 flex items-center justify-center mx-auto mb-4">
            <img src="../assets/pengecekkan_anugerah_auto.JPG" alt="Image 3" class="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
        
        <div class="pt-8 border-t border-gray-200">
          <h4 class="text-2xl font-bold text-gray-900 mb-8 text-center">{{ L.highlightsTitle }}</h4>
          
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div v-for="n in 6" :key="n" class="text-center">
              
              <div class="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-lg" :style="{ backgroundColor: '#214791' }">
                <img
                  :src="getHighlightIcon(L['highlight' + n + 'Icon'])"
                  :alt="L['highlight' + n + 'Label'] + ' icon'"
                  class="w-7 h-7 object-contain"
                />
              </div>
              
              <h5 class="font-bold text-lg text-gray-900 mb-1">{{ L['highlight' + n + 'Label'] }}</h5>
              
              <p class="text-sm text-gray-600 px-2">{{ L['highlight' + n + 'Desc'] }}</p>
            </div>
          </div>
        </div>
        </div>
    </section>

    <section id="layanan" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 relative">
        <div class="absolute left-0 right-0 top-0 flex justify-center pointer-events-none select-none" style="z-index:0;">
          <span class="font-extrabold text-4xl md:text-7xl lg:text-[7rem]" style="color:#E8F0FB; letter-spacing:0.1em; line-height:1;">{{ L.services }}</span>
        </div>
        <div class="relative z-10">
          <div class="text-center mb-4">
            <span class="text-sm font-semibold uppercase tracking-wide" :style="{ color: '#EC2529' }">
              {{ L.servicesCategory }}
            </span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {{ L.servicesTitle }}
          </h2>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div v-for="(service, idx) in [L.service1, L.service2, L.service3, L.service4, L.service5, L.service6]" :key="idx" 
              class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              
              <div class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-brand-red p-4">
                <img 
                    :src="getServiceIcon(service)" 
                    :alt="service + ' icon'" 
                    class="w-full h-full object-contain" 
                />
              </div>
              
              <h3 class="font-bold text-gray-900">{{ service }}</h3>
            </div>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#214791] text-center">
            <h4 class="text-2xl font-bold text-[#214791] mb-2">{{ L.corporateTitle }}</h4>
            <p class="text-lg font-semibold text-gray-700 mb-4">{{ L.corporateSubtitle }}</p>
            <p class="text-gray-600 mb-6 max-w-3xl mx-auto">{{ L.corporateDesc }}</p>
          </div>
          </div>
      </div>
    </section>

    <div class="w-full md:relative md:z-20 mt-6 mb-4">
      <div class="static md:absolute left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:top-0 w-full flex justify-center pointer-events-none md:pointer-events-auto" style="z-index:20;">
        <div class="max-w-xl w-full bg-[#2952A3] rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between px-4 py-4 md:px-6 pointer-events-auto">
          <div class="flex-1 text-white text-left">
            <h3 class="text-sm md:text-base font-bold mb-1">{{ L.ctaTitle }}</h3>
            <p class="text-[10px] text-blue-100 leading-tight">{{ L.ctaHelper }}</p>
          </div>
          <div class="flex-shrink-0 flex items-center justify-center mt-2 md:mt-0">
            <div class="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 shadow-md" style="min-width:110px;">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" style="color:#2952A3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div class="flex flex-col leading-tight">
                <span class="font-bold text-sm text-[#2952A3]">{{ L.ctaPhone }}</span>
                <span class="text-[10px] text-[#2952A3]">{{ L.phoneHelper }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <section id="artikel" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="mb-4">
          <span class="inline-block px-4 py-1 text-sm font-semibold text-white rounded-full" :style="{ backgroundColor: '#EC2529' }">
            {{ L.articlesLabel }}
          </span>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12">{{ L.articlesTitle }}</h2>

        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="idx in 3" :key="idx" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="aspect-video bg-gray-300 flex items-center justify-center">
              <span class="text-gray-500">Article Image {{ idx }}</span>
            </div>
            <div class="p-6">
              <span class="text-sm text-gray-500 uppercase">Article</span>
              <h3 class="font-bold text-gray-900 mt-2 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <button class="flex items-center gap-2 text-white px-4 py-2 rounded font-semibold hover:opacity-90 transition-opacity" :style="{ backgroundColor: '#214791' }">
                {{ L.readMore }}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="flex justify-center items-center py-2 mb-8">
      <div class="w-[90vw] max-w-4xl mx-auto relative overflow-hidden" style="clip-path: polygon(0 0, 95% 0, 100% 20%, 100% 100%, 5% 100%, 0 80%);">
        <img src="../assets/IMG_20251009_113730.png" alt="Booking" class="absolute inset-0 w-full h-full object-cover" style="clip-path: inherit; z-index:1;" />
        <div class="absolute inset-0" style="z-index:2; background: linear-gradient(180deg, rgba(33,71,145,0.6) 0%, rgba(33,71,145,0.2) 60%, transparent 100%);"></div>
        <div class="flex flex-col items-center justify-center h-[400px] relative z-10">
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center mb-6 mt-8">{{ L.bookingTitle }}</h2>
          <button class="px-6 py-2 rounded-lg font-bold text-[#214791] text-sm border-2 border-[#214791] bg-white hover:bg-[#214791] hover:text-white transition-colors">
            {{ L.bookingButton }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import FasilitasOverlay from '../components/FasilitasOverlay.vue';


// Fungsi untuk memuat ikon layanan dari folder assets
const getServiceIcon = (serviceName) => {
  const iconMap = {
    Suspension: "suspension.png",
    Suspensi: "suspension.png",
    Brake: "brake.png",
    Rem: "brake.png",
    'Shock Absorber': "shock absorber.png",
    Battery: "battery.png",
    Baterai: "battery.png",
    Oil: "oil.png",
    Oli: "oil.png",
    'Tune Up': "tune up.png",
  };
  let key = serviceName;
  if (serviceName === 'Suspensi') key = 'Suspension';
  else if (serviceName === 'Rem') key = 'Brake';
  else if (serviceName === 'Baterai') key = 'Battery';
  else if (serviceName === 'Oli') key = 'Oil';
  const fileName = iconMap[key] || "default-service-icon.png";
  return new URL(`../assets/${fileName}`, import.meta.url).href;
};

// Fungsi untuk memuat ikon highlight dari folder assets
const getHighlightIcon = (iconName) => {
  const iconMap = {
    sparepart: "sparepart.png",
    transparency: "Transparency.png",
    sofa: "waiting room.png",
    quality: "Quality.png",
    guarantee: "guarantee.png",
    tv: "entertaiment.png",
  };
  const fileName = iconMap[iconName] || "default-highlight-icon.png";
  return new URL(`../assets/${fileName}`, import.meta.url).href;
};

const props = defineProps({
  locale: {
    type: String,
    required: true,
    default: 'id' 
  }
});

// Definisi label terjemahan
const labels = {
  id: {
    country: 'Indonesia', home: 'Beranda', about: 'Tentang Kami', 
    aboutDesc1: 'Anugerah Auto adalah bengkel spesialis kaki-kaki mobil yang berdedikasi untuk mengutamakan kesehatan dan kenyamanan Anda. Sebagai bagian dari PT Timur Raya Anugerah Damai (TRAD), kami membawa pengalaman dan standar kualitas yang tinggi dalam setiap layanan. Anugerah Auto telah berpengalaman sebagai bengkel spesialis kaki-kaki mobil di Jakarta selama bertahun-tahun, menawarkan layanan spooring 3D, balancing, dan perbaikan komponen suspensi mobil dengan menggunakan peralatan canggih dan teknisi berpengalaman.', 
    aboutDesc2: 'Kami memahami pentingnya sistem kaki-kaki yang berfungsi dengan baik untuk keselamatan dan kenyamanan berkendara Anda. Dengan tim mekanik profesional yang ahli di bidangnya, kami siap memberikan solusi terbaik untuk setiap masalah kaki-kaki mobil Anda, dari diagnosa hingga perbaikan yang tepat dan akurat.', 
    aboutLink: 'Kunjungi Web Resmi TRAD', 
    services: 'LAYANAN', articles: 'Artikel & Tips', contact: 'Kontak Kami', book: 'Book Appointment', phoneHelper: 'Hubungi Kami', schedule: 'Senin - Jumat: 09.00 - 17.30 WIB', scheduleHelper: 'Sabtu: Hanya dengan Janji Temu (Booking)', aboutTitle: 'Anugerah Auto', aboutSubtitle: 'Percayakan Kenyamanan Berkendara Anda Pada Ahlinya', servicesCategory: 'Layanan Utama Kami', servicesTitle: 'Spesialisasi Service Mobil Terbaik Di Jakarta', 
    // LAYANAN UTAMA (6 ITEM)
    service1: 'Suspensi', 
    service2: 'Rem', 
    service3: 'Shock Absorber',
    service4: 'Baterai', 
    service5: 'Oli', 
    service6: 'Tune Up',
    
    // LAYANAN CORPORATE
    corporateTitle: 'Layanan Corporate & Armada',
    corporateSubtitle: 'Mitra Terpercaya untuk Kenyamanan dan Keamanan Bisnis Anda',
    corporateDesc: 'Anugerah Auto juga melayani kebutuhan servis untuk armada perusahaan, taksi online (Grab/Gojek), travel agent, dan operator logistik. Dapatkan harga khusus, prioritas layanan, dan jaminan kualitas untuk menjaga performa kendaraan operasional bisnis Anda.',
    
    ctaTitle: 'Info harga dan konsultasi di nomor berikut', ctaPhone: '0851-8605-4378', ctaHelper: 'GRATIS JASA KONSULTASI', articlesLabel: 'Artikel & Tips', articlesTitle: 'Artikel Terbaru Kami', readMore: 'Selengkapnya', bookingTitle: 'Siap Memesan Jadwal Service Mobil Anda?', bookingButton: 'PESAN JADWAL SEKARANG', footerSchedule: 'Senin - Jumat: 08.00 - 17.30 WIB', footerScheduleHelper: 'Sabtu: Hanya dengan Janji Temu (Booking)', footerQuestion: 'Kesulitan Menemukan Lokasi Bengkel Kami?', footerMap: 'LIHAT PETA', copyright: '© Copyright 2025 Anugerah Auto. All Rights Reserved',
    
    // Keunggulan/Highlight
    highlightsTitle: 'Keunggulan Anugerah Auto',
    highlight1Icon: 'sparepart', highlight1Label: 'Suku Cadang Lengkap', highlight1Desc: 'Tersedia 5000+ SKU suku cadang, memastikan ketersediaan komponen yang Anda butuhkan.',
    highlight2Icon: 'transparency', highlight2Label: 'Transparansi Pengerjaan & Harga', highlight2Desc: 'Kami menjelaskan setiap langkah pengerjaan dan rincian harga secara langsung kepada Anda.',
    highlight3Icon: 'sofa', highlight3Label: 'Fasilitas Ruang Tunggu Premium', highlight3Desc: 'Nikmati Ruang Tunggu nyaman ber-AC, Wi-Fi gratis, serta Kopi & Teh cuma-cuma.',
    highlight4Icon: 'quality', highlight4Label: 'Kualitas Produk Terjamin', highlight4Desc: 'Hanya menggunakan sparepart dari Jepang, Thailand, dan aftermarket terpercaya.',
    highlight5Icon: 'guarantee', highlight5Label: 'Jaminan Layanan Purna Jual', highlight5Desc: 'Kami memberikan jaminan service untuk setiap perbaikan yang dilakukan di bengkel kami.',
    highlight6Icon: 'tv', highlight6Label: 'Live CCTV Monitoring', highlight6Desc: 'Saksikan langsung proses pengerjaan mobil Anda melalui monitor yang tersedia di ruang tunggu.',
  },
  en: {
    country: 'Indonesia', home: 'Home', about: 'About Us', 
    aboutDesc1: 'Anugerah Auto is a specialist car suspension workshop dedicated to prioritizing your health and comfort. As a part of PT Timur Raya Anugerah Damai (TRAD), we bring high experience and quality standards to every service. With years of experience as a car suspension specialist in Jakarta, Anugerah Auto offers 3D spooring, balancing, and suspension component repair services using advanced equipment and experienced technicians.', 
    aboutDesc2: 'We understand the importance of a well-functioning suspension system for your safety and driving comfort. With a team of professional mechanics who are experts in their field, we are ready to provide the best solutions for any suspension problems, from diagnosis to precise and accurate repairs.', 
    aboutLink: 'Visit TRAD Official Website',
    services: 'SERVICES', articles: 'Articles & Tips', contact: 'Contact Us', book: 'Book Appointment', phoneHelper: 'Contact Us', schedule: 'Mon - Fri: 09.00 - 17.30 WIB', scheduleHelper: 'Sat: By appointment only (Booking)', aboutTitle: 'Anugerah Auto', aboutSubtitle: 'Trust Your Driving Comfort to the Experts', servicesCategory: 'Our Main Services', servicesTitle: 'Best Car Service Specialist in Jakarta', 
    // LAYANAN UTAMA (6 ITEM)
    service1: 'Suspension', 
    service2: 'Brake', 
    service3: 'Shock Absorber',
    service4: 'Battery', 
    service5: 'Oil', 
    service6: 'Tune Up',
    
    // LAYANAN CORPORATE
    corporateTitle: 'Corporate & Fleet Services',
    corporateSubtitle: 'Trusted Partner for Your Business Comfort and Safety',
    corporateDesc: 'Anugerah Auto also serves service needs for company fleets, online taxis (Grab/Gojek), travel agents, and logistics operators. Get special pricing, priority service, and quality assurance to maintain the performance of your business vehicles.',
    
    ctaTitle: 'Price information and consultation at the following number', ctaPhone: '0851-8605-4378', ctaHelper: 'FREE CONSULTATION SERVICE', articlesLabel: 'Articles & Tips', articlesTitle: 'Our Latest Articles', readMore: 'Read More', bookingTitle: 'Ready to Book Your Car Service?', bookingButton: 'BOOK NOW', footerSchedule: 'Mon - Fri: 08.00 - 17.30 WIB', footerScheduleHelper: 'Sat: By appointment only (Booking)', footerQuestion: 'Having Trouble Finding Our Workshop?', footerMap: 'VIEW MAP', copyright: '© Copyright 2025 Anugerah Auto. All Rights Reserved',
    
    // Keunggulan/Highlight
    highlightsTitle: 'Anugerah Auto Advantages',
    highlight1Icon: 'sparepart', highlight1Label: 'Complete Spare Parts', highlight1Desc: '5000+ SKUs available, ensuring the components you need are always in stock.',
    highlight2Icon: 'transparency', highlight2Label: 'Transparent Pricing & Work Process', highlight2Desc: 'We explain every step of the work and pricing details directly to the customer.',
    highlight3Icon: 'sofa', highlight3Label: 'Premium Waiting Facilities', highlight3Desc: 'Enjoy a comfortable AC Waiting Room, free Wi-Fi, Coffee, and Tea.',
    highlight4Icon: 'quality', highlight4Label: 'Guaranteed Product Quality', highlight4Desc: 'We only use trusted spare parts from Japan, Thailand, and reputable aftermarket suppliers.',
    highlight5Icon: 'guarantee', highlight5Label: 'After-Sales Service Guarantee', highlight5Desc: 'We provide a service guarantee for every repair performed at our workshop.',
    highlight6Icon: 'tv', highlight6Label: 'Live CCTV Monitoring', highlight6Desc: 'Watch your car\'s service process live via the monitor available in the waiting room.',
  }
};

// Computed property 'L' akan secara otomatis bereaksi terhadap perubahan props.locale
const L = computed(() => labels[props.locale]); 
</script>

<style scoped>
/* Anda dapat menempatkan CSS khusus di sini */
</style>