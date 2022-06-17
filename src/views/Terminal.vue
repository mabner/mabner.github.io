<template>
	<div id="terminal">
	</div>
</template>

<script setup>
$(function () {
	$('#terminal').terminal(
		{
			help: function () {
				this.echo('Available commands are: automatec, liga, syslink, unipac, puc.');
			},
			automatec: function () {
				this.error('Automatec Automação Comercial');
				this.error('..:: Técnico de Suporte ::..\n')
				this.echo('• Instalação e suporte técnico a aplicações de automação comercial e ERPs dos desenvolvedores Getway Automação Comercial, Xpert Tecnologia em Automação DigiSat Tecnologia, CompuFour Software, GDOOR Sistemas e JL Sistemas.\n• Instalação e manutenção de servidores MS SQL.\n• Conversão de banco de dados entre diferentes aplicações, nos formatos Firebird e SQL Server.\n• Manutenção preventiva e corretiva em banco de dados.\n• Limpeza em banco de dados para novas implantações.\n• Levantamento de necessidades do cliente para implantação de sistemas e equipamentos.\n• Ministração de treinamentos ao cliente.\n• Manter registro dos atendimentos e soluções no sistema interno de chamados.\n');
				this.error('..:: Técnico de Informática ::..\n');
				this.echo('• Formatação de computadores.\n• Detecção de problemas de hardware.\n• Configuração e manutenção de redes.\n• Instalação e configuração de sistemas operacionais Windows e Windows Server.\n• Instalação e configuração de SQL Server.\n• Limpeza geral do hardware do cliente.\n');
			},
			liga: function () {
				this.error('LIGA Sistemas');
				this.error('..:: Analista de Suporte II ::..\n');
				this.echo('• Instalação, atualização e manutenção do aplicativo de gerenciamento de laboratórios.\n• Resolução de problemas provenientes do uso do sistema, de banco de dados e de comunicação com analisadores clínicos.\n• Confecção de modelos de impressão e relatórios do sistema.\n• Manter registro das tarefas em sistema de tickets e backlog.\n');
			},
			syslink: function () {
				this.error('SYSLINK Informática');
				this.error('..:: Técnico de Suporte Junior ::..\n');
				this.echo('• Suporte ao sistema de automação e gestão comercial desenvolvido pela software house.\n');
			},
			unipac: function () {
				this.error('UNIPAC (Unica)\n');
				this.error('..:: Ciência da Computação ::..\n');
			},
			puc: function () {
				this.error('PUC Minas\n');
				this.error('..:: Desenvolvimento Web Full Stack ::..\n');
			},
		},
		{
			greetings: 'Under construction...\nType help to display available commands.\n',
			checkArity: false,
			completion: true,
			name: 'marcos_terminal',
			prompt: 'Marcos Terminal > '
		},
	);
});
</script>

<style lang="scss" scoped>
.terminal {
	height: 100vh;
	width: 100vw;
}
</style>