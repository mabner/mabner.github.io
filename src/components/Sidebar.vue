<template>
	<aside :class="`${is_expanded && 'is-expanded'}`">
		<div class="logo">
			<img src="../assets/profile-img.jpg" alt="Marcos">
		</div>
		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div>
		<h3>Menu</h3>
		<div class="menu">
			<router-link class="button" to="/">
				<span class="material-icons">home</span>
				<span class="text">Home</span>
			</router-link>
			<router-link class="button" to="/overview">
				<span class="material-icons">work</span>
				<span class="text">Resumo</span>
			</router-link>
			<router-link class="button" to="/about">
				<span class="material-icons">help</span>
				<span class="text">Sobre</span>
			</router-link>
			<router-link class="button" to="/contact">
				<span class="material-icons">email</span>
				<span class="text">Contato</span>
			</router-link>
			<router-link class="button" to="/terminal">
				<span class="material-icons">code</span>
				<span class="text">Terminal</span>
			</router-link>

		</div>
	</aside>
</template>

<script setup>
import { ref } from 'vue'
const is_expanded = ref(localStorage.getItem('is_expanded') === 'true')

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value //keeps inverting the value on user click (true>false>true>...)
	localStorage.setItem('is_expanded', is_expanded.value) //saves menu state on localStorage
}
</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;
	width: calc(2rem + 32px); // 32px > icon size
	min-height: 100vh;
	overflow: hidden;
	padding: 1rem;
	background-color: var(--dark);
	color: var(--light);
	transition: 0.2s ease-out;

	.logo {
		margin-bottom: 1rem;

		img {
			width: 2rem;
			border-style: outset;
			border-width: 2px;
			border-color: var(--light);
			border-radius: 50%;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end; // makes the arrow move with the menu
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-out;

		.menu-toggle {
			transition: 0.2s ease-out;

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.02s ease-out;
			}

			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3,
	.button .text {
		opacity: 0;
		transition: 0.3s ease-out;
	}

	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			padding: 0.5rem 1rem;
			transition: 0.2s ease-out;

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}

			.text {
				color: var(--light);
			}

			&:hover,
			&.router-link-exact-active {
				background-color: var(--dark-alt);

				.material-icons,
				.text {
					color: var(--primary);
				}
			}

			&.router-link-exact-active {
				border-right: 5px solid var(--primary);
			}
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;

			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3,
		.button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}
	}

	@media (max-width: 768px) {
		position: fixed;
		z-index: 99;
	}
}
</style>