<template>
	<div>
		<main class="contact-page">
			<h1>Contato</h1>
			<form name="contact-me" method="post" data-netlify="true" data-netlify-honeypot="bot-field" netlify>
				<input type="hidden" name="form-name" value="contact-me" />
				<div class="form-group">
					<label for="name">Nome</label>
					<input type="text" name="name" id="name" class="form-control" placeholder="Nome" required>
				</div>
				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" name="email" id="email" class="form-control" placeholder="Email" required>
				</div>
				<div class="form-group">
					<label for="message">Mensagem</label>
					<textarea name="message" id="message" class="form-control" placeholder="Mensagem" required></textarea>
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn-primary">Enviar</button>
				</div>
			</form>
		</main>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
</style>
