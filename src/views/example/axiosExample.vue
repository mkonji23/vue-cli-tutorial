<template>
	<div>
		axios 테스트
	</div>
</template>

<script>
export default {
	data: () => ({
		message: 'Hey!',
		loading: false,
	}),

	methods: {
		clickMe() {
			this.loading = true;
			this.message = 'Wait for it...';
			setTimeout(() => {
				this.loading = false;
				this.message = "You've clicked me!";
			}, 2000);
		},
	},
};
</script>

<style></style>
