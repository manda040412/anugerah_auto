<template>
  <div class="relative w-full max-w-7xl mx-auto py-8">
    <div class="overflow-hidden">
      <div 
        class="flex transition-transform duration-500 ease-in-out" 
        :style="{ transform: `translateX(-${currentOffset}px)` }" 
      >
        <div 
          v-for="(brand, index) in infiniteBrands" 
          :key="index" 
          ref="brandItem" 
          class="flex-none p-4" 
          :style="{ width: `${itemWidth}px` }"
        >
          <div class="bg-white rounded-lg shadow-md p-4 flex items-center justify-center h-32 w-full"> 
            <img :src="getBrandLogo(brand.logo)" :alt="brand.name" class="max-h-24 max-w-full object-contain" /> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';

const props = defineProps({
  locale: {
    type: String,
    required: true,
    default: 'id'
  }
});

const brands = ref([
  { name: 'Lexus', logo: 'lexus.png' },
  { name: 'Mazda', logo: 'mazda.png' },
  { name: 'Isuzu', logo: 'isuzu.png' },
  { name: 'Daihatsu', logo: 'daihatsu.png' },
  { name: 'Suzuki', logo: 'suzuki.png' },
  { name: 'Nissan', logo: 'nissan.png' },
  { name: 'Mitsubishi', logo: 'mitsubishi.png' },
  { name: 'Toyota', logo: 'toyota.png' },
]);

const brandItem = ref([]); // Untuk mendapatkan referensi DOM dari item carousel
const itemWidth = ref(0);
const currentOffset = ref(0);
const autoplayInterval = ref(null);
const animationFrame = ref(null);
const animationStartTime = ref(0);

// Untuk membuat efek loop tak terbatas, kita akan menduplikasi brand
const infiniteBrands = computed(() => {
  // Duplikasi brand agar ada cukup item untuk digulir terus menerus
  // Ini adalah pendekatan sederhana, bisa dioptimalkan lebih lanjut
  return [...brands.value, ...brands.value, ...brands.value]; 
});

const getBrandLogo = (logoName) => {
  return new URL(`../assets/${logoName}`, import.meta.url).href;
};

// Fungsi untuk menghitung lebar item berdasarkan itemsPerPage
const updateItemWidth = () => {
  // Catatan: Jika tidak ada elemen dengan kelas '.max-w-7xl.mx-auto' 
  // di HomeView.vue yang mengelilingi BrandCarousel, Anda mungkin perlu menyesuaikan
  // cara mendapatkan lebar container, atau mengubah kelas container di HomeView.vue.
  const container = document.querySelector('.max-w-7xl.mx-auto');
  if (!container) return; // Guard clause
  
  const carouselContainerWidth = container.offsetWidth;
  let calculatedItemsPerPage = 4; // Default untuk desktop

  if (window.innerWidth < 640) { 
    calculatedItemsPerPage = 2;
  } else if (window.innerWidth < 1024) { 
    calculatedItemsPerPage = 3;
  } 

  // Lebar item adalah lebar container dibagi jumlah item per halaman
  // Padding item (p-4 = 16px) diperhitungkan dalam total lebar container.
  itemWidth.value = (carouselContainerWidth / calculatedItemsPerPage) ; 
};

const animateScroll = (timestamp) => {
  if (!animationStartTime.value) animationStartTime.value = timestamp;
  const elapsed = timestamp - animationStartTime.value;
  const duration = 500; // Durasi transisi per item dalam ms

  // Calculate the target offset
  const targetOffset = (Math.floor(currentOffset.value / itemWidth.value) + 1) * itemWidth.value;

  // Simple linear interpolation
  currentOffset.value = Math.min(targetOffset, currentOffset.value + (itemWidth.value / duration) * elapsed);
  
  if (currentOffset.value < targetOffset) {
    animationFrame.value = requestAnimationFrame(animateScroll);
  } else {
    // Reset if we've scrolled past the original brands set
    if (currentOffset.value >= brands.value.length * itemWidth.value) {
      currentOffset.value = currentOffset.value - brands.value.length * itemWidth.value;
    }
    animationStartTime.value = 0; // Reset start time for next animation
    startAutoplay(); // Start interval again after a smooth scroll
  }
};


const startAutoplay = () => {
  stopAutoplay();
  autoplayInterval.value = setInterval(() => {
    // Memulai transisi halus ke item berikutnya
    animationStartTime.value = 0; // Reset start time
    animationFrame.value = requestAnimationFrame(animateScroll);
  }, 3000); // Waktu antara setiap pergerakan (3 detik)
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
  }
  if (animationFrame.value) {
    cancelAnimationFrame(animationFrame.value);
    animationFrame.value = null;
  }
};

onMounted(() => {
  // Tunggu DOM dirender sebelum menghitung lebar item
  nextTick(() => {
    updateItemWidth();
    startAutoplay(); 
  });
  window.addEventListener('resize', () => {
    updateItemWidth();
    // Reset offset agar tidak error jika ukuran layar berubah
    currentOffset.value = 0; 
    stopAutoplay();
    startAutoplay();
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', updateItemWidth);
  stopAutoplay();
});
</script>

<style scoped>
/* Anda bisa menambahkan gaya kustom di sini jika diperlukan */
</style>