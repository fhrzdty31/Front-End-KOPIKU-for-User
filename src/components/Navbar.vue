<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark sadhow">
      <div class="container-fluid mx-2">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <h1 class="navbar-brand mx-4 my-2"><i class="bi bi-cup-hot"></i> KopiKu</h1>
        <div class="collapse navbar-collapse my-2" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/" class="nav-link active"><i class="bi bi-house"></i> Home</router-link>
            <router-link to="/" class="nav-link active"><i class="bi bi-info-circle"></i> About Me</router-link>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>

</style>