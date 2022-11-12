<template>
    <div class="container mt-5 px-2 justify-content-center">
        <center>
            <div class="card p-2" style="width: 32rem;">
                <div class="card-body">
                    <h3 class="card-title">{{ detail.nama }}</h3>
                    <h5 class="card-subtitle mb-2 text-muted">{{ detail.pesanan }}</h5>
                    <hr>
                    <table class="table mt-1">
                        <tbody>
                            <tr>
                                <th>Nama</th>
                                <td>{{ detail.nama }}</td>
                            </tr>
                            <tr>
                                <th>Pesanan</th>
                                <td>{{ detail.pesanan }}</td>
                            </tr>
                            <tr>
                                <th>Jumlah</th>
                                <td>{{ detail.jumlah }}</td>
                            </tr>
                            <tr>
                                <th>Harga</th>
                                <td>Rp. {{ detail.harga }}</td>
                            </tr>
                            <tr>
                                <th>Status</th>
                                <td v-if="detail.status === 'konfirmasi'">
                                    <span class="badge rounded-pill text-light bg-info"><i class="bi bi-check-circle-fill"></i> Menunggu Konfirmasi</span>
                                </td>
                                <td v-else-if="detail.status === 'pembayaran'">
                                    <span class="badge rounded-pill text-bg-primary"><i class="bi bi-cash-coin"></i> Menunggu Pembayaran</span>
                                </td>
                                <td v-else-if="detail.status === 'proses'">
                                    <span class="badge rounded-pill text-bg-warning"><i class="bi bi-alarm"></i> Sedang Diproses</span>
                                </td>
                                <td v-else-if="detail.status === 'selesai'">
                                    <span class="badge rounded-pill text-bg-success"><i class="bi bi-check-circle"></i> Pesanan Selesai</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button v-on:click="bayar" v-if="detail.status === 'pembayaran'" class="btn btn-outline-primary"><i class="bi bi-cash-coin"></i> Bayar</button>
                    <button v-on:click="selesai" v-if="detail.status === 'selesai'" class="btn btn-outline-primary"><i class="bi bi-check-circle"></i> Selesai</button>
                </div>
            </div>
        </center>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'DetailPesanan',
    data() {
        return {
            detail: []
        }
    },
    created() {
        this.getDetail()
    },
    methods: {
        async getDetail() {
            try {
                var response = await axios.get(`pesanan/${this.$route.params.id}`)
                this.detail = response.data
            } catch (e) {
                console.log(e.response.data.messages.error);
            }
        },
        async bayar() {
            try {
                await axios.put(`pesanan/${this.$route.params.id}`, {
                    nama: this.detail.nama,
                    pesanan: this.detail.pesanan,
                    jumlah: this.detail.jumlah,
                    harga: this.detail.harga,
                    status: 'proses'
                })
                this.$router.push('/')
            } catch (e) {
                console.log(e);
            }
        },
        async selesai() {
            try {
                await axios.delete(`pesanan/${this.$route.params.id}`)
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