<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 bg-brand-blue rounded-lg shadow-xl overflow-hidden">
    <div v-for="(item, index) in fasilitas" :key="index" 
         class="p-4 text-center text-white border-r border-brand-blue-light/50 last:border-r-0">
      
      <div class="mx-auto mb-2 w-8 h-8 flex items-center justify-center">
        <svg v-if="item.icon === 'wifi'" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.197A4.27 4.27 0 0012.001 16a4.27 4.27 0 003.713-1.077M19.98 9a9.98 9.98 0 00-15.96 0m19.98 0l.02.04M4.02 9l-.02.04m11.166 3.023a.25.25 0 010 .385l-1.57 1.57a.25.25 0 01-.354 0l-1.57-1.57a.25.25 0 010-.385l1.57-1.57a.25.25 0 01.354 0l1.57 1.57zM12 12a3 3 0 100-6 3 3 0 000 6zM5 12h14" /></svg>
        <svg v-else-if="item.icon === 'sofa'" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2v-2a2 2 0 00-2-2zM5 15h14M19 11v-3a2 2 0 00-2-2H7a2 2 0 00-2 2v3" /></svg>
        <svg v-else-if="item.icon === 'snack'" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z" /></svg>
        <svg v-else-if="item.icon === 'dropoff'" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0zM19 12a7 7 0 10-14 0 7 7 0 0014 0z" /></svg>
        <svg v-else-if="item.icon === 'tv'" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 19v-2a2 2 0 012-2h10a2 2 0 012 2v2M5 19h14M19 5v12a2 2 0 01-2 2H7a2 2 0 01-2-2V5m14 0h-4M5 5h4" /></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>

      <p class="text-xs font-semibold">{{ item.label }}</p>
      <p class="text-xs opacity-75">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup>
// Daftar fasilitas dan ikon
const fasilitas = [
  { icon: 'wifi', label: 'Wi-Fi', description: 'gratis' },
  { icon: 'sofa', label: 'Ruang Tunggu', description: 'Nyaman & Ber-AC' },
  { icon: 'snack', label: 'Beverages', description: 'and Snacks' },
  { icon: 'dropoff', label: 'Layanan Drop-Off', description: 'di Luar Jam Kerja' },
  { icon: 'tv', label: 'Tersedia Fasilitas', description: 'Hiburan' },
];
</script>

<style scoped>
/* Anda mungkin perlu mendefinisikan warna kustom ini di tailwind.config.js */
.bg-brand-blue {
  background-color: #214791;
}
</style>