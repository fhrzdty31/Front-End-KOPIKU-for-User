<template>
    <div class="container col-lg-5">
        <div class="card text-center p-2 mb-4 mx-2">
            <div class="card-body">
                <h3 class="card-title">Buat Pesanan</h3>
                <p class="card-text text-muted">Make an order by clicking the button below!</p>
                <router-link to="/pesan" class="btn btn-outline-dark mt-3"><i class="bi bi-cart"></i> Pesan</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BuatPesanan'
}
</script>

<style>

</style>