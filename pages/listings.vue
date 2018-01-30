<template>

<section>
<div class="beer-header">
  <h1 class="tag">BREWDOG CATALOGUE</h1>
  <img src="https://images.crowdcube.com/unsafe/1900x633/filters:max_bytes(100000)/https://files-crowdcube-com.s3.amazonaws.com/opportunity_images/20465/cover_image_270820151330.png" class="header-img">
</div>

   <div class="wrapper">

  <b-container class="bv-example-row">

  <div class="intro">
   
    <div class="intro-info">
      <h3 class="title" align="left">Find your beer</h3>
      <p class="tagline">With over 200 beers to choose from</p>
    
      <b-form-input v-model="text1"
        type="text"
        placeholder="Search Beers">
      </b-form-input>

      <p>Value: {{ text1 }}</p>
     

    </div>

    </div>


    <b-row v-if="posts && posts.length">
      <b-col cols="12" md="4" class="listing" v-for="post of posts">
          <div class="listing-wrapper">
          <b-img id='brewdog-img' class="beer-image" thumbnail fluid rounded src="https://images.punkapi.com/v2/19.png" v-b-modal.modal1 alt="Thumbnail" />
          <p class="line-1">{{post.name}}</p>
          <p class="time">First Brewed: {{post.first_brewed}}<span class="time" style="float: right;">ABV: {{post.abv}}%</span></p>
          <p class="info">{{post.description}}</p>
        </div>
      </b-col>
      <b-col cols="12" md="4" class="listing" v-for="post of posts">
          <div class="listing-wrapper">
          <b-img class="beer-image" thumbnail fluid rounded src="https://images.punkapi.com/v2/19.png" v-b-modal.modal1 alt="Thumbnail" />
          <p class="line-1">{{post.name}}</p>
          <p class="time">First Brewed: {{post.first_brewed}}<span class="time" style="float: right;">ABV: {{post.abv}}%</span></p>
          <p class="info">{{post.description}}</p>
        </div>
      </b-col>
      <b-col cols="12" md="4" class="listing" v-for="post of posts">
          <div class="listing-wrapper">
          <b-img class="beer-image" thumbnail fluid rounded src="https://images.punkapi.com/v2/19.png" v-b-modal.modal1 alt="Thumbnail" />
          <p class="line-1">{{post.name}}</p>
          <p class="time">First Brewed: {{post.first_brewed}}<span class="time" style="float: right;">ABV: {{post.abv}}%</span></p>
          <p class="info">{{post.description}}</p>
        </div>
      </b-col>
    </b-row>
   
</b-container>

  </div>

</section>

</template>

<script>
    import axios from 'axios';
    
    export default {
      transition: 'page',
      data() {
        return {
          text1: '',
          posts: [],
          errors: []
        }
      },
      // Fetches posts when the component is created.
      created() {
        axios.get(`https://api.punkapi.com/v2/beers?page=2&per_page=80`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data
          console.log(response.data[0])
          var data = response.data[0]
          console.log(data)
          console.log(data['image_url'])
          document.getElementById('brewdog-img').src = data['image_url']
          
        })
        .catch(e => {
          this.errors.push(e)

        })
        
    
        // async / await version (created() becomes async created())
        //
        // try {
        //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
        //   this.posts = response.data
        // } catch (e) {
        //   this.errors.push(e)
        // }
      }
    }
    </script>

<!-- <script>
export default {
  transition: 'page'
}
</script>

<script>
export default {
  data() {
    return {
      text1: ''
    }
  }
}
    </script> -->
