<script lang="ts">
	import { base } from '$app/paths'
	import recipes from '../recipes/index'

	function getRecipeUrl(foo: any) {
		let url = Object.keys(foo)[0]

		return url
	}

	function getRecipeName(foo: any) {
		let recipe = recipes.find(item => Object.keys(item)[0] === Object.keys(foo)[0])

		return recipe[Object.keys(foo)[0]].name
	}
</script>

{#each recipes as recipe, index (index)}
	<a href="{base}/recipes/{getRecipeUrl(recipe)}">{getRecipeName(recipe)}</a>
{/each}

<style>
	a {
		display: block;
	}
</style>
