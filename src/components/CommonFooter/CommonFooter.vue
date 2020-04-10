<template>
	<van-tabbar v-model="active" active-color="#424242" inactive-color="#c4c4c4" @change="onChange">
		<van-tabbar-item v-for="item in icon">
			<span>{{item.title}}</span>
			<template #icon="props">
				<img :src="props.active ? item.inactive : item.active" />
			</template>
		</van-tabbar-item>
	</van-tabbar>
</template>

<script>
	import {
		Notify,
		Tabbar,
		TabbarItem
	} from 'vant';
	export default {
		name: 'CommonFotter',
		components: {
			[Tabbar.name]: Tabbar,
			[TabbarItem.name]: TabbarItem,
		},
		data() {
			return {
				active: 0,
				tabbar:['Home','List','Car','My'],
				icon: [{
						title: '首页',
						active: require('./images/home.png'),
						inactive: require('./images/home-on.png'),
						link: ''
					},
					{
						title: '列表',
						active: require('./images/list.png'),
						inactive: require('./images/list-on.png'),
						link: 'list'
					},
					{
						title: '购物车',
						active: require('./images/car.png'),
						inactive: require('./images/car-on.png'),
						link: 'car'
					},
					{
						title: '我的',
						active: require('./images/my.png'),
						inactive: require('./images/my-on.png'),
						link: 'my'
					}
				]
			}
		},
		watch: {	
			 $route(to, from) {
				 //路由高亮监听
				 this.active=this.tabbar.indexOf(to.name)
			 }
		},
		methods: {
			onChange(index) {
				this.$router.push({
					path: '/' + this.icon[index].link
				})
			},			 
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
