<template>
	<div class="hello">
		123
		<mt-button type="default">default</mt-button>
		<mt-button type="primary">primary</mt-button>
		<mt-button type="danger">danger</mt-button>
		<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
		<mt-switch></mt-switch>
		<mt-switch>Switch</mt-switch>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">选项一</mt-tab-item>
			<mt-tab-item id="2">选项二</mt-tab-item>
			<mt-tab-item id="3">选项三</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<mt-cell v-for="n in 10" :title="'内容 ' + n" />
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<mt-cell v-for="n in 4" :title="'测试 ' + n" />
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<mt-cell v-for="n in 6" :title="'选项 ' + n" />
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		methods: {
			onValuesChange(picker, values) {
				if(values[0] > values[1]) {
					picker.setSlotValue(1, values[0]);
				}
			}
		},
		data() {
			return {
				selected:true,
				slots: [{
					flex: 1,
					values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
					className: 'slot1',
					textAlign: 'right'
				}, {
					divider: true,
					content: '-',
					className: 'slot2'
				}, {
					flex: 1,
					values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
					className: 'slot3',
					textAlign: 'left'
				}]
			};
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>