<template>
	<div class="ui middle aligned center aligned grid">
        <div class="column">
			<div class="ui three top attached steps">
				<div class="step active">
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
							<label>用户名</label>
							<div class="ui input">
								<input v-model="email" type="text" placeholder="email">
							</div>
						</div>
						<div class="field">
							<label>密码</label>
							<div class="ui input">
								<input v-model="pwd" type="password" placeholder="password">  
							</div>
						</div>
						<div class="field">
							<label>重复密码</label>
							<div class="ui input">
								<input v-model="rePwd" type="password" placeholder="repeat password">
							</div>
						</div>
					</div>
					<div @click="submit" class="ui fluid large teal button">注册</div>
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
import { register } from '../api';

export default {
	data () {
		return {
			email: null,
			pwd: null,
			rePwd: null,
			errorInfoList: [],
		};
	},
	methods: {
		submit () {
			this.errorInfoList = [];
			if (this.pwd == this.rePwd) {
				let reg = /^[a-z_0-9.-]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$/i;
				if (reg.test(this.email)) {
					if (this.pwd) {
						register({
							username: this.email,
							password: this.pwd
						}).then(v => {
							if (!v.code) {
								this.$router.push({
									name: 'verifyEmail',
									params: {
										email: v.data.username
									}
								});
							} else {
								this.errorInfoList.push(v.msg);
							}
						});
					} else {
						this.errorInfoList.push('请填写完整信息');
					}
				} else {
					this.errorInfoList.push('邮箱格式不正确，请重新输入');
				}
			} else {
				this.errorInfoList.push('两次输入的密码不一致，请重新输入');
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
