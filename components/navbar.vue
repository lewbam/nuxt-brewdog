<template>
  <div class="b-container fluid">
        <b-navbar toggleable="md" type="light" variant="light">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand class="icon" href="#" to="/"><img src="~/assets/brewdog.png"></b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#" to="/listings">Beers</b-nav-item>
          <b-nav-item href="#" to="/about">API</b-nav-item>
          <b-nav-item href="#" to="/isotope">Isotope</b-nav-item>
        </b-navbar-nav>


      </b-collapse>
    </b-navbar>
  </div>
</template>