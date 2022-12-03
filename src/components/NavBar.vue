<template>
  <nav class="navbar">
    <a href="#">
      <img src="../assets/images/logo.svg" alt="Logo" />
    </a>
    <ul class="nav-items">
      <li class="nav-link"><img src="../assets/images/twitter.svg" alt="Twitter Logo" /></li>
      <li class="nav-link"><img src="../assets/images/dribbble.svg" alt="Dribbble Logo" /></li>
      <li class="nav-link"><img src="../assets/images/figma.svg" alt="Figma Logo" /></li>
      <li class="nav-link"><img src="../assets/images/github.svg" alt="Github Logo" /></li>
    </ul>

  </nav>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-items {
    list-style: none;
    display: flex;

    .nav-link {
      margin: auto 10px;
    }
  }

}
</style>