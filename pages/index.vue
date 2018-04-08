<template>
<section>
<!--Header Section -->
<div class="beer-header">
  <h1 class="tag">BREWDOG CATALOGUE</h1>
  <img src="https://images.crowdcube.com/unsafe/1900x633/filters:max_bytes(100000)/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/20465/cover_image_270820151330.png" class="header-img">
</div>
<!-- Header Section -->
<!-- Body Section -->
<div class="wrapper">
  <b-container class="bv-example-row">
    <!-- Search bar / Info -->
    <div class="intro">
      <div class="intro-info">
      <h3 id="scroll" class="title" align="left">Find your beer</h3>
      <p class="tagline">With over 200 beers to choose from</p>
      <b-form-input v-model="text1"
        type="text"
        placeholder="Search Beers e.g. Pale Ale"
        @keyup.enter.native="searchBeer"
        v-scroll-to="'#scroll'"
        id="transcript">
      </b-form-input>
          <div class="voice">
            <img class="mic" v-on:click="startDictation()" src="//i.imgur.com/cHidSVu.gif" />
            <p class="tagline">Had a few too many Brewdogs? Don't worry, click the microphone and search with your voice</p>
          </div>
        </div>
      </div>
      <!-- Search bar / Info -->
      <!-- Main Content -->
      <transition name="fade"> <!-- Use of Vue Transition, applied in CSS -->
        <b-row id="items" v-if="posts && posts.length"> <!-- Checks if data has been assigned to 'posts' -->
          <b-col cols="12" md="4" class="listing" v-for="post of posts" :key="post.id"> <!-- For loop to loop through data and retrieve each item in array -->
            <div class="listing-wrapper">
              <img id='brewdog-img' class="beer-image" :src="post.image_url" thumbnail fluid rounded v-b-modal.modal1 alt="Thumbnail" /> <!-- ':' before the image src binds the image url to the img tag, this allows it to be rendered dynamically -->
              <p class="line-1">{{post.name}}</p> <!-- Add name field from post JSON data to p tag -->
              <p class="time">First Brewed: {{post.first_brewed}}<span class="time" style="float: right;">ABV: {{post.abv}}%</span></p> <!-- Assign data from first_brewed and ABV fields and float ABV info to the right -->
              <p class="info">{{post.description}}</p> <!-- Assign description field to final paragraph tag -->
            </div>
          </b-col>
        </b-row>
      </transition>
      <!-- Main Content -->
    <p id="error"></p>
  </b-container>
</div>
</section>
</template>

<script>
// Import Variables, Node Modules and Components
import axios from 'axios'
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo) // Start Node Package

export default {
  transition: 'page', // Apply transition to entire page
  data() { // Define data
    return {
      text1: '',
      posts: [],
      errors: []
    }
  },
  // Fetches posts when the component is created.
  created() {
    axios.get(`https://api.punkapi.com/v2/beers?page=2&per_page=80`) // Query API for ALL beers with pagination limiting it at 80
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data // Assign response data to variable
      })
      .catch(e => {
        this.errors.push(e) // return any errors
      })
  },
  methods: {
    searchBeer() {
      axios.get('https://api.punkapi.com/v2/beers?beer_name=' + this.text1).then(response => { // Append 'text1' data to API query
        console.log(response.data) // log the response in the browser's console
        this.posts = response.data // Assign response data to variable
        if (this.posts.length === 0) { // If there are no posts returned in the array
          document.getElementById('error').innerHTML = 'No Results Found' // Display message 'No Posts Found'
        } else {
          document.getElementById('error').innerHTML = ' ' // Or else, display nothing
        }
      })
        .catch(e => {
          this.errors.push(e) // return any errors
        })
    },
    startDictation() {
      var recognition = new window.webkitSpeechRecognition() //eslint-disable-line
      let _this = this // assign this to a variable to use it within this block of JavaScript
      // Configure voice recognition settings
      recognition.continuous = false
      recognition.interimResults = false

      recognition.lang = 'en-US' // Configure Language
      recognition.start() // Start Voice Recognition

      recognition.onresult = function (e) { // When a result is provided, run this function
        _this.text1 = e.results[0][0].transcript // Assign results to 'text1' data variable
        console.log(_this.text1) // console log value of 'text1'
        _this.searchBeer() // run SearchBeer function with new 'text1' value
        recognition.stop() // stop recognition
      }

      recognition.onerror = function (e) { // If recognition flags an error
        recognition.stop() // Stop running
      }
    }
  }

  // asyncData function to render the data on the server side rather than the client side - allows faster loading of elements

//   asyncData({ params, error }) {
//     return axios.get('https://api.punkapi.com/v2/beers?beer_name=' + this.text1).then(response => {
//       console.log(response.data)
//       this.posts = response.data
//     })
//       .catch(e => {
//         this.errors.push(e)
//       })
//   }
}
    </script>

