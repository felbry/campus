<template>
	<div class="ui middle aligned center aligned grid">
        <div class="column">
			<div class="ui three top attached steps">
				<div class="step disabled">
					<i class="send icon"></i>
					<div class="content">
						<div class="title">Step 1</div>
						<div class="description">注册</div>
					</div>
				</div>
				<div class="step disabled">
					<i class="mail icon"></i>
					<div class="content">
						<div class="title">Step 2</div>
						<div class="description">验证邮箱</div>
					</div>
				</div>
				<div class="step active">
					<i class="check icon"></i>
					<div class="content">
						<div class="title">Step 3</div>
						<div class="description">完善信息</div>
					</div>
				</div>
			</div>
			<div class="ui attached segment">
				<div class="ui large form">
					<div class="ui stacked segment">
						<div class="field">
							<label>ddd</label>
							<div class="ui input">
								<input type="password" placeholder="Password">
							</div>
						</div>
					</div>
					<div @click="submit" class="ui fluid large teal button">Login</div>
					<div :class="{'show-error': errorInfoList.length}" class="ui error message">
						<ul class="list">
							<li v-for="i in errorInfoList">{{i}}</li>
						</ul>
					</div>
				</div>
			</div>
        </div>
	</div>
</template>

<script>
import config from '../config';
import Fetch from '../assets/tools/fetchWithToken';

export default {
	data () {
		return {
			errorInfoList: [],
		};
	},
	methods: {
		submit () {

		},
	},
}
</script>

<style>
	body {
      background-color: #DADADA;
    }

    body > .grid {
      height: 100%;
    }

    .column {
      max-width: 560px;
    }

    .grid {
        height: 100%;
    }

	label {
		text-align: left;
		padding-left: 5px;
	}

	.show-error {
        display: block!important;
    }
</style>
