<template>
  <div class="w-full bg-white">

    <Carousel />

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
            <div 
              v-for="(service, idx) in [L.service1, L.service2, L.service3, L.service4, L.service5, L.service6]" 
              :key="idx" 
              @click="openModal(service)" 
              class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
            > 
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
            <div class="mb-6 mx-auto max-w-md"> 
                <img src="../assets/Corporate.png" alt="Corporate Services" class="w-full h-auto object-cover rounded-lg shadow-md"> 
            </div>
            <h4 class="text-2xl font-bold text-[#214791] mb-2">{{ L.corporateTitle }}</h4>
            <p class="text-lg font-semibold text-gray-700 mb-4">{{ L.corporateSubtitle }}</p>
            <p class="text-gray-600 mb-6 max-w-3xl mx-auto">{{ L.corporateDesc }}</p>
          </div>
          </div>
      </div>
    </section>

    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <span class="text-sm font-semibold uppercase tracking-wide" :style="{ color: '#EC2529' }">
          {{ L.brandsCategory }}
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          {{ L.brandsTitle }}
        </h2>
        <BrandCarousel :locale="props.locale" />
      </div>
    </section>
    <div class="w-full bg-[#2952A3] md:relative md:z-20 border-t border-gray-300"> 
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between py-3 md:py-4 text-white pointer-events-auto">
          
          <div class="flex-1 text-center md:text-left">
            <h3 class="text-lg md:text-xl font-bold mb-1">{{ L.ctaTitle }}</h3>
            <p class="text-sm text-blue-100 leading-tight">{{ L.ctaHelper }}</p>
          </div>
          
          <div class="flex-shrink-0 flex items-center justify-center mt-2 md:mt-0">
            <a 
              :href="'tel:' + L.ctaPhone.replace(/-/g, '')"
              class="flex items-center gap-1.5 bg-white rounded-full px-5 py-2 shadow-lg hover:shadow-xl transition-shadow" 
              style="min-width:140px;"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" style="color:#2952A3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div class="flex flex-col leading-tight">
                <span class="font-bold text-base text-[#2952A3]">{{ L.ctaPhone }}</span>
                <span class="text-[10px] text-[#2952A3]">{{ L.phoneHelper }}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <section id="artikel" class="py-16 bg-white">
      <div>
        <BlogList />
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
    
    <div v-if="isModalOpen" 
         @click.self="closeModal" 
         class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 transition-opacity duration-300">
      
      <div class="bg-white rounded-xl shadow-2xl max-w-lg w-full mx-auto transform transition-all duration-300 scale-100 p-8 relative">
        
        <button @click="closeModal" 
                class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors rounded-full p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div class="text-center mb-6">
          <div class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-brand-red p-4">
            <img 
                :src="modalContent.icon" 
                :alt="modalContent.title + ' icon'" 
                class="w-full h-full object-contain" 
            />
          </div>
          <h3 class="text-2xl font-bold text-gray-900">{{ modalContent.title }}</h3>
        </div>

        <div class="text-gray-700 text-justify">
          <p>{{ modalContent.description }}</p>
        </div>
      </div>
    </div>
    </template>

<script setup>
import { computed, ref } from 'vue';
import FasilitasOverlay from '../components/FasilitasOverlay.vue'
import Carousel from '../components/carousel.vue'
import BlogList from '../components/BlogList.vue'
import BrandCarousel from '../components/BrandCarousel.vue'

// --- START: Modal State & Functions ---
const isModalOpen = ref(false);
const modalContent = ref({
  title: '',
  icon: '', 
  description: 'Deskripsi layanan tidak tersedia.' 
});

const openModal = (serviceName) => {
  const serviceData = serviceDescriptions[props.locale].find(s => s.title === serviceName);
  
  if (serviceData) {
    modalContent.value.title = serviceData.title;
    modalContent.value.icon = getServiceIcon(serviceName); 
    modalContent.value.description = serviceData.description;
  } else {
    modalContent.value.title = serviceName;
    modalContent.value.icon = getServiceIcon(serviceName); 
    modalContent.value.description = 'Deskripsi rinci untuk layanan ini belum tersedia.';
  }
  
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden'; 
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = ''; 
};
// --- END: Modal State & Functions ---


// --- START: Helper Functions for Dynamic Assets ---

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
  // Menggunakan import.meta.url untuk path aset dinamis
  return new URL(`../assets/${fileName}`, import.meta.url).href; 
};

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
  // Menggunakan import.meta.url untuk path aset dinamis
  return new URL(`../assets/${fileName}`, import.meta.url).href; 
};

// --- END: Helper Functions for Dynamic Assets ---

const props = defineProps({
  locale: {
    type: String,
    required: true,
    default: 'id' 
  }
});


// --- START: Service Descriptions (Tambahkan data deskripsi layanan) ---
const serviceDescriptions = {
  id: [
    { title: 'Suspensi', description: 'Suspensi merupakan sistem kaki-kaki vital yang berfungsi meredam getaran dan menjaga stabilitas kendaraan. Kami menyediakan layanan spooring 3D, balancing, dan perbaikan/penggantian komponen suspensi mobil Anda, mulai dari shock absorber, per, hingga bushing, untuk menjamin kenyamanan dan keamanan berkendara.' },
    { title: 'Rem', description: 'Sistem rem yang optimal adalah kunci keselamatan. Kami menawarkan servis komprehensif mulai dari pengecekan ketebalan kampas, penggantian minyak rem, hingga perbaikan master rem dan disc brake untuk memastikan pengereman responsif dan aman dalam segala kondisi.' },
    { title: 'Shock Absorber', description: 'Shock absorber (peredam kejut) bertugas mengendalikan osilasi per. Kami spesialis dalam diagnosa dan penggantian shock absorber yang sudah lemah atau bocor, menggunakan suku cadang berkualitas untuk mengembalikan kenyamanan dan handling mobil Anda.' },
    { title: 'Baterai', description: 'Baterai mobil adalah sumber daya utama. Kami menyediakan layanan pengecekan tegangan, pembersihan terminal, dan penggantian baterai baru dengan berbagai pilihan merek terpercaya, memastikan mobil Anda selalu siap dihidupkan.' },
    { title: 'Oli', description: 'Penggantian oli secara berkala sangat penting untuk kesehatan mesin. Kami menyediakan berbagai jenis oli mesin, oli transmisi, dan cairan lainnya sesuai spesifikasi pabrikan mobil Anda, lengkap dengan filter oli berkualitas.' },
    { title: 'Tune Up', description: 'Tune Up adalah perawatan berkala untuk mengembalikan performa mesin. Layanan ini meliputi pembersihan throttle body, pengecekan busi, filter udara, dan sistem injeksi, agar konsumsi bahan bakar lebih efisien dan tenaga kembali optimal.' },
  ],
  en: [
    { title: 'Suspension', description: 'Suspension is a vital chassis system that functions to absorb vibrations and maintain vehicle stability. We provide 3D wheel alignment, balancing, and repair/replacement services for your car\'s suspension components, from shock absorbers and springs to bushings, to ensure driving comfort and safety.' },
    { title: 'Brake', description: 'Optimal braking system is the key to safety. We offer comprehensive services ranging from checking pad thickness, replacing brake fluid, to repairing master brakes and disc brakes to ensure responsive and safe braking in all conditions.' },
    { title: 'Shock Absorber', description: 'Shock absorbers control spring oscillations. We specialize in diagnosing and replacing weak or leaky shock absorbers, using quality parts to restore your car\'s comfort and handling.' },
    { title: 'Battery', description: 'The car battery is the main power source. We provide voltage checking, terminal cleaning, and new battery replacement with various trusted brands, ensuring your car is always ready to start.' },
    { title: 'Oil', description: 'Regular oil changes are essential for engine health. We provide various types of engine oil, transmission oil, and other fluids according to your car\'s manufacturer specifications, complete with quality oil filters.' },
    { title: 'Tune Up', description: 'A Tune Up is periodic maintenance to restore engine performance. This service includes cleaning the throttle body, checking spark plugs, air filters, and the injection system, to make fuel consumption more efficient and power optimal again.' },
  ]
};
// --- END: Service Descriptions ---


// --- START: Language Labels Configuration ---

const labels = {
  id: {
    country: 'Indonesia', 
    home: 'Beranda', 
    about: 'Tentang Kami', 
    aboutDesc1: 'Anugerah Auto adalah bengkel spesialis kaki-kaki mobil yang berdedikasi untuk mengutamakan kesehatan dan kenyamanan Anda. Sebagai bagian dari PT Timur Raya Anugerah Damai (TRAD), kami membawa pengalaman dan standar kualitas yang tinggi dalam setiap layanan. Anugerah Auto telah berpengalaman sebagai bengkel spesialis kaki-kaki mobil di Jakarta selama bertahun-tahun, menawarkan layanan spooring 3D, balancing, dan perbaikan komponen suspensi mobil dengan menggunakan peralatan canggih dan teknisi berpengalaman.', 
    aboutDesc2: 'Kami memahami pentingnya sistem kaki-kaki yang berfungsi dengan baik untuk keselamatan dan kenyamanan berkendara Anda. Dengan tim mekanik profesional yang ahli di bidangnya, kami siap memberikan solusi terbaik untuk setiap masalah kaki-kaki mobil Anda, dari diagnosa hingga perbaikan yang tepat dan akurat.', 
    aboutLink: 'Kunjungi Web Resmi TRAD', 
    services: 'LAYANAN', 
    articles: 'Artikel & Tips', 
    contact: 'Kontak Kami', 
    book: 'Book Appointment', 
    phoneHelper: 'Hubungi Kami', 
    schedule: 'Senin - Jumat: 09.00 - 17.30 WIB', 
    scheduleHelper: 'Sabtu: Hanya dengan Janji Temu (Booking)', 
    aboutTitle: 'Anugerah Auto', 
    aboutSubtitle: 'Percayakan Kenyamanan Berkendara Anda Pada Ahlinya', 
    servicesCategory: 'Layanan Utama Kami', 
    servicesTitle: 'Spesialisasi Service Mobil Terbaik Di Jakarta', 
    service1: 'Suspensi', 
    service2: 'Rem', 
    service3: 'Shock Absorber',
    service4: 'Baterai', 
    service5: 'Oli', 
    service6: 'Tune Up',
    brandsCategory: 'Merek Yang Kami Layani', 
    brandsTitle: 'Bengkel Spesialis Multi-Brand Pilihan Anda', 
    corporateTitle: 'Layanan Corporate & Armada',
    corporateSubtitle: 'Mitra Terpercaya untuk Kenyamanan dan Keamanan Bisnis Anda', 
    corporateDesc: 'Anugerah Auto juga melayani kebutuhan servis untuk armada perusahaan, taksi online (Grab/Gojek), travel agent, dan operator logistik. Dapatkan harga khusus, prioritas layanan, dan jaminan kualitas untuk menjaga performa kendaraan operasional bisnis Anda.',
    ctaTitle: 'Info harga dan konsultasi di nomor berikut', 
    ctaPhone: '0851-8605-4378', 
    ctaHelper: 'GRATIS JASA KONSULTASI', 
    articlesLabel: 'Artikel & Tips', 
    articlesTitle: 'Artikel Terbaru Kami', 
    readMore: 'Selengkapnya', 
    bookingTitle: 'Siap Memesan Jadwal Service Mobil Anda?', 
    bookingButton: 'PESAN JADWAL SEKARANG', 
    footerSchedule: 'Senin - Jumat: 08.00 - 17.30 WIB', 
    footerScheduleHelper: 'Sabtu: Hanya dengan Janji Temu (Booking)', 
    footerQuestion: 'Kesulitan Menemukan Lokasi Bengkel Kami?', 
    footerMap: 'LIHAT PETA', 
    copyright: '© Copyright 2025 Anugerah Auto. All Rights Reserved',
    highlightsTitle: 'Keunggulan Anugerah Auto',
    highlight1Icon: 'sparepart', 
    highlight1Label: 'Suku Cadang Lengkap', 
    highlight1Desc: 'Tersedia 5000+ SKU suku cadang, memastikan ketersediaan komponen yang Anda butuhkan.',
    highlight2Icon: 'transparency', 
    highlight2Label: 'Transparansi Pengerjaan & Harga', 
    highlight2Desc: 'Kami menjelaskan setiap langkah pengerjaan dan rincian harga secara langsung kepada Anda.',
    highlight3Icon: 'sofa', 
    highlight3Label: 'Fasilitas Ruang Tunggu Premium', 
    highlight3Desc: 'Nikmati Ruang Tunggu nyaman ber-AC, Wi-Fi gratis, serta Kopi & Teh cuma-cuma.',
    highlight4Icon: 'quality', 
    highlight4Label: 'Kualitas Produk Terjamin', 
    highlight4Desc: 'Hanya menggunakan sparepart dari Jepang, Thailand, dan aftermarket terpercaya.',
    highlight5Icon: 'guarantee', 
    highlight5Label: 'Jaminan Layanan Purna Jual', 
    highlight5Desc: 'Kami memberikan jaminan service untuk setiap perbaikan yang dilakukan di bengkel kami.',
    highlight6Icon: 'tv', 
    highlight6Label: 'Live CCTV Monitoring', 
    highlight6Desc: 'Saksikan langsung proses pengerjaan mobil Anda melalui monitor yang tersedia di ruang tunggu.',
  },
  en: {
    country: 'Indonesia', 
    home: 'Home', 
    about: 'About Us', 
    aboutDesc1: 'Anugerah Auto is a specialist car suspension workshop dedicated to prioritizing your health and comfort. As a part of PT Timur Raya Anugerah Damai (TRAD), we bring high experience and quality standards to every service. With years of experience as a car suspension specialist in Jakarta, Anugerah Auto offers 3D spooring, balancing, and suspension component repair services using advanced equipment and experienced technicians.', 
    aboutDesc2: 'We understand the importance of a well-functioning suspension system for your safety and driving comfort. With a team of professional mechanics who are experts in their field, we are ready to provide the best solutions for any suspension problems, from diagnosis to precise and accurate repairs.', 
    aboutLink: 'Visit TRAD Official Website',
    services: 'SERVICES', 
    articles: 'Articles & Tips', 
    contact: 'Contact Us', 
    book: 'Book Appointment', 
    phoneHelper: 'Contact Us', 
    schedule: 'Mon - Fri: 09.00 - 17.30 WIB', 
    scheduleHelper: 'Sat: By appointment only (Booking)', 
    aboutTitle: 'Anugerah Auto', 
    aboutSubtitle: 'Trust Your Driving Comfort to the Experts', 
    servicesCategory: 'Our Main Services', 
    servicesTitle: 'Best Car Service Specialist in Jakarta', 
    service1: 'Suspension', 
    service2: 'Brake', 
    service3: 'Shock Absorber',
    service4: 'Battery', 
    service5: 'Oil', 
    service6: 'Tune Up',
    brandsCategory: 'Brands We Serve', 
    brandsTitle: 'Your Multi-Brand Specialist Workshop', 
    corporateTitle: 'Corporate & Fleet Services',
    corporateSubtitle: 'Trusted Partner for Your Business Comfort and Safety',
    corporateDesc: 'Anugerah Auto also serves service needs for company fleets, online taxis (Grab/Gojek), travel agents, and logistics operators. Get special pricing, priority service, and quality assurance to maintain the performance of your business vehicles.',
    ctaTitle: 'Price information and consultation at the following number', 
    ctaPhone: '0851-8605-4378', 
    ctaHelper: 'FREE CONSULTATION SERVICE', 
    articlesLabel: 'Articles & Tips', 
    articlesTitle: 'Our Latest Articles', 
    readMore: 'Read More', 
    bookingTitle: 'Ready to Book Your Car Service?', 
    bookingButton: 'BOOK NOW', 
    footerSchedule: 'Mon - Fri: 08.00 - 17.30 WIB',
    footerScheduleHelper: 'Sat: By appointment only (Booking)', 
    footerQuestion: 'Having Trouble Finding Our Workshop?', 
    footerMap: 'VIEW MAP', 
    copyright: '© Copyright 2025 Anugerah Auto. All Rights Reserved',
    highlightsTitle: 'Anugerah Auto Advantages',
    highlight1Icon: 'sparepart', 
    highlight1Label: 'Complete Spare Parts', 
    highlight1Desc: '5000+ SKUs available, ensuring the components you need are always in stock.',
    highlight2Icon: 'transparency', 
    highlight2Label: 'Transparent Pricing & Work Process',
    highlight2Desc: 'We explain every step of the work and pricing details directly to the customer.',
    highlight3Icon: 'sofa', 
    highlight3Label: 'Premium Waiting Facilities', 
    highlight3Desc: 'Enjoy a comfortable AC Waiting Room, free Wi-Fi, Coffee, and Tea.',
    highlight4Icon: 'quality', 
    highlight4Label: 'Guaranteed Product Quality', 
    highlight4Desc: 'We only use trusted spare parts from Japan, Thailand, and reputable aftermarket suppliers.',
    highlight5Icon: 'guarantee', 
    highlight5Label: 'After-Sales Service Guarantee', 
    highlight5Desc: 'We provide a service guarantee for every repair performed at our workshop.',
    highlight6Icon: 'tv', 
    highlight6Label: 'Live CCTV Monitoring', 
    highlight6Desc: 'Watch your car\'s service process live via the monitor available in the waiting room.',
  }
};

// --- END: Language Labels Configuration ---

const L = computed(() => labels[props.locale]); 
</script>

<style scoped>
/* Anda dapat menambahkan gaya kustom di sini jika diperlukan */
</style>