<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app clipped>
			<v-list dense>
				<v-list-item link>
					<v-list-item-action>
						<v-icon>mdi-view-dashboard</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Dashboard</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link>
					<v-list-item-action>
						<v-icon>mdi-settings</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Settings</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-group>
					<template v-slot:activator>
						<v-list-item-action>
							<v-icon>mdi-settings</v-icon>
						</v-list-item-action>
						<v-list-item-title>Example</v-list-item-title>
					</template>

					<v-list-group no-action sub-group value="true">
						<template v-slot:activator>
							<v-list-item-content>
								<v-list-item-title>Admin</v-list-item-title>
							</v-list-item-content>
						</template>

						<v-list-item v-for="(admin, i) in admins" :key="i" link>
							<v-list-item-title v-text="admin[0]"></v-list-item-title>
							<v-list-item-icon>
								<v-icon>mdi-account-multiple-outline</v-icon>
							</v-list-item-icon>
						</v-list-item>
					</v-list-group>

					<v-list-group sub-group no-action>
						<template v-slot:activator>
							<v-list-item-content>
								<v-list-item-title>Actions</v-list-item-title>
							</v-list-item-content>
						</template>
						<v-list-item v-for="(crud, i) in cruds" :key="i" @click="">
							<v-list-item-title v-text="crud[0]"></v-list-item-title>
							<v-list-item-action>
								<v-icon v-text="crud[1]"></v-icon>
							</v-list-item-action>
						</v-list-item>
					</v-list-group>
				</v-list-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app clipped-left>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title>Application</v-toolbar-title>
		</v-app-bar>

		<v-content> <HelloWorld></HelloWorld></v-content>

		<v-footer app>
			<span>&copy; 2019</span>
		</v-footer>
	</v-app>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
export default {
	props: {
		source: String,
	},

	components: { HelloWorld },
	data: () => ({
		drawer: null,
		admins: [
			['Management', 'people_outline'],
			['Settings', 'settings'],
		],
		cruds: [
			['Create', 'mdi-folder-plus'],
			['Read', 'mdi-book-open'],
			['Update', 'mdi-update'],
			['Delete', 'mdi-delete'],
		],
	}),
	created() {
		this.$vuetify.theme.dark = true;
	},
};
</script>
