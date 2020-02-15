<template>
	<div>
		axios 테스트
		<v-btn @click="clickMe()">테스트</v-btn>
		<v-btn @click="testForStatement()">테스트1</v-btn>
		<v-btn @click="testForLoop()">testForLoop</v-btn>
		<v-btn @click="incorrectExample()">incorrectExample</v-btn>
		<div>{{ message }} / {{ loading }}</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data: () => ({
		message: 'Hey!',
		loading: false,
		count: 0,
		arrayTest: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		info: ' ',
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

		testForStatement() {
			this.logInOrder().then(res => console.log(res));
		},

		forfunction() {
			axios
				.get('https://api.coindesk.com/v1/bpi/currentprice.json')
				.then(response => (this.info = response.data));

			return this.info;
		},
		// 잘못된 예제 forloop
		incorrectExample() {
			let users = [];
			for (let i = 0; i < 100; i++) {
				axios
					.get('https://api.coindesk.com/v1/bpi/currentprice.json')
					.then(response => {
						users.push(response);
					});
			}
			Promise.all(users).then(() => console.log(users));
		},

		async logInOrder() {
			const textPromises = this.arrayTest.map(async val => {
				const res = await this.forfunction();
				return res;
			});

			for (const textPromises of textPromises) {
				console.log(await textPromises);
			}
		},
		// 맞는예제 forloop
		testForLoop() {
			let users = [];
			let abc = [];
			let count = 0;
			for (let i = 0; i < 100; i++) {
				abc.push(
					axios
						.get('https://api.coindesk.com/v1/bpi/currentprice.json')
						.then(response => {
							users.push(response);
						}),
				);
			}

			Promise.all(abc).then(() => console.log(users));
		},
	},
};
</script>

<style></style>
