<template>
    <div class="index-academy">
        添加专业：<input v-model="profession" type="text"><button @click="setProfessionInfo" type="button">添加</button><br/>
        <ul>
            <li v-for="item in professionList">
                {{item.name}}
                <button @click="getClassInfo(item._id)" type="button">查看班级</button>
                添加班级：年级<input v-model="grade" type="text">班级编号<input v-model="cid" type="text"><button @click="setClassInfo(item)" type="button">添加</button>
            </li>
        </ul>
        <ul>
            <li v-for="item in classList">{{item.grade}} - {{item.cid}}</li>
        </ul>
        <hr/>
        录入本学院教职工信息：<br/>
        教师编号：<input v-model="teacherId" type="text"><br/>
        教师姓名：<input v-model="teacherName" type="text">
        <button @click="setTeacherInfo" type="button">添加</button><br/>
        录入本学院课程信息：<br/>
        课程编号：<input v-model="courseId" type="text"><br/>
        课程名称：<input v-model="courseName" type="text">
        <button @click="setCourseInfo" type="button">添加</button><br/>
        <hr/>
        新增学期：<br/>
        名称(备注)：<input v-model="termName" type="text"><br/>
        起始时间：<input v-model="startTime" type="date"><br/>
        结束时间：<input v-model="endTime" type="date"><br/>
        <button @click="setTermInfo" type="button">添加</button><br/>
        <button @click="showCurriculumInfo" type="button">显示课程设置</button><br/>
        学期：<select v-model="term">
            <option v-for="(item, idx) in termArr"
                    :value="idx">{{item.name}}</option>
        </select>
        课程：<select v-model="termCourse">
            <option v-for="(item, idx) in termCourseArr"
                    :value="idx">{{item.name}}</option>
        </select>
        教师：<select v-model="termTeacher">
            <option v-for="(item, idx) in termTeacherArr"
                    :value="idx">{{item.name}}</option>
        </select>
        专业：<select v-model="termProfession">
            <option v-for="(item, idx) in termProfessionArr"
                    :value="idx">{{item.name}}</option>
        </select>
        年级：<select @change="getTermClassInfo"
                      v-model="termGrade">
            <option v-for="(item, idx) in termGradeArr"
                    :value="idx">{{item}}</option>
        </select>
        班级：<select v-model="termClasses">
            <option v-for="(item, idx) in termClassesArr"
                    :value="idx">{{item.cid}}</option>
        </select>
        <button @click="setCurriculumInfo" type="button">添加</button><br/>
    </div>
</template>

<script>
import config from '../../config';
import Fetch from '../../assets/tools/fetchWithToken';

export default {
    name: 'index-academy',
    data() {
        return {
            profession: null,
            grade: null,
            cid: null,
            professionList: [],
            classList: [],
            teacherId: null,
            teacherName: null,
            courseId: null,
            courseName: null,
            // one term
            termName: null,
            startTime: null,
            endTime: null,
            term: null,
            termGrade: null,
            termCourse: null,
            termTeacher: null,
            termProfession: null,
            termClasses: null,
            termArr: null,
            termGradeArr: [2013, 2014, 2015, 2017],
            termCourseArr: null,
            termTeacherArr: null,
            termProfessionArr: null,
            termClassesArr: null,
        }
    },
    mounted() {
        this.getProfessionInfo();
    },
    methods: {
        showCurriculumInfo () {
            this.getTermInfo();
            this.getTermCourseInfo();
            this.getTermTeacherInfo();
            this.getTermProfessionInfo();
        },
        getProfessionInfo () {
            Fetch.get(config.url + '/admin/professionInfo').then(res => {
                this.professionList = res.professions;
            });
        },
        getClassInfo (profession) {
            Fetch.get(config.url + '/admin/classInfo/' + profession).then(res => {
                this.classList = res.classes;
            });
        },
        getTermInfo () {
            Fetch.get(config.url + '/admin/termInfo').then(res => {
                this.termArr = res.terms;
            });
        },
        getTermCourseInfo () {
            Fetch.get(config.url + '/admin/courseInfo').then(res => {
                this.termCourseArr = res.courses;
            });
        },
        getTermTeacherInfo () {
            Fetch.get(config.url + '/admin/teacherInfo').then(res => {
                this.termTeacherArr = res.teachers;
            });
        },
        getTermClassInfo () {
            if (this.termProfession != null) {
                Fetch.get(config.url + '/admin/classInfo/' + this.termProfessionArr[this.termProfession]._id + '/' + this.termGradeArr[this.termGrade]).then(res => {
                    this.termClassesArr = res.classes;
                });
            } else {
                alert('请先选择专业');
                this.termGrade = null;
            }
        },
        getTermProfessionInfo () {
            Fetch.get(config.url + '/admin/professionInfo').then(res => {
                this.termProfessionArr = res.professions;
            });
        },
        setProfessionInfo () {
            Fetch.post(config.url + '/admin/professionInfo', {
                name: this.profession,
            }).then(res => {
                if (!res.msg) {
                    this.getProfessionInfo();
                } else {
                    alert(res.msg);
                }
            });
        },
        setClassInfo (profession) {
            Fetch.post(config.url + '/admin/classInfo', {
                grade: this.grade,
                cid: this.cid,
                professionId: profession._id,
                professionName: profession.name
            }).then(res => {
                if (!res.msg) {
                    alert('添加班级成功');
                } else {
                    alert(res.msg);
                }
            });
        },
        setCourseInfo () {
            Fetch.post(config.url + '/admin/courseInfo', {
                cid: this.courseId,
                name: this.courseName,
            }).then(res => {
                if (!res.msg) {
                    alert('添加课程信息成功');
                } else {
                    alert(res.msg);
                }
            });
        },
        setTeacherInfo () {
            Fetch.post(config.url + '/admin/teacherInfo', {
                tid: this.teacherId,
                name: this.teacherName,
            }).then(res => {
                if (!res.msg) {
                    alert('添加教师信息成功');
                } else {
                    alert(res.msg);
                }
            });
        },
        setTermInfo () {
            Fetch.post(config.url + '/admin/termInfo', {
                name: this.termName,
                startTime: this.startTime,
                endTime: this.endTime
            }).then(res => {
                if (!res.msg) {
                    alert('添加学期成功');
                } else {
                    alert(res.msg);
                }
            });
        },
        setCurriculumInfo () {
            Fetch.post(config.url + '/admin/curriculumInfo', {
                term: this.termArr[this.term]._id,
                grade: this.termGradeArr[this.termGrade],
                course: JSON.stringify(this.termCourseArr[this.termCourse]),
                teacher: this.termTeacherArr[this.termTeacher]._id,
                classes: [JSON.stringify(this.termClassesArr[this.termClasses])]
            }).then(res => {
                if (!res.msg) {
                    alert('补充课程信息成功');
                } else {
                    alert(res.msg);
                }
            });
        },
    }
}
</script>

<style lang="css" scoped>
</style>
