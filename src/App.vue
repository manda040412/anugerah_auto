<script setup>
import { ref } from 'vue';
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
import Home from './pages/home.vue';

// State global untuk bahasa
const currentLocale = ref('id'); 

// Fungsi untuk memperbarui state locale (dipanggil dari Navbar)
const setLocale = (newLocale) => {
  // Hanya menerima 'en' atau default ke 'id'
  currentLocale.value = newLocale === 'en' ? 'en' : 'id';
};
</script>

<template>
  <div id="app" class="font-inter">
    <!-- Navbar menerima locale untuk highlighting tombol dan meng-emit event untuk perubahan -->
    <Navbar 
      :locale="currentLocale" 
      @update-locale="setLocale" 
    />
    
    <main>
      <!-- Home menerima locale sebagai prop untuk menampilkan konten yang benar -->
      <Home :locale="currentLocale" />
    </main>

    <!-- Footer juga bisa menerima locale untuk terjemahan -->
    <Footer :locale="currentLocale" />
  </div>
</template>

<style>
/* Base styles (dapat dihapus jika Anda menggunakan Tailwind CSS) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
.font-inter { font-family: 'Inter', sans-serif; }
</style>