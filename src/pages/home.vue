<template>
  <div class="w-full bg-white">
    <Carousel />

    <div class="absolute bottom-0 w-full z-0 mb-4 hidden sm:block">
      <div class="max-w-7xl mx-auto px-4">
        <FasilitasOverlay :locale="props.locale" />
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

    <section id="promo" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <span class="text-sm font-semibold uppercase tracking-wide" :style="{ color: '#EC2529' }">
            {{ L.promoCategory }}
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            {{ L.promoTitle }}
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            {{ L.promoSubtitle }}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="promo in promos" 
            :key="promo.id"
            @click="openPromoModal(promo)"
            class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
          >
            <!-- Badge Promo -->
            <div class="relative">
              <div class="absolute top-4 left-4 z-10">
                <span class="px-3 py-1 text-xs font-bold text-white rounded-full" 
                      :style="{ backgroundColor: getPromoBadgeColor(promo.type) }">
                  {{ getPromoTypeLabel(promo.type) }}
                </span>
              </div>
              
              <!-- Gambar Promo -->
              <div class="h-48 overflow-hidden">
                <img 
                  :src="getPromoImage(promo.image)" 
                  :alt="promo.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <!-- Konten Promo -->
            <div class="p-6">
              <div class="flex justify-between items-start mb-3">
                <h3 class="text-xl font-bold text-gray-900">{{ promo.title }}</h3>
                <span class="text-2xl font-bold" :style="{ color: '#EC2529' }">
                  {{ promo.discount }}
                </span>
              </div>
              
              <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                {{ promo.shortDescription }}
              </p>
              
              <div class="flex items-center justify-between">
                <div class="text-sm text-gray-500">
                  <span class="line-through mr-2">{{ promo.originalPrice }}</span>
                  <span class="font-bold text-gray-900">{{ promo.discountedPrice }}</span>
                </div>
                
                <button class="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                        :style="{ 
                          backgroundColor: '#214791', 
                          color: 'white'
                        }"
                        @click.stop="openPromoModal(promo)">
                  {{ L.promoButton }}
                </button>
              </div>
              
              <!-- Masa Berlaku -->
              <div class="mt-4 pt-4 border-t border-gray-100">
                <div class="flex items-center text-xs text-gray-500">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>{{ L.promoValid }}: {{ promo.validUntil }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tombol Lihat Semua Promo -->
        <div class="text-center mt-12">
          <button class="px-8 py-3 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                  :style="{ backgroundColor: '#EC2529' }"
                  @click="showAllPromos">
            {{ L.promoSeeAll }}
          </button>
        </div>
      </div>
    </section>

    <section id="testimoni" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 text-center">
        
        <span class="text-sm font-semibold uppercase tracking-wide" :style="{ color: '#EC2529' }">
          {{ L.testimonyCategory }}
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          {{ L.testimonyTitle }}
        </h2>

        <!-- Container untuk auto-scroll dengan hover pause -->
        <div
          ref="scrollContainer"
          @mouseenter="pauseAutoScroll"
          @mouseleave="startAutoScroll"
          class="overflow-x-auto md:overflow-hidden pb-4 md:pb-0 hide-scrollbar"
          style="scroll-behavior: smooth;"
        >
          
          <div class="flex gap-6 w-fit md:w-full">
            
            <a 
              v-for="(testi, index) in allTestimonials" 
              :key="index" 
              :href="L.googleReviewLink" 
              target="_blank" 
              rel="noopener noreferrer"
              class="snap-center flex-shrink-0 w-[85vw] sm:w-[50vw] lg:w-[calc(33.333%-12px)] bg-white rounded-xl shadow-xl p-6 text-left border border-gray-100 relative cursor-pointer hover:shadow-2xl transition-shadow transform hover:scale-[1.01]"
            >
              
              <span class="absolute top-4 right-4 text-6xl font-serif leading-none text-blue-300 opacity-50" style="color: '#214791';">"</span>

              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-gray-300 rounded-full mr-3 flex items-center justify-center overflow-hidden">
                    <img v-if="testi.image" 
                         :src="getAvatarContent(testi.image)" 
                         :alt="testi.name" 
                         class="w-full h-full object-cover" 
                    />
                    <span v-else class="text-white font-bold text-xl">{{ getAvatarContent(testi.name) }}</span>
                </div>
                <div>
                  <p class="font-bold text-gray-900">{{ testi.name }}</p>
                  <p class="text-sm text-gray-600">Review Google</p>
                </div>
              </div>

              <p class="text-gray-700 text-sm leading-relaxed pr-6 whitespace-pre-line">
                {{ testi.isi }}
              </p>

            </a>
            
          </div>
        </div>
        
        <!-- Dot indicator untuk navigasi - MAKSIMAL 4 DOT -->
        <div class="flex justify-center mt-8 space-x-2">
          <button
            v-for="(_, index) in visibleTestimonialGroups"
            :key="index"
            @click="scrollToIndex(index)"
            class="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none"
            :class="{
              'bg-brand-red scale-125': currentGroupIndex === index,
              'bg-gray-300 hover:bg-gray-400': currentGroupIndex !== index
            }"
            :aria-label="`Go to testimonial group ${index + 1}`"
          ></button>
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
              :href="'https://wa.me/6285186054378'" 
              target="_blank"
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
          <a href="https://wa.me/6285186054378" target="_blank" class="px-6 py-2 rounded-lg font-bold text-[#214791] text-sm border-2 border-[#214791] bg-white hover:bg-[#214791] hover:text-white transition-colors">
            {{ L.bookingButton }}
          </a>
        </div>
      </div>
    </section>

    <!-- MODAL PROMO -->
    <div v-if="isPromoModalOpen" 
      @click.self="closePromoModal" 
      class="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black bg-opacity-70 transition-opacity duration-300">
      
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-auto transform transition-all duration-300 scale-100 max-h-[90vh] overflow-hidden flex flex-col">
        
        <!-- Header Modal - Compact -->
        <div class="p-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 text-xs font-bold text-white rounded-full shrink-0"
                  :style="{ backgroundColor: getPromoBadgeColor(selectedPromo?.type) }">
              {{ getPromoTypeLabel(selectedPromo?.type) }}
            </span>
            <h3 class="text-xl font-bold text-gray-900 truncate">{{ selectedPromo?.title }}</h3>
          </div>
          <button @click="closePromoModal" 
                  class="text-gray-400 hover:text-gray-600 transition-colors rounded-full p-1">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Content Modal - Scrollable -->
        <div class="flex-1 overflow-y-auto p-6">
          <!-- Gambar Promo -->
          <div class="mb-6">
            <div class="h-48 md:h-56 rounded-lg overflow-hidden mb-4">
              <img 
                :src="getPromoImage(selectedPromo?.image)" 
                :alt="selectedPromo?.title"
                class="w-full h-full object-cover"
              />
            </div>
            
            <!-- Harga Box -->
            <div class="bg-gray-50 rounded-lg p-4 mb-6">
              <div class="flex items-center justify-between mb-2">
                <div>
                  <div class="text-sm text-gray-600">{{ L.promoOriginalPrice }}</div>
                  <div class="text-lg line-through text-gray-500">{{ selectedPromo?.originalPrice }}</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold" :style="{ color: '#EC2529' }">
                    {{ selectedPromo?.discountedPrice }}
                  </div>
                  <div class="text-xs text-gray-600 mt-1">{{ L.promoDiscountedPrice }}</div>
                </div>
                <div class="text-right">
                  <div class="px-3 py-1 rounded-full text-white text-sm font-bold inline-block"
                       :style="{ backgroundColor: '#EC2529' }">
                    {{ selectedPromo?.discount }} OFF
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Detail Promo - Single Column -->
          <div>
            <!-- Deskripsi -->
            <div class="mb-6">
              <h4 class="text-lg font-bold text-gray-900 mb-3">{{ L.promoDetails }}</h4>
              <p class="text-gray-700 text-sm leading-relaxed">{{ selectedPromo?.fullDescription }}</p>
            </div>

            <!-- What's Included -->
            <div class="mb-6">
              <h5 class="font-bold text-gray-900 mb-2 flex items-center">
                <svg class="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {{ L.promoIncludes }}
              </h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div v-for="(item, index) in selectedPromo?.includes" :key="index" 
                     class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-700">{{ item }}</span>
                </div>
              </div>
            </div>

            <!-- Terms & Conditions -->
            <div class="mb-6">
              <h5 class="font-bold text-gray-900 mb-2 flex items-center">
                <svg class="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                {{ L.promoTerms }}
              </h5>
              <ul class="space-y-2">
                <li v-for="(term, index) in selectedPromo?.terms" :key="index" 
                    class="flex items-start">
                  <svg class="w-4 h-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-700">{{ term }}</span>
                </li>
              </ul>
            </div>

            <!-- Info Tambahan -->
            <div class="bg-gray-50 rounded-lg p-4 mb-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                       :style="{ backgroundColor: '#E8F0FB' }">
                    <svg class="w-5 h-5" :style="{ color: '#214791' }" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="text-xs text-gray-500">{{ L.promoValid }}</div>
                    <div class="font-bold text-gray-900">{{ selectedPromo?.validUntil }}</div>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                       :style="{ backgroundColor: '#E8F0FB' }">
                    <svg class="w-5 h-5" :style="{ color: '#214791' }" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="text-xs text-gray-500">{{ L.promoDuration }}</div>
                    <div class="font-bold text-gray-900">{{ selectedPromo?.serviceDuration }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons - Fixed at Bottom -->
        <div class="p-6 border-t border-gray-200 bg-white sticky bottom-0">
          <div class="flex flex-col sm:flex-row gap-3">
            <!-- Tombol Booking via WhatsApp -->
            <a 
              :href="getWhatsAppLink(selectedPromo)"
              target="_blank"
              class="flex-1 px-6 py-3 text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center order-2 sm:order-1 no-underline"
              :style="{ backgroundColor: '#EC2529' }">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              {{ L.promoBookNow }}
            </a>
            
            <button 
              @click="sharePromo(selectedPromo)"
              class="flex-1 px-6 py-3 font-bold rounded-lg border transition-colors flex items-center justify-center order-1 sm:order-2"
              :style="{ 
                borderColor: '#214791',
                color: '#214791'
              }"
              :class="{
                'hover:bg-blue-50': true
              }">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
              </svg>
              {{ L.promoShare }}
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="isModalOpen" 
      @click.self="closeModal" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 transition-opacity duration-300">
      
      <div class="bg-white rounded-xl shadow-2xl max-w-lg w-full mx-auto transform transition-all duration-300 scale-100 p-8 relative">
        
        <button @click="closeModal" 
                class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors rounded-full p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div class="text-center mb-6">
          <div class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-red-600 p-4">
            <img 
                :src="modalContent.icon" 
                :alt="modalContent.title + ' icon'" 
                class="w-full h-full object-contain" 
            />
          </div>
          <h3 class="text-2xl font-bold text-gray-900">{{ modalContent.title }}</h3>
        </div>

        <div class="text-gray-700 text-justify mb-8">
          <p>{{ modalContent.description }}</p>
        </div>

        <div class="text-center">
          <a href="https://tranugerah.com/product/" 
             target="_blank" 
             class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors duration-200">
            Info Selengkapnya 
            <svg class="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import FasilitasOverlay from '../components/FasilitasOverlay.vue'
import Carousel from '../components/carousel.vue'
import BlogList from '../components/BlogList.vue'
import BrandCarousel from '../components/BrandCarousel.vue'

// --- START: PROMO DATA ---
const promos = ref([
  {
    id: 1,
    type: 'package',
    title: 'Gratis Pengecekan 30 Titik / Free 30-Point Inspection',
    discount: '',
    originalPrice: '',
    discountedPrice: 'Gratis',
    image: 'promo1.jpg',
    shortDescription: 'Paket lengkap service berkala termasuk ganti oli mesin, filter, dan pengecekan kaki-kaki serta rem hingga 30 titik.',
    fullDescription: 'Dapatkan paket service berkala lengkap dengan diskon 40%! Paket ini termasuk penggantian oli mesin premium, filter oli, serta gratis pengecekan kaki-kaki dan sistem rem hingga 30 titik. Juga mencakup pemeriksaan suspensi, baterai, dan laporan kondisi kendaraan Anda. Cocok untuk mobil yang telah mencapai 10.000 km atau 6 bulan pemakaian.',
    includes: [
      'Ganti oli mesin premium',
      'Ganti filter oli',
      'Gratis pengecekan kaki-kaki dan rem hingga 30 titik',
      'Inspeksi suspensi',
      'Cek kondisi baterai',
      'Laporan kondisi kendaraan'
    ],
    terms: [
      'Promo berlaku untuk semua merek mobil',
      'Hanya berlaku di cabang Anugerah Auto Sunter',
      'Harus melakukan booking terlebih dahulu',
      'Tidak dapat digabungkan dengan promo lain',
      'Masa berlaku promo hingga 31 Desember 2025'
    ],
    validUntil: '31 Des 2025',
    serviceDuration: '2-3 jam'
  },
  {
    id: 2,
    type: 'package',
    title: 'Paket Shock Absorber Lengkap',
    discount: '35%',
    originalPrice: 'Rp 3.500.000',
    discountedPrice: 'Rp 2.275.000',
    image: 'promo2.jpg',
    shortDescription: 'Penggantian shock absorber depan dan belakang dengan produk berkualitas.',
    fullDescription: 'Ganti shock absorber Anda dengan paket lengkap! Dapatkan shock absorber berkualitas tinggi untuk depan dan belakang dengan diskon spesial 35%. Paket termasuk penggantian, spooring, dan balancing untuk kenyamanan berkendara maksimal.',
    includes: [
      'Shock absorber depan (2 pcs)',
      'Shock absorber belakang (2 pcs)',
      'Spooring 3D alignment',
      'Wheel balancing',
      'Pengecekan sistem suspensi',
      'Garansi 1 tahun'
    ],
    terms: [
      'Promo berlaku untuk mobil penumpang',
      'Produk sesuai stok yang tersedia',
      'Termasuk jasa pemasangan',
      'Free pengecekan setelah pemasangan',
      'Masa berlaku promo hingga 30 November 2025'
    ],
    validUntil: '30 Nov 2025',
    serviceDuration: '4-5 jam'
  },
  {
    id: 3,
    type: 'new_customer',
    title: 'New Customer Special',
    discount: '50%',
    originalPrice: 'Rp 800.000',
    discountedPrice: 'Rp 400.000',
    image: 'promo3.jpg',
    shortDescription: 'Diskon spesial 50% untuk pelanggan baru pertama kali service.',
    fullDescription: 'Selamat datang di Anugerah Auto! Khusus pelanggan baru, dapatkan diskon 50% untuk paket servis pertama. Paket ini meliputi pemeriksaan keseluruhan kendaraan dan pengecekan sistem vital untuk memastikan kendaraan Anda dalam kondisi prima.',
    includes: [
      'Pemeriksaan sistem rem',
      'Cek tekanan ban dan kondisi',
      'Inspeksi sistem kelistrikan',
      'Pengecekan cairan mobil',
      'Konsultasi gratis dengan mekanik',
      'Free minuman di ruang tunggu'
    ],
    terms: [
      'Khusus pelanggan baru pertama kali',
      'Wajib mendaftar sebagai member',
      'Satu mobil per pelanggan',
      'Tidak termasuk penggantian sparepart',
      'Booking minimal 1 hari sebelumnya'
    ],
    validUntil: '31 Jan 2026',
    serviceDuration: '1-2 jam'
  }
]);

const selectedPromo = ref(null);
const isPromoModalOpen = ref(false);

const openPromoModal = (promo) => {
  selectedPromo.value = promo;
  isPromoModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closePromoModal = () => {
  isPromoModalOpen.value = false;
  selectedPromo.value = null;
  document.body.style.overflow = '';
};

const getPromoImage = (imageName) => {
  if (!imageName) return '';
  return new URL(`../assets/promo/${imageName}`, import.meta.url).href;
};

const getPromoBadgeColor = (type) => {
  const colors = {
    discount: '#EC2529', // Merah
    package: '#214791', // Biru
    new_customer: '#10B981', // Hijau
    seasonal: '#F59E0B', // Kuning
    member: '#8B5CF6', // Ungu
    emergency: '#EF4444' // Merah terang
  };
  return colors[type] || '#6B7280';
};

const getPromoTypeLabel = (type) => {
  const labels = {
    discount: 'DISKON',
    package: 'PAKET',
    new_customer: 'PELANGGAN BARU',
    seasonal: 'MUSIMAN',
    member: 'MEMBER',
    emergency: 'DARURAT'
  };
  return labels[type] || 'PROMO';
};

// Fungsi untuk mendapatkan link WhatsApp
const getWhatsAppLink = (promo) => {
  const phoneNumber = '6285186054378';
  return `https://wa.me/${phoneNumber}`; // Tanpa pesan template
};

const sharePromo = (promo) => {
  if (navigator.share) {
    navigator.share({
      title: promo.title,
      text: `Dapatkan promo ${promo.discount} untuk ${promo.title} di Anugerah Auto! Hanya ${promo.discountedPrice}`,
      url: window.location.href
    });
  } else {
    const shareText = `🎉 *PROMO ANUGERAH AUTO* 🎉\n\n*${promo.title}*\n${promo.shortDescription}\n\n💵 *Harga Normal:* ${promo.originalPrice || 'Tidak ada'}\n🔥 *Harga Promo:* ${promo.discountedPrice}\n📅 *Berlaku hingga:* ${promo.validUntil}\n⏱️ *Durasi:* ${promo.serviceDuration}\n\n📍 Anugerah Auto Sunter\n📞 0851-8605-4378\n\n*Booking via WhatsApp:* ${getWhatsAppLink(promo)}`;
    navigator.clipboard.writeText(shareText);
    alert('Detail promo telah disalin ke clipboard!\nAnda bisa share melalui WhatsApp secara manual.');
  }
};

const showAllPromos = () => {
  document.getElementById('promo')?.scrollIntoView({ behavior: 'smooth' });
};
// --- END: PROMO DATA ---

// --- START: Auto Scroll Logic ---
const scrollContainer = ref(null)
const scrollSpeed = 4000 // ubah kecepatan dalam milidetik (4000 = 4 detik)
const currentGroupIndex = ref(0)
let autoScrollInterval

// Jumlah testimoni per group berdasarkan breakpoint
const getItemsPerView = () => {
  if (!scrollContainer.value) return 1
  
  const containerWidth = scrollContainer.value.clientWidth
  
  if (containerWidth < 640) { // mobile: < 640px
    return 1
  } else if (containerWidth < 1024) { // tablet: 640px - 1024px
    return 2
  } else { // desktop: > 1024px
    return 3
  }
}

// Hitung berapa group testimoni yang ada (MAKSIMAL 4 GROUP)
const visibleTestimonialGroups = computed(() => {
  if (!scrollContainer.value || allTestimonials.value.length === 0) return []
  
  const itemsPerView = getItemsPerView()
  const totalItems = allTestimonials.value.length
  const totalGroups = Math.ceil(totalItems / itemsPerView)
  
  // MAKSIMAL 4 GROUP untuk carousel yang rapi
  const maxGroups = 4
  const actualGroups = Math.min(totalGroups, maxGroups)
  
  return Array.from({ length: actualGroups })
})

// Hitung posisi scroll untuk group tertentu
const calculateScrollPosition = (groupIndex) => {
  if (!scrollContainer.value) return 0
  
  const container = scrollContainer.value
  const itemsPerView = getItemsPerView()
  
  // Lebar item berdasarkan breakpoint
  let itemWidth
  if (itemsPerView === 1) { // mobile
    itemWidth = container.clientWidth * 0.85 // w-[85vw]
  } else if (itemsPerView === 2) { // tablet
    itemWidth = container.clientWidth * 0.5 // w-[50vw]
  } else { // desktop
    itemWidth = container.clientWidth * 0.333 // w-[calc(33.333%-12px)]
  }
  
  // Hitung gap (12px = 0.75rem)
  const gap = 12
  
  // Hitung scroll position untuk group ini
  return groupIndex * (itemWidth * itemsPerView + gap * (itemsPerView - 1))
}

const startAutoScroll = () => {
  if (!scrollContainer.value) return
  
  const container = scrollContainer.value
  
  autoScrollInterval = setInterval(() => {
    if (!container) return
    
    const totalGroups = visibleTestimonialGroups.value.length
    
    // Pindah ke group berikutnya
    const nextGroupIndex = (currentGroupIndex.value + 1) % totalGroups
    currentGroupIndex.value = nextGroupIndex
    
    const scrollPosition = calculateScrollPosition(nextGroupIndex)
    
    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    })
    
  }, scrollSpeed)
}

const pauseAutoScroll = () => {
  clearInterval(autoScrollInterval)
}

const scrollToIndex = (groupIndex) => {
  if (!scrollContainer.value) return
  
  currentGroupIndex.value = groupIndex
  const scrollPosition = calculateScrollPosition(groupIndex)
  
  scrollContainer.value.scrollTo({
    left: scrollPosition,
    behavior: "smooth",
  })
  
  // Reset interval setelah klik manual
  clearInterval(autoScrollInterval)
  startAutoScroll()
}

// Update current index saat user scroll manual
const updateCurrentIndex = () => {
  if (!scrollContainer.value) return
  
  const container = scrollContainer.value
  const scrollLeft = container.scrollLeft
  const itemsPerView = getItemsPerView()
  
  // Lebar item berdasarkan breakpoint
  let itemWidth
  if (itemsPerView === 1) { // mobile
    itemWidth = container.clientWidth * 0.85
  } else if (itemsPerView === 2) { // tablet
    itemWidth = container.clientWidth * 0.5
  } else { // desktop
    itemWidth = container.clientWidth * 0.333
  }
  
  const gap = 12
  const groupWidth = itemWidth * itemsPerView + gap * (itemsPerView - 1)
  
  // Hitung group index berdasarkan posisi scroll
  const groupIndex = Math.round(scrollLeft / groupWidth)
  const totalGroups = visibleTestimonialGroups.value.length
  
  currentGroupIndex.value = Math.min(groupIndex, totalGroups - 1)
}

onMounted(() => {
  // Tunggu sedikit untuk memastikan DOM sudah siap
  setTimeout(() => {
    startAutoScroll()
    
    // Tambahkan event listener untuk update index saat scroll manual
    if (scrollContainer.value) {
      scrollContainer.value.addEventListener('scroll', updateCurrentIndex)
    }
  }, 100)
})

onBeforeUnmount(() => {
  clearInterval(autoScrollInterval)
  
  // Hapus event listener
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', updateCurrentIndex)
  }
})
// --- END: Auto Scroll Logic ---

// --- START: DATA TESTIMONI LENGKAP ---

const allTestimonials = ref([
    {
        image: 'suyatno.png',
        name: 'Suyatno Budijanto',
        isi: 'Ganti oli & saringan AC, tgl 6 september 2025,\nService bengkel ok dan layanan staf ok, ruang tunggu ok, harga sparepart juga fair.\nRekomendasi utk kembali.',
    },
    {
        image: null,
        name: 'Hendra Wijaya',
        isi: 'Sparepart berkualitas. Pelayanan bagus. Di kerjakan secara profesional. Menggunakan peralatan² kerja yg modern.',
    },
    {
        image: null,
        name: 'Denny Hartanto',
        isi: 'Pelayanan sangat baik, keamanan terjamin, proses servis dijelaskan dengan baik dan detil, kemudian diberikan kesempatan untuk test drive terlebih dahulu untuk memastikan proses servis berhasil dan baik. Ruang tunggu juga nyaman, bisa memantau kendaraan dari dalam, Teknisi juga mengerjakan tugas dengan profesional. Overall 10/10.',
    },
    {
        image: 'Jovie.png',
        name: 'Jovie L S',
        isi: 'Workshop yg bagus...\nPeralatan nya serba baru..\nService nya ok..\nKaryawan nya ramah...\nTempatnya cozy places',
    },
    {
        image: 'younger.png',
        name: 'Younger Novandy',
        isi: 'Pelayanan terbaik, tempatnya bersih, mekanik profesional 👍🏻',
    },
    {
        image: 'and.png',
        name: 'And_ Chandra',
        isi: 'Penjelasan - Detail\nPelayanan - Oke\nPeralatan - Lengkap\nPengerjaan - Rapi',
    },
    {
        image: 'nabil.png',
        name: 'Nabil 88',
        isi: 'Bengkel Recommended dengan Suasana yg Hommy bgt ...\n\nPelayanan cepat dan tanggap.\nTentunya dgn Harga yang Murah & Berkualitas',
    },
    {
        image: null,
        name: 'Bradley Asher',
        isi: 'Saya memiliki pengalaman yang luar biasa dengan perusahaan perbaikan mobil ini. Mereka sangat andal, timnya ramah dan profesional, dan harganya sangat terjangkau. Semuanya dijelaskan dengan jelas, dan mereka menyelesaikan pekerjaan dengan efisien. Saya sangat menghargai layanan jujur mereka dan pasti akan merekomendasikan mereka kepada siapa pun yang mencari perbaikan mobil tepercaya.',
    },
    {
        image: null,
        name: 'Ibing Suprapto',
        isi: 'Jennifer sangat membantu perincian biaya perbaikan... hasil kerja mekanik cepat tapi teliti recommended untk spesialis kaki kaki mobil',
    },
]);

// --- END: DATA TESTIMONI LENGKAP ---

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

/**
 * Helper untuk mendapatkan path gambar avatar atau inisial huruf.
 * Catatan: Asumsi path untuk gambar testimonial adalah '../assets/testi/'.
 */
const getAvatarContent = (value) => {
    if (value && value.includes('.png')) {
        // Jika berupa nama file, kembalikan path asset
        return new URL(`../assets/${value}`, import.meta.url).href; 
    } else if (value) {
        // Jika berupa nama, kembalikan inisial huruf pertama
        return value.charAt(0).toUpperCase(); 
    }
    return '?'; // Fallback
};

// --- END: Helper Functions for Dynamic Assets ---

const props = defineProps({
  locale: {
    type: String,
    required: true,
    default: 'id' 
  }
});


// --- START: Service Descriptions ---
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
    

    // --- Labels Testimoni ---
    testimonyCategory: 'Testimoni',
    testimonyTitle: 'APA KATA PELANGGAN KAMI', 
    
    
    // LINK REVIEW GOOGLE MAPS
    googleReviewLink: 'https://www.google.com/search?sca_esv=d3b392c8b5f1cde4&rlz=1C1UEAD_enID1085ID1085&sxsrf=AE3TifMH0xFgezNaUyhL0UMaCXzvA2XNCQ:1764743707624&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0YZvXmWnLfPLcgIvvfT67fQsLH4Db28Zbi2C83ybj6OhQK_BueV-3alIlX9_onwVWSEBWOoRCaVJzEtqxNqdJDSPydfIRxmkPferCoQTVZ36pTeEBEJsjzd5ddWaxeo8ExDWGg%3D&q=Anugerah+Auto+Sunter:+Bengkel+kaki-kaki+%26+Rem+Reviews&sa=X&ved=2ahUKEwjv47_O5qCRAxVp7zgGHYpNGi8Q0bkNegQIIxAD&biw=1366&bih=641&dpr=1',

    // --- Labels Promo Baru ---
    promoCategory: 'Penawaran Spesial',
    promoTitle: 'Promo & Paket Service',
    promoSubtitle: 'Dapatkan penawaran terbaik untuk perawatan mobil Anda dengan berbagai promo menarik yang kami sediakan.',
    promoButton: 'Lihat Detail',
    promoValid: 'Berlaku hingga',
    promoSeeAll: 'Lihat Semua Promo',
    promoOriginalPrice: 'Harga Normal',
    promoDiscountedPrice: 'Harga Promo',
    promoDetails: 'Detail Promo',
    promoIncludes: 'Apa yang termasuk',
    promoTerms: 'Syarat & Ketentuan',
    promoDuration: 'Durasi Service',
    promoBookNow: 'Booking via WhatsApp',
    promoShare: 'Bagikan Promo'
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
    
    // --- Labels Testimoni ---
    testimonyCategory: 'Testimonials',
    testimonyTitle: 'WHAT OUR CLIENTS SAY',

    googleReviewLink: 'https://www.google.com/search?sca_esv=d3b392c8b5f1cde4&rlz=1C1UEAD_enID1085ID1085&sxsrf=AE3TifMH0xFgezNaUyhL0UMaCXzvA2XNCQ:1764743707624&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0YZvXmWnLfPLcgIvvfT67fQsLH4Db28Zbi2C83ybj6OhQK_BueV-3alIlX9_onwVWSEBWOoRCaVJzEtqxNqdJDSPydfIRxmkPferCoQTVZ36pTeEBEJsjzd5ddWaxeo8ExDWGg%3D&q=Anugerah+Auto+Sunter:+Bengkel+kaki-kaki+%26+Rem+Reviews&sa=X&ved=2ahUKEwjv47_O5qCRAxVp7zgGHYpNGi8Q0bkNegQIIxAD&biw=1366&bih=641&dpr=1',

    // --- New Promo Labels ---
    promoCategory: 'Special Offers',
    promoTitle: 'Promo & Service Packages',
    promoSubtitle: 'Get the best offers for your car maintenance with various attractive promotions we provide.',
    promoButton: 'View Details',
    promoValid: 'Valid until',
    promoSeeAll: 'View All Promos',
    promoOriginalPrice: 'Original Price',
    promoDiscountedPrice: 'Promo Price',
    promoDetails: 'Promo Details',
    promoIncludes: 'What\'s Included',
    promoTerms: 'Terms & Conditions',
    promoDuration: 'Service Duration',
    promoBookNow: 'Book via WhatsApp',
    promoShare: 'Share Promo',
  }
};

// --- END: Language Labels Configuration ---

const L = computed(() => labels[props.locale]); 
</script>

<style scoped>
/* Style untuk line-clamp */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
/* Ini adalah trik CSS untuk menyembunyikan scrollbar di container slider */
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}
.hide-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}

/* WARNA BRAND */
.bg-brand-red { background-color: #EC2529; }
.text-brand-red { color: #EC2529; }

/* Style untuk link WhatsApp */
.no-underline {
  text-decoration: none;
}
</style>