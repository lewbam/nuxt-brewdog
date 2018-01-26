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


    <b-row>
      <b-col cols="12" md="4" class="listing">
          <div class="listing-wrapper">
          <b-img class="beer-image" thumbnail fluid rounded src="https://images.punkapi.com/v2/19.png" v-b-modal.modal1 alt="Thumbnail" />
          <p class="line-1">Lingonberry Double IPA</p>
          <p class="time">First Brewed: 06/2013<span class="time" style="float: right;">ABV: 8.2%</span></p>
          <p class="info">We sent this beer to Norway where it was known as 'Hello, my name is Censored’. You can make up your own mind as to why. This brew was a red berry explosion, with a reisnous bitter edge layered with dry berry tartness.</p>
          <p class="info">11/03/2018</p>
        </div>
      </b-col>
      <b-col cols="12" md="4" class="listing">
          <div class="listing-wrapper">
          <b-img class="beer-image" thumbnail fluid rounded src="https://images.punkapi.com/v2/19.png" v-b-modal.modal1 alt="Thumbnail" />
          <p class="line-1">Lingonberry Double IPA</p>
          <p class="time">First Brewed: 06/2013<span class="time" style="float: right;">ABV: 8.2%</span></p>
          <p class="info">We sent this beer to Norway where it was known as 'Hello, my name is Censored’. You can make up your own mind as to why. This brew was a red berry explosion, with a reisnous bitter edge layered with dry berry tartness.</p>
          <p class="info">11/03/2018</p>
        </div>
      </b-col>
      <b-col cols="12" md="4" class="listing">
          <div class="listing-wrapper">
          <b-img class="beer-image" thumbnail fluid rounded src="https://images.punkapi.com/v2/19.png" v-b-modal.modal1 alt="Thumbnail" />
          <p class="line-1">Lingonberry Double IPA</p>
          <p class="time">First Brewed: 06/2013<<span class="time" style="float: right;">ABV: 8.2%</span>/p>
          <p class="info">We sent this beer to Norway where it was known as 'Hello, my name is Censored’. You can make up your own mind as to why. This brew was a red berry explosion, with a reisnous bitter edge layered with dry berry tartness.</p>
          <p class="info">11/03/2018</p>
        </div>
      </b-col>
    </b-row>

    <b-row>
        <b-col cols="12" md="4" class="listing">
            <div class="listing-wrapper">
            <b-img class="beer-image" thumbnail fluid rounded src="https://images.punkapi.com/v2/19.png" v-b-modal.modal1 alt="Thumbnail" />
            <p class="line-1">Lingonberry Double IPA</p>
            <p class="time">First Brewed: 06/2013<span class="time" style="float: right;">ABV: 8.2%</span></p>
            <p class="info">We sent this beer to Norway where it was known as 'Hello, my name is Censored’. You can make up your own mind as to why. This brew was a red berry explosion, with a reisnous bitter edge layered with dry berry tartness.</p>
            <p class="info">11/03/2018</p>
          </div>
        </b-col>
        <b-col cols="12" md="4" class="listing">
            <div class="listing-wrapper">
            <b-img class="beer-image" thumbnail fluid rounded src="https://images.punkapi.com/v2/19.png" v-b-modal.modal1 alt="Thumbnail" />
            <p class="line-1">Lingonberry Double IPA</p>
            <p class="time">First Brewed: 06/2013<span class="time" style="float: right;">ABV: 8.2%</span></p>
            <p class="info">We sent this beer to Norway where it was known as 'Hello, my name is Censored’. You can make up your own mind as to why. This brew was a red berry explosion, with a reisnous bitter edge layered with dry berry tartness.</p>
            <p class="info">11/03/2018</p>
          </div>
        </b-col>
        <b-col cols="12" md="4" class="listing">
            <div class="listing-wrapper">
            <b-img class="beer-image" thumbnail fluid rounded src="https://images.punkapi.com/v2/19.png" v-b-modal.modal1 alt="Thumbnail" />
            <p class="line-1">Lingonberry Double IPA</p>
            <p class="time">First Brewed: 06/2013<span class="time" style="float: right;">ABV: 8.2%</span></p>
            <p class="info">We sent this beer to Norway where it was known as 'Hello, my name is Censored’. You can make up your own mind as to why. This brew was a red berry explosion, with a reisnous bitter edge layered with dry berry tartness.</p>
            <p class="info">11/03/2018</p>
          </div>
        </b-col>
    </b-row>

    <b-row>
        <b-col cols="12" md="4" class="listing">
            <div class="listing-wrapper">
            <b-img class="beer-image" thumbnail fluid rounded src="https://images.punkapi.com/v2/19.png" v-b-modal.modal1 alt="Thumbnail" />
            <p class="line-1">Lingonberry Double IPA</p>
            <p class="time">First Brewed: 06/2013<span class="time" style="float: right;">ABV: 8.2%</span></p>
            <p class="info">We sent this beer to Norway where it was known as 'Hello, my name is Censored’. You can make up your own mind as to why. This brew was a red berry explosion, with a reisnous bitter edge layered with dry berry tartness.</p>
            <p class="info">11/03/2018</p>
          </div>
        </b-col>
        <b-col cols="12" md="4" class="listing">
            <div class="listing-wrapper">
            <b-img class="beer-image" thumbnail fluid rounded src="https://images.punkapi.com/v2/19.png" v-b-modal.modal1 alt="Thumbnail" />
            <p class="line-1">Lingonberry Double IPA</p>
            <p class="time">First Brewed: 06/2013<span class="time" style="float: right;">ABV: 8.2%</span></p>
            <p class="info">We sent this beer to Norway where it was known as 'Hello, my name is Censored’. You can make up your own mind as to why. This brew was a red berry explosion, with a reisnous bitter edge layered with dry berry tartness.</p>
            <p class="info">11/03/2018</p>
          </div>
        </b-col>
        <b-col cols="12" md="4" class="listing">
            <div class="listing-wrapper">
            <b-img class="beer-image" thumbnail fluid rounded src="https://images.punkapi.com/v2/19.png" v-b-modal.modal1 alt="Thumbnail" />
            <p class="line-1">Lingonberry Double IPA</p>
            <p class="time">First Brewed: 06/2013<span class="time" style="float: right;">ABV: 8.2%</span></p>
            <p class="info">We sent this beer to Norway where it was known as 'Hello, my name is Censored’. You can make up your own mind as to why. This brew was a red berry explosion, with a reisnous bitter edge layered with dry berry tartness.</p>
            <p class="info">11/03/2018</p>
          </div>
        </b-col>
    </b-row>



      

  </b-container>

  </div>

</section>

</template>

<script>
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
    </script>
