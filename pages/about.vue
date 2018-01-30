<template>

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
	</template>
	
	<script>
	import axios from 'axios';
	
	export default {
		data() {
			return {
				posts: [],
				errors: []
			}
		},
	
		// Fetches posts when the component is created.
		created() {
			axios.get(`https://api.punkapi.com/v2/beers/random`)
			.then(response => {
				// JSON responses are automatically parsed.
				this.posts = response.data
				console.log(response.data[0])
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