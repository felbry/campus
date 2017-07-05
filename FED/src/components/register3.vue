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
							恭喜，您已经成功验证了邮箱。<br/>马上完善信息，以便更好的找到组织，体验更全面的功能吧。
						</div>
						<div class="field">
							<label>你的名字</label>
							<div class="ui input">
								<input type="password" placeholder="可以是昵称，但真实姓名更容易与同伴交流哦~">
							</div>
						</div>
						<div class="two fields">
							<div class="field">
								<label>高校</label>
								<select class="ui fluid search dropdown campus">
									<option value="">选择高校</option>
									<option v-for="(val, idx) in campuses"
											:value="idx">{{val | getName}}</option>
								</select>
							</div>
							<div class="field">
								<label>学院</label>
								<select class="ui fluid search dropdown academy">
									<option value="">选择学院</option>
									<option v-for="(val, idx) in academies"
											:value="idx">{{val | getName}}</option>
								</select>
							</div>
						</div>
						<div class="two fields">
							<div class="field">
								<label>专业</label>
								<select class="ui fluid search dropdown profession">
									<option value="">选择专业</option>
									<option v-for="(val, idx) in professions"
											:value="idx">{{val | getName}}</option>
								</select>
							</div>
							<div class="two fields">
								<div class="field f-grade-field">
									<label>年级</label>
									<select class="ui fluid search dropdown grade">
										<option value="">年级</option>
										<option v-for="(val, idx) in grades"
												:value="idx">{{val}}</option>
									</select>
								</div>
								<div class="field">
									<label>班级</label>
									<select class="ui fluid search dropdown class">
										<option value="">班级</option>
										<option v-for="(val, idx) in classes"
												:value="idx + 1">{{val | getName}}</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div @click="submit" class="ui fluid large teal button">完成注册</div>
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
	beforeRouteEnter(to, from, next) {
        // Fetch.get(config.url + '/api/campusInfo').then(res => {
        //     next(vm => {
        //         vm.campuses = res.campuses;
        //     });
        // });
		next();
    },
	data () {
		return {
			errorInfoList: [],
			campusIdx: null,
            campuses: [],
            academyIdx: null,
            academies: [],
            professionIdx: null,
            professions: [],
            gradeIdx: null,
            grades: [],
            classIdx: null,
            classes: [],
		};
	},
	mounted() {
        var that = this;
        $('.campus').dropdown({
            onChange: function(idx) {
                that.campusIdx = idx;
                Fetch.get(config.url + '/api/academyInfo/' + that.campuses[idx]._id).then(res => {
                    $('.academy .text').addClass('default').text('选择学院');
                    $('.profession .text').addClass('default').text('选择专业');
                    $('.grade .text').addClass('default').text('年级');
                    $('.class .text').addClass('default').text('班级');
                    that.professions = null;
                    that.grades = null;
                    that.classes = null;
                    that.academyIdx = null;
                    that.professionIdx = null;
                    that.gradeIdx = null;
                    that.classIdx = null;

                    that.academies = res.academies;
                }, err => {
                    console.error(err);
                });
            }
        });
        $('.academy').dropdown({
            onChange: function(idx) {
                that.academyIdx = idx;
                Fetch.get(config.url + '/api/professionInfo/' + that.academies[idx]._id).then(res => {
                    $('.profession .text').addClass('default').text('选择专业');
                    $('.grade .text').addClass('default').text('年级');
                    $('.class .text').addClass('default').text('班级');
                    that.grades = null;
                    that.classes = null;
                    that.professionIdx = null;
                    that.gradeIdx = null;
                    that.classIdx = null;

                    that.professions = res.professions;
                }, err => {
                    console.error(err);
                });
            }
        });
        $('.profession').dropdown({
            onChange: function(idx) {
                that.professionIdx = idx;
                $('.grade .text').addClass('default').text('年级');
                $('.class .text').addClass('default').text('班级');
                that.grades = [2014, 2015, 2016, 2017];
                that.classes = null;
                that.gradeIdx = null;
                that.classIdx = null;
            }
        });
        $('.grade').dropdown({
            onChange: function(idx) {
                that.gradeIdx = idx;
                Fetch.get(config.url + '/api/classInfo/' + that.professions[that.professionIdx]._id + '/' + that.grades[idx]).then(res => {
                    $('.class .text').addClass('default').text('班级');
                    that.classIdx = null;
                    that.classes = res.classes;
                }, err => {
                    console.error(err);
                });
            }
        });
        $('.class').dropdown({
            onChange: function(idx) {
                that.classIdx = idx;
            }
        });
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

	.ui.form select {
        width: 130px;
    }

	.show-error {
        display: block!important;
    }

	.f-padding {
        padding: 0 0 0 1em!important;
    }

    .f-grade-field {
        padding-left: 1em!important;
    }
</style>
