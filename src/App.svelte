<script>
  export let name;
</script>

<style>
  section {
    font-size: 1.5rem;
  }
  .main-section {
    box-sizing: border-box;
    flex-flow: column wrap;
    width: 100%;
    display: flex;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .title {
    margin: 0px 0px 24px;
    letter-spacing: 0.24px;
    opacity: 1;
    font-family: Ubuntu;
    line-height: 1.5;
    font-size: 34px;
    font-weight: bold;
    color: rgb(61, 61, 61);
  }
  .divider {
    margin: 0px;
    flex-shrink: 0;
    border-width: 0px 0px thin;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.12);
  }
</style>

<section>
  {name} is mounted!
</section>

<main class="main-section">
  <p class="title">Welcome back, Matthew</p>
  <hr class="divider" style="height: 1px;">
</main>

<my-component first="Matt" last="Johnson"></my-component>
