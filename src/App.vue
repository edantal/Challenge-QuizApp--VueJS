<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input type="text" />
    </header>

    <div class="options__container"></div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 30px;
}

header h1 {
  margin-right: 30px;
  font-weight: bold;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.5);
}
</style>
