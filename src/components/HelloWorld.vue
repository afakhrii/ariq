<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{judul}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    data : function() {
    msg: String
    return {
    Nama : "Fakhri"
    }
    }
  }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
