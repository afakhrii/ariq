<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-link to="/Kelas">Data Kelas </router-link>
    <router-link to="/siswa">Data Siswa</router-link>
    <router-view/> -->
  <h1>{{ nama }}</h1>
  <h2>Nama : <input v-model="nama" type="" name=""><br></h2>
  <h2>Nilai Anda : {{  nilai }}</h2>
  <button @click = "totalnilai">Click Me</button>
  <h2>1. Apakah Bumi itu bulat? ?</h2>
  <input type="radio" name="" v-model="soal1" value="Assyiap">Ya
  <input type="radio" name="" v-model="soal1" value="Benar1">Benar
  <input type="radio" name="" v-model="soal1" value="Tidak1">Tidak
  <input type="radio" name="" v-model="soal1" value="datar">Bumi itu Datar<br>
  <h2>2. Berapakah  10 + 9 ?</h2>
  <input type="radio" name="" v-model="soal2" value="100">100
  <input type="radio" name="" v-model="soal2" value="10">10
  <input type="radio" name="" v-model="soal2" value="60">60
  <input type="radio" name="" v-model="soal2" value="19">19<br>
  <h2>3. Siapa Penulis Novel Dilan ?</h2>
  <input type="radio" name="" v-model="soal3" value="pb">Pidi Baiq
  <input type="radio" name="" v-model="soal3" value="pj">Pidi Jahad
  <input type="radio" name="" v-model="soal3" value="pb2">Pidi Biiq
  <input type="radio" name="" v-model="soal3" value="sg">Saya Ganteng<br>
  </div>
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'
*/

export default {
  name: 'App',
  data() {
    return{
      nama: '',
      nilai: 0,
      soal1: '',
      soal2: '',
      soal3: ''
    }
  },
  methods: {
    totalnilai(){
      if(this.soal1 == 'Assyiap' && this.soal2 == '19' && this.soal3 == 'pb') {
        this.nilai=+3
      }
      else if (this.soal1 == 'Assyiap' && this.soal2 == '19') {
        this.nilai=+2
      }
      else if (this.soal1 == 'Assyiap' && this.soal3 == 'pb') {
        this.nilai=+2
      }
      else if (this.soal2 == '19' && this.soal3 == 'pb') {
        this.niali=+2
      }
      else if (this.soal1 == 'Assyiap') {
        this.nilai=+1
      }
      else if (this.soal2 == '19') {
        this.nilai=+1
      }
      else if (this.soal3 == 'pb') {
        this.nilai=+1
      }
      else{
        this.nilai = 0
      }
    }
  }
  /*,
  components: {
    HelloWorld
  }*/
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
