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
				<div class="step active">
					<i class="mail icon"></i>
					<div class="content">
						<div class="title">Step 2</div>
						<div class="description">验证邮箱</div>
					</div>
				</div>
				<div class="step disabled">
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
							<h4 class="ui teal header">
								当前邮箱：<br/>
								505792925@qq.com
							</h4>
							<p>首次注册请耐心等候验证邮件，无需重复发送邮件</p>
						</div>
						<div class="field">
							<label>验证码</label>
							<div class="ui action input">
								<input type="text" placeholder="请勿重复获取验证码">
								<div @click="sendCode" class="ui teal right labeled icon button">
									<i class="send outline icon"></i>
									获取验证码
								</div>
							</div>
						</div>
					</div>
					<div @click="submit" class="ui fluid large teal button">提交</div>
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
	beforeRouteEnter (to, from, next) {
		if (to.body.email) {
			next();
		} else {
			alert('非法操作，请返回');
		}
	},
	data () {
		return {
			errorInfoList: [],
		};
	},
	methods: {
		submit () {
			this.$router.push('/patch-info');
		},
		sendCode () {
			var con = confirm('确定发送吗？首次注册请耐心等候邮件，请勿重复发送。');
			if (con) {
				
			} else {
				return;
			}
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
