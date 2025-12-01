<script setup>
import { ref } from 'vue';
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
import Home from './pages/home.vue';

const currentLocale = ref('id'); 

const setLocale = (newLocale) => {
  currentLocale.value = newLocale === 'en' ? 'en' : 'id';
};
</script>

<template>
  <div id="app" class="font-inter">
    <Navbar 
      :locale="currentLocale" 
      @update-locale="setLocale" 
    />
    
    <main>
      <router-view v-slot="{ Component }">
        <component :is="Component" :locale="currentLocale" />
      </router-view>
    </main>

    <Footer :locale="currentLocale" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
.font-inter { font-family: 'Inter', sans-serif; }
</style>