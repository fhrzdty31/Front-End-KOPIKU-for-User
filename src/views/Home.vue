<template>
  <div class="container mt-5">
    <div class="row">
      <BuatPesanan />
      <DaftarPesanan />
    </div>
  </div>
</template>

<script>
import BuatPesanan from '@/components/Home/BuatPesanan.vue'
import DaftarPesanan from '@/components/Home/DaftarPesanan.vue';

export default {
    nameL: 'Home',
    components: {
      BuatPesanan,
      DaftarPesanan
    }
}
</script>

<style>

</style>