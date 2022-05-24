<template>
	<div class="popup">
		<div class="popup-inner">
			<slot />
			<button class="popup-close" @click="TogglePopup()">
				 Fechar
			</button>
		</div>

	</div>
</template>

<script>
export default {
	props: ['TogglePopup'],
}
</script>

<style lang="scss" scoped>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 99;
	display: flex;
	justify-content: safe center;
	align-items: safe center;
}

.popup-inner {
	background: white;
	padding: 32px;
}
.popup-close{
	color: red;
}
</style>