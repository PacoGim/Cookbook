<script lang="ts">
	import { page } from '$app/stores'

	import recipes from '../../../recipes'

	let name = $page.params.name

	let recipe = undefined

	recipes.forEach(item => {
		if (Object.keys(item)[0] === name) {
			recipe = item[Object.keys(item)[0]]
		}
	})

	let people = Number(recipe.people)

	let fraction = 1 / recipe.people

	$: people = Number(people.toFixed(2))

	function updatePeople(value: 'up' | 'down') {
		if (value === 'down') {
			people -= 0.1
		} else {
			people += 0.1
		}
	}
</script>

<recipe-svt>
	<h1>{recipe.name}</h1>

	<h2>
		People: {people}
		<button on:click={() => updatePeople('up')}>+</button>
		<button on:click={() => updatePeople('down')}>-</button>
	</h2>
	<hr />
	{#each recipe.ingredients as ingredient, index (index)}
		<ingredient>{ingredient.name} {ingredient.qt * fraction * people || ''} {ingredient.type}</ingredient>
	{/each}

	{#each recipe.steps as step, index (index)}
		<step>
			<tldr>
				{step.tldr}
			</tldr>
			<description>
				{step.description}
			</description>
		</step>
	{/each}
</recipe-svt>

<style>
	input {
		border: none;

		font-size: inherit;

		width: 75px;
	}

	ingredient {
		display: block;
	}

	step {
		display: block;
		margin-top: 1rem;
	}

	step tldr {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	step description {
		display: block;
	}
</style>
