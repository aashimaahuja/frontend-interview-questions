<script setup>
import { onMounted, ref } from 'vue';

const emails = ref([]);
const isLoading = ref(false);
const page = ref(1);
const sentinal = ref(null);
const totalPages = ref(1);
const pageSize = 10;
const startIndex = ref(0);

const fetchEmails = async (page) => {
  isLoading.value = true;
  try {
    const response = await fetch(`https://flipkart-email-mock.vercel.app/?page=${page}`);
    const data = await response.json();
    emails.value = [...emails.value, ...data.list];
    totalPages.value = Math.ceil(data.total / pageSize);
  } catch (err) {
  } finally {
    isLoading.value = false;
  }
};

const loadMore = () => {
  fetchEmails(page.value);
  page.value = page.value + 1;
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && page.value <= totalPages.value) {
      loadMore();
    }
  });
  observer.observe(sentinal.value);
});

// onUnmounted(() => {
//   if (observer && sentinel.value) {
//     observer.unobserve(sentinel.value);
//   }
// });

const onScroll = (e) => {
  startIndex.value = Math.floor(e.target.scrollTop / 60);
};
</script>

<template>
  <ul
    @scroll="onScroll"
    :style="{
      height: '300px',
      overflow: 'scroll',
      paddingTop: startIndex * 60 + 'px',
      paddingBottom: (emails.length - startIndex - 5) * 60 + 'px',
    }"
  >
    <li
      :data-key="email.id"
      v-for="(email, i) in emails.slice(startIndex, startIndex + 5)"
      class="mb-4 h-15 overflow-hidden"
    >
      <div class="flex flex-col gap-2 border-2">
        <div>{{ email.id }} {{ email.subject }}</div>
        <div>{{ email.short_description }}</div>
      </div>
    </li>
    <li v-if="isLoading">loading....</li>
    <li ref="sentinal" class="h-15"></li>
  </ul>
</template>
