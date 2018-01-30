<template>
		<ul v-if="posts && posts.length">
			<li v-for="post of posts">
				<p><strong>{{post.name}}</strong></p>
				<p>{{post.body}}</p>
			</li>
		</ul>
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