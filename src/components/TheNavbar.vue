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
					<router-link class="link" :to="{ name: '' }"
						>Professional</router-link
					>
				</li>
				<li>
					<router-link class="link" :to="{ name: '' }">Academic</router-link>
				</li>
				<li>
					<router-link class="link" :to="{ name: '' }">About</router-link>
				</li>
			</ul>
			<div class="icon">
				<i
					@click="toggleMobileNav"
					v-show="mobile"
					class="far fa-bars"
					:class="{ 'icon-active': mobileNav }"
				></i>
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
						<router-link class="link" :to="{ name: '' }"
							>Professional</router-link
						>
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
export default {};
</script>

<style lang="sass" scoped></style>
