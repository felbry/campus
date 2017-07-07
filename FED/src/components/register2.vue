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
								{{this.$route.body.email}}
							</h4>
							<p>首次注册请耐心等候验证邮件，无需重复发送邮件</p>
						</div>
						<div class="field">
							<label>验证码</label>
							<div class="ui action input">
								<input v-model="code" type="text" placeholder="请勿重复获取验证码">
								<div @click="upsertCode" class="ui teal right labeled icon button">
									<i class="send outline icon"></i>
									{{interval ? interval + '秒后重试' : '获取验证码'}}
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
import { upsertCode, verifyEmail } from '../api';

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
			code: '',
			interval: 0,
			errorInfoList: [],
		};
	},
	methods: {
		submit () {
			verifyEmail({
				email: this.$route.body.email,
				code: this.code
			}).then(v => {
				if (!v.code) {
					this.$router.push({
						name: 'patchInfo',
						body: {
							email: this.$route.body.email
						}
					});
				} else {
					this.errorInfoList.push(v.msg);
				}
			});
		},
		upsertCode () {
			if (this.interval) {
				return;
			}
			let con = confirm('确定发送吗？首次注册请耐心等候邮件，请勿重复发送。');
			if (con) {
				upsertCode({
					username: this.$route.body.email,
					type: 1
				}).then(v => {
					if (!v.code) {
						// 进入倒计时
						let that = this;
						that.interval = 60;
						let myInterval = setInterval(function () {
							if (!that.interval) {
								clearInterval(myInterval);
							} else {
								that.interval--;
							}
						});
					} else {
						this.errorInfoList.push(v.msg);
					}
				});
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
