<template>
    <div class="container col-lg-7">
        <div class="card text-center p-2 mb-4 mx-2">
            <div class="card-body">
                <h2 class="card-title">Daftar Pesanan</h2>
                <hr>
                <table class="table align-middle mt">
                    <thead>
                        <tr>
                            <th scope="col">Nama</th>
                            <th scope="col">Status</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="pesan in pesanan" :key="pesan.id">
                            <td>{{ pesan.nama }}</td>
                            <td v-if="pesan.status === 'konfirmasi'">
                                <span class="badge rounded-pill text-light bg-info"><i class="bi bi-check-circle-fill"></i> Menunggu Konfirmasi</span>
                            </td>
                            <td v-else-if="pesan.status === 'pembayaran'">
                                <span class="badge rounded-pill text-bg-primary"><i class="bi bi-cash-coin"></i> Menunggu Pembayaran</span>
                            </td>
                            <td v-else-if="pesan.status === 'proses'">
                                <span class="badge rounded-pill text-bg-warning"><i class="bi bi-alarm"></i> Sedang Diproses</span>
                            </td>
                            <td v-else-if="pesan.status === 'selesai'">
                                <span class="badge rounded-pill text-bg-success"><i class="bi bi-check-circle"></i> Pesanan Selesai</span>
                            </td>
                            <td>
                                <router-link :to="{name: 'detail', params:{id: pesan.id}}" class="btn btn-outline-dark"><i class="bi bi-ticket-detailed"></i> Detail</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'DaftarPesanan',
    data() {
        return {
            pesanan: []
        }
    },
    created() {
        this.getAll()
    },
    methods: {
        async getAll() {
            try {
                var response = await axios.get('pesanan')
                this.pesanan = response.data
            } catch (e) {
                console.log(e.response.data.messages.error);
            }
        }
    }
}
</script>

<style>

</style>