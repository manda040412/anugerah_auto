// src/api.js
import axios from "axios";

const API_URL = "http://localhost:1337";

// ==========================
// MEDIA HANDLER (Strapi v4)
// ==========================
const getMediaUrl = (media) => {
  if (!media || !media.data) return null;

  // Multiple Media → ambil index pertama
  const img = Array.isArray(media.data)
    ? media.data[0]?.attributes
    : media.data.attributes;

  if (!img?.url) return null;

  return img.url.startsWith("http") ? img.url : `${API_URL}${img.url}`;
};

// =========================================================
// CAROUSEL (LOCALE FIXED)
// =========================================================
export const getCarousels = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/carousels`, {
      params: {
        populate: "image",
        locale: "en", // 🚀 FIX PENTING
      },
    });

    return (res.data.data || []).map((item) => {
      const attr = item.attributes;

      return {
        id: item.id,
        title: attr.title || "",
        link: attr.link || "",
        imageUrl: getMediaUrl(attr.image), // support multiple media
      };
    });
  } catch (err) {
    console.error("Gagal ambil data Carousel:", err);
    return [];
  }
};

// =========================================================
// BLOG LIST (LOCALE FIXED)
// =========================================================
export const getBlogs = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/blogs`, {
      params: {
        populate: "coverImage",
        locale: "en", // 🚀 FIX PENTING
      },
    });

    return (res.data.data || []).map((item) => {
      const attr = item.attributes;

      return {
        id: item.id,
        title: attr.title || "Tanpa Judul",
        slug: attr.slug || "",
        content: attr.content || "",
        publishDate: attr.publishDate || null,
        imageUrl: getMediaUrl(attr.coverImage),
      };
    });
  } catch (err) {
    console.error("Gagal load blogs:", err);
    return [];
  }
};

// =========================================================
// BLOG DETAIL BY SLUG (LOCALE FIXED)
// =========================================================
export const getBlogDetail = async (slug) => {
  try {
    const res = await axios.get(`${API_URL}/api/blogs`, {
      params: {
        "filters[slug][$eq]": slug,
        populate: "coverImage",
        locale: "en", // 🚀 FIX PENTING
      },
    });

    if (!res.data.data || res.data.data.length === 0) return null;

    const item = res.data.data[0];
    const attr = item.attributes;

    return {
      id: item.id,
      title: attr.title,
      slug: attr.slug,
      content: attr.content,
      publishDate: attr.publishDate,
      imageUrl: getMediaUrl(attr.coverImage),
    };
  } catch (err) {
    console.error("Gagal load blog detail:", err);
    return null;
  }
};
