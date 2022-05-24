<template>
	<div>
		<main class="overview-page">
			<h1>Resumo</h1>
			<h2>Experiencia Profissional</h2>
			<div class="grid-container">
				<div class="grid-item">

					<!-- TODO: format the text properly with <p> tags, 
						style the popup,
						change close button text for icon and position,
						style h1, h2 and h3,
						change colour theme-->

					<button @click="() => TogglePopup('buttonSyslink')"><img class="logo-work"
							src="../assets/logo_syslink.png" alt="SYSLINK Informática"></button>
					<Popup v-if="popupTriggers.buttonSyslink" :TogglePopup="() => TogglePopup('buttonSyslink')">
						<p><strong>Técnico de Suporte Junior</strong></p>
						Suporte ao sistema de automação e gestão comercial desenvolvido pela software house.
						<br />
					</Popup>
				</div>
				<div class="grid-item">
					<button @click="() => TogglePopup('buttonLiga')"><img class="logo-work"
							src="../assets/logo_liga.png" alt="LIGA Sistemas"></button>
					<Popup v-if="popupTriggers.buttonLiga" :TogglePopup="() => TogglePopup('buttonLiga')">
						<p><strong>Analista de Suporte II</strong></p>
						• Instalação, atualização e manutenção do aplicativo de gerenciamento de laboratórios.
						• Resolução de problemas provenientes do uso do sistema, de banco de dados e de comunicação com
						analisadores clínicos.
						• Confecção de modelos de impressão e relatórios do sistema.
						• Manter registro das tarefas em sistema de tickets e backlog.
						<br />
					</Popup>
				</div>
				<div class="grid-item">
					<button @click="() => TogglePopup('buttonAutomatec')"><img class="logo-work"
							src="../assets/logo_automatec.png" alt="Automatec Automação Comercial"></button>
					<Popup v-if="popupTriggers.buttonAutomatec" :TogglePopup="() => TogglePopup('buttonAutomatec')">
						<p><strong>Técnico de Suporte</strong></p>
						• Instalação e suporte técnico a aplicações de automação comercial e ERPs dos desenvolvedores
						Getway Automação Comercial, Xpert Tecnologia em Automação DigiSat Tecnologia, CompuFour
						Software, GDOOR Sistemas e JL Sistemas.
						• Instalação e manutenção de servidores MS SQL.
						• Conversão de banco de dados entre diferentes aplicações, nos formatos Firebird e SQL Server.
						• Manutenção preventiva e corretiva em banco de dados.
						• Limpeza em banco de dados para novas implantações.
						• Levantamento de necessidades do cliente para implantação de sistemas e equipamentos.
						• Ministração de treinamentos ao cliente.
						• Manter registro dos atendimentos e soluções no sistema interno de chamados.<br />
						<hr>
						<p><strong>Técnico de Informática</strong></p>
						• Formatação de computadores.
						• Detecção de problemas de hardware.
						• Configuração e manutenção de redes.
						• Instalação e configuração de sistemas operacionais Windows e Windows Server.
						• Instalação e configuração de SQL Server.
						• Limpeza geral do hardware do cliente.
						<br />
					</Popup>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Popup from '../components/Popup.vue';

const popupTriggers = ref({
	buttonSyslink: false,
	buttonLiga: false,
	buttonAutomatec: false,
});

const TogglePopup = (trigger) => {
	popupTriggers.value[trigger] = !popupTriggers.value[trigger]
};

</script>

<style lang="scss" scoped>
.grid-container {
	display: grid;
}

.logo-work {
	max-width: 220px;
	border: 1px solid rgba($color: #4ade80, $alpha: 0.2);
	border-radius: 10px;
	padding: 8px;

	&:hover {
		border: 1px solid rgba($color: #4ade80, $alpha: 0.8);
	}
}
</style>