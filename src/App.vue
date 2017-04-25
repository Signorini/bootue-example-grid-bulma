<template>
  <div id="app">
    <img src="dist/logo.png" height="50">

    <h2>Bulma's Grid</h2>
    <div class="container">
    <div class="columns">
      <div class="column">
        <alert type="success">
          <strong>column</strong>
          <p>You successfully read this important alert message.</p>
        </alert>
      </div>
      <div class="column">
        <alert type="warning">
          <strong>column</strong>
          <p>You successfully read this important alert message.</p>
        </alert>
      </div>
      <div class="column">
        <alert type="success">
          <strong>column</strong>
          <p>You successfully read this important alert message.</p>
        </alert>
      </div>
      <div class="column">
        <alert type="warning">
          <strong>column</strong>
          <p>You successfully read this important alert message.</p>
        </alert>
      </div>
    </div>
</div>

<h2>Bootstrap's Grid</h2>
    <div class="container">
        <div class="col-xs-6">
          <alert type="success">
            <strong>col-xs-6</strong>
            <p>You successfully read this important alert message.</p>
          </alert>
        </div>
        <div class="col-xs-6">
          <alert type="warning">
            <strong>col-xs-6</strong>
            <p>You successfully read this important alert message.</p>
          </alert>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: #c0c0c0 !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
