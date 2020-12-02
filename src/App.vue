<template>
  <div>
    <!-- Nav Bar -->
    <nav
      class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <a class="navbar-brand float-left" style="cursor: pointer">
          MEVN Stack Example
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/"
              >Create Student</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">View Student</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router View -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
