<template>
	<header :class="{ 'scrolled-nav': scrollPosition }">
		<nav>
			<div class="branding">
				<img src="@/assets/img/profile-img.jpg" alt="Profile picture" />
			</div>
			<ul class="navigation" v-show="!mobile">
				<li>
					<router-link class="link" :to="{ name: 'Home' }">Home</router-link>
				</li>
				<li>
					<router-link class="link" :to="{ name: '' }">Portfolio</router-link>
				</li>
				<li>
					<router-link class="link" :to="{ name: '' }">Professional</router-link>
				</li>
				<li>
					<router-link class="link" :to="{ name: '' }">Academic</router-link>
				</li>
				<li>
					<router-link class="link" :to="{ name: '' }">About</router-link>
				</li>
			</ul>
			<div class="icon">
				<i @click="toggleMobileNav" v-show="mobile" class="far fa-bars"
					:class="{ 'icon-active': mobileNav }"></i>
			</div>
			<transition name="mobile-nav">
				<ul class="dropdown-nav" v-show="mobileNav">
					<li>
						<router-link class="link" :to="{ name: 'Home' }">Home</router-link>
					</li>
					<li>
						<router-link class="link" :to="{ name: '' }">Portfolio</router-link>
					</li>
					<li>
						<router-link class="link" :to="{ name: '' }">Professional</router-link>
					</li>
					<li>
						<router-link class="link" :to="{ name: '' }">Academic</router-link>
					</li>
					<li>
						<router-link class="link" :to="{ name: '' }">About</router-link>
					</li>
				</ul>
			</transition>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'TheNavbar',
	data() {
		return {
			scrollPosition: false,
			mobile: false,
			mobileNav: false,
			windowWidth: false,
		};
	},
};
</script>

<style lang="scss" scoped>
header {
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 99;
	width: 100%;
	position: fixed;
	transition: 0.5s ease all;
	color: #fff;

	nav {
		position: relative;
		display: flex;
		flex-direction: row;
		padding: 12px 0;
		transition: 0.5s ease all;
		width: 90%;
		margin: 0 auto;

		@media(min-width: 1140px) {
			width: 1140px;
		}

		ul,
		.link {
			font-weight: 500;
			color: #fff;
			list-style: none;
			text-decoration: none;
		}

		li {
			text-transform: uppercase;
			padding: 16px;
			margin-left: 16px;
		}

		.link {
			font-size: 14px;
			transition: 0.5s ease all;
			padding-bottom: 4px;
			border-bottom: 1px solid transparent;

			&:hover {
				color: #00afea;
				border-color: #00afea;
			}
		}

		.branding {
			display: flex;
			align-items: center;

			img {
				width: 50px;
				transition: 0.5s ease all;
			}
		}

		.navigation {
			display: flex;
			align-items: center;
			flex: 1;
			justify-content: flex-end;
		}

		.icon {
			display: flex;
			position: absolute;
			top: 0;
			align-items: center;
			right: 24px;
			height: 100%;

			i {
				cursor: pointer;
				font-size: 24px;
				transition: 0.8s ease all;
			}
		}

		.icon-active {
			transform: rotate(180deg);
		}
	}
}
</style>
