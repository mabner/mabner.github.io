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
						<p><strong>Técnico de Suporte Junior</strong></p><br />
						• Suporte ao sistema de automação e gestão comercial desenvolvido pela software house.
						<br />
					</Popup>
				</div>
				<div class="grid-item">
					<button @click="() => TogglePopup('buttonLiga')"><img class="logo-work"
							src="../assets/logo_liga.png" alt="LIGA Sistemas"></button>
					<Popup v-if="popupTriggers.buttonLiga" :TogglePopup="() => TogglePopup('buttonLiga')">
						<p><strong>Analista de Suporte II</strong></p><br />
						<p>• Instalação, atualização e manutenção do aplicativo de gerenciamento de laboratórios.</p>
						<p>• Resolução de problemas provenientes do uso do sistema, de banco de dados e de comunicação
							com
							analisadores clínicos.</p>
						<p>• Confecção de modelos de impressão e relatórios do sistema.</p>
						<p>• Manter registro das tarefas em sistema de tickets e backlog.</p>
						<br />
					</Popup>
				</div>
				<div class="grid-item">
					<button @click="() => TogglePopup('buttonAutomatec')"><img class="logo-work"
							src="../assets/logo_automatec.png" alt="Automatec Automação Comercial"></button>
					<Popup v-if="popupTriggers.buttonAutomatec" :TogglePopup="() => TogglePopup('buttonAutomatec')">
						<p><strong>Técnico de Suporte</strong></p><br />
						<p>• Instalação e suporte técnico a aplicações de automação comercial e ERPs dos
							desenvolvedores<br />
							Getway Automação Comercial, Xpert Tecnologia em Automação DigiSat Tecnologia, CompuFour
							Software, GDOOR Sistemas e JL Sistemas.</p>
						<p>• Instalação e manutenção de servidores MS SQL.</p>
						<p>• Conversão de banco de dados entre diferentes aplicações, nos formatos Firebird e SQL
							Server.
						</p>
						<p>• Manutenção preventiva e corretiva em banco de dados.</p>
						<p>• Limpeza em banco de dados para novas implantações.</p>
						<p>• Levantamento de necessidades do cliente para implantação de sistemas e equipamentos.</p>
						<p>• Ministração de treinamentos ao cliente.</p>
						<p>• Manter registro dos atendimentos e soluções no sistema interno de chamados.</p>

						<br />
						<p><strong>Técnico de Informática</strong></p><br />
						<p>• Formatação de computadores.</p>
						<p>• Detecção de problemas de hardware.</p>
						<p>• Configuração e manutenção de redes.</p>
						<p>• Instalação e configuração de sistemas operacionais Windows e Windows Server.</p>
						<p>• Instalação e configuração de SQL Server.</p>
						<p>• Limpeza geral do hardware do cliente.</p>
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