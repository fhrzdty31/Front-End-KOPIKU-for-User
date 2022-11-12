<template>
    <div class="container mt-5">
        <div class="card text-center p-2">
            <div class="card-body">
                <h1 class="card-title">Buat Pesanan</h1>
                <hr>
                <form @submit.prevent="pesan">
                    <div class="mb-3 row">
                        <label for="nama" class="col-sm-2 col-form-label my-1">Nama</label>
                        <div class="col-sm-10 my-1">
                            <input v-model="nama" type="text" class="form-control" id="nama" placeholder="Nama">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="pesanan" class="col-sm-2 col-form-label my-1">Menu</label>
                        <div class="div col-sm-7 my-1">
                            <select v-model="pesanan" id="pesanan" class="form-control">
                                <option value="cafe_latte" class="dropdown-item">Cafe Latte</option>
                                <option value="americano" class="dropdown-item">Americano</option>
                                <option value="cc_espresso" class="dropdown-item">Coconut Espresso</option>
                                <option value="mocchacino" class="dropdown-item">Mocchacino</option>
                                <option value="fluffy_latte" class="dropdown-item">Fluffy Latte</option>
                                <option value="caramel_latte" class="dropdown-item">Caramel Latte</option>
                                <option value="black_sweet" class="dropdown-item">Black Sweet</option>
                            </select>
                        </div>
                        <div class="col-sm-3 my-1">
                            <input v-model="jumlah" type="number" class="form-control" id="jumlah" placeholder="Jumlah">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-outline-primary"><i class="bi bi-cart-check"></i> Pesan</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'FormPesanan',
    data() {
        return {
            nama: '',
            pesanan: '',
            jumlah: '',
            harga: '',
            status: 'konfirmasi'
        }
    },
    methods: {
        async getHarga() {
            switch (this.pesanan) {
                case 'cafe_latte':
                    this.harga = (parseInt(this.jumlah) * 16000).toString();
                    break;
                case 'americano':
                    this.harga = (parseInt(this.jumlah) * 13000).toString();
                    break;
                case 'cc_espresso':
                    this.harga = (parseInt(this.jumlah) * 18000).toString();
                    break;
                case 'mocchacino':
                    this.harga = (parseInt(this.jumlah) * 19000).toString();
                    break;
                case 'fluffy_latte':
                    this.harga = (parseInt(this.jumlah) * 25000).toString();
                    break;
                case 'caramel_latte':
                    this.harga = (parseInt(this.jumlah) * 22000).toString();
                    break;
                case 'black_sweet':
                    this.harga = (parseInt(this.jumlah) * 13000).toString();
                    break;
                default:
                    break;
            }
        },
        async pesan() {
            try {
                this.getHarga();
                await axios.post('pesanan', {
                    nama: this.nama,
                    pesanan: this.pesanan,
                    jumlah: this.jumlah,
                    harga: this.harga,
                    status: this.status 
                });
                this.nama = '';
                this.pesanan = '';
                this.jumlah = '';
                this.harga = '';
                this.$router.push('/')
            } catch (e) {
                console.log(e);
            }
        }
    }
}
</script>

<style>

</style>