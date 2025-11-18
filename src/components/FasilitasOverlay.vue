<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 bg-brand-blue rounded-lg shadow-xl overflow-hidden">
    <div
      v-for="(item, index) in fasilitas"
      :key="index"
      class="p-4 text-center text-white border-r border-brand-blue-light/50 last:border-r-0"
    >
      <div class="mx-auto mb-2 w-8 h-8 flex items-center justify-center">
        <img
          :src="getIcon(item.icon)"
          alt="icon"
          class="w-full h-full object-contain"
        />
      </div>

      <p class="text-xs font-semibold">{{ item.label }}</p>
      <p class="text-xs opacity-75">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup>
const getIcon = (iconName) => {
  // mapping nama icon ke file png di /src/assets
  const iconMap = {
    wifi: "free wifi.png",
    sofa: "waiting room.png", 
    tv: "entertaiment.png", 
    sparepart: "sparepart.png", 
    transparency: "Transparency.png", 
    quality: "Quality.png", 
  };

  const fileName = iconMap[iconName] || "default.png"; // fallback
  return new URL(`../assets/${fileName}`, import.meta.url).href;
};

import { computed, defineProps } from 'vue';

const props = defineProps({
  locale: {
    type: String,
    required: false,
    default: 'id'
  }
});

const fasilitasLabels = {
  id: [
    { icon: 'wifi', label: 'Wi-Fi', description: 'Gratis' },
    { icon: 'sofa', label: 'Ruang Tunggu', description: 'Nyaman, Ber-AC, Kopi & Teh Gratis' },
    { icon: 'tv', label: 'Pemantauan CCTV', description: 'Tersedia Live Streaming' },
    { icon: 'sparepart', label: 'Suku Cadang', description: 'Lengkap (5000+ SKU)' },
    { icon: 'transparency', label: 'Transparansi', description: 'Pengerjaan & Harga' },
    { icon: 'quality', label: 'Kualitas & Garansi', description: 'Sparepart Terpercaya & Jaminan Service' },
  ],
  en: [
    { icon: 'wifi', label: 'Wi-Fi', description: 'Free' },
    { icon: 'sofa', label: 'Waiting Room', description: 'Comfortable, AC, Free Coffee & Tea' },
    { icon: 'tv', label: 'Live CCTV Monitoring', description: 'Live Streaming Available' },
    { icon: 'sparepart', label: 'Spare Parts', description: 'Complete (5000+ SKUs)' },
    { icon: 'transparency', label: 'Transparency', description: 'Work Process & Pricing' },
    { icon: 'quality', label: 'Quality & Guarantee', description: 'Trusted Parts & Service Warranty' },
  ]
};

const fasilitas = computed(() => fasilitasLabels[props.locale]);
</script>

<style scoped>
.bg-brand-blue {
  background-color: #214791;
}
</style>