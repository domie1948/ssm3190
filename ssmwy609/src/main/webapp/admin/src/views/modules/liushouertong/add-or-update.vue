<template>
  <div class="addEdit-block">
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
	  :style="{backgroundColor:addEditForm.addEditBoxColor}"
    >
      <el-row>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="儿童姓名" prop="ertongxingming">
          <el-input v-model="ruleForm.ertongxingming" 
              placeholder="儿童姓名" clearable  :readonly="ro.ertongxingming"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="儿童姓名" prop="ertongxingming">
              <el-input v-model="ruleForm.ertongxingming" 
                placeholder="儿童姓名" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie" placeholder="请选择性别">
            <el-option
                v-for="(item,index) in xingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="性别" prop="xingbie">
	      <el-input v-model="ruleForm.xingbie"
                placeholder="性别" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="年龄" prop="nianling">
          <el-input v-model="ruleForm.nianling" 
              placeholder="年龄" clearable  :readonly="ro.nianling"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="年龄" prop="nianling">
              <el-input v-model="ruleForm.nianling" 
                placeholder="年龄" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="24">  
        <el-form-item class="upload" v-if="type!='info' && !ro.zhaopian" label="照片" prop="zhaopian">
          <file-upload
          tip="点击上传照片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.zhaopian?ruleForm.zhaopian:''"
          @change="zhaopianUploadChange"
          ></file-upload>
        </el-form-item>
        <div v-else>
          <el-form-item v-if="ruleForm.zhaopian" label="照片" prop="zhaopian">
            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.zhaopian.split(',')" :src="item" width="100" height="100">
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="家庭住址" prop="jiatingzhuzhi">
          <el-input v-model="ruleForm.jiatingzhuzhi" 
              placeholder="家庭住址" clearable  :readonly="ro.jiatingzhuzhi"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="家庭住址" prop="jiatingzhuzhi">
              <el-input v-model="ruleForm.jiatingzhuzhi" 
                placeholder="家庭住址" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="居住条件" prop="juzhutiaojian">
          <el-input v-model="ruleForm.juzhutiaojian" 
              placeholder="居住条件" clearable  :readonly="ro.juzhutiaojian"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="居住条件" prop="juzhutiaojian">
              <el-input v-model="ruleForm.juzhutiaojian" 
                placeholder="居住条件" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="家庭状况" prop="jiatingzhuangkuang">
          <el-input v-model="ruleForm.jiatingzhuangkuang" 
              placeholder="家庭状况" clearable  :readonly="ro.jiatingzhuangkuang"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="家庭状况" prop="jiatingzhuangkuang">
              <el-input v-model="ruleForm.jiatingzhuangkuang" 
                placeholder="家庭状况" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="家庭收入" prop="jiatingshouru">
          <el-input v-model="ruleForm.jiatingshouru" 
              placeholder="家庭收入" clearable  :readonly="ro.jiatingshouru"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="家庭收入" prop="jiatingshouru">
              <el-input v-model="ruleForm.jiatingshouru" 
                placeholder="家庭收入" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="是否在读" prop="shifouzaidu">
          <el-select v-model="ruleForm.shifouzaidu" placeholder="请选择是否在读">
            <el-option
                v-for="(item,index) in shifouzaiduOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="是否在读" prop="shifouzaidu">
	      <el-input v-model="ruleForm.shifouzaidu"
                placeholder="是否在读" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="学校名称" prop="xuexiaomingcheng">
          <el-input v-model="ruleForm.xuexiaomingcheng" 
              placeholder="学校名称" clearable  :readonly="ro.xuexiaomingcheng"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="学校名称" prop="xuexiaomingcheng">
              <el-input v-model="ruleForm.xuexiaomingcheng" 
                placeholder="学校名称" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="学校联系人" prop="xuexiaolianxiren">
          <el-input v-model="ruleForm.xuexiaolianxiren" 
              placeholder="学校联系人" clearable  :readonly="ro.xuexiaolianxiren"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="学校联系人" prop="xuexiaolianxiren">
              <el-input v-model="ruleForm.xuexiaolianxiren" 
                placeholder="学校联系人" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="学校地址" prop="xuexiaodizhi">
          <el-input v-model="ruleForm.xuexiaodizhi" 
              placeholder="学校地址" clearable  :readonly="ro.xuexiaodizhi"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="学校地址" prop="xuexiaodizhi">
              <el-input v-model="ruleForm.xuexiaodizhi" 
                placeholder="学校地址" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="年级" prop="nianji">
          <el-input v-model="ruleForm.nianji" 
              placeholder="年级" clearable  :readonly="ro.nianji"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="年级" prop="nianji">
              <el-input v-model="ruleForm.nianji" 
                placeholder="年级" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="班级" prop="banji">
          <el-input v-model="ruleForm.banji" 
              placeholder="班级" clearable  :readonly="ro.banji"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="班级" prop="banji">
              <el-input v-model="ruleForm.banji" 
                placeholder="班级" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="健康状况" prop="jiankangzhuangkuang">
          <el-input v-model="ruleForm.jiankangzhuangkuang" 
              placeholder="健康状况" clearable  :readonly="ro.jiankangzhuangkuang"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="健康状况" prop="jiankangzhuangkuang">
              <el-input v-model="ruleForm.jiankangzhuangkuang" 
                placeholder="健康状况" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="监护人信息" prop="jianhurenxinxi">
          <el-input v-model="ruleForm.jianhurenxinxi" 
              placeholder="监护人信息" clearable  :readonly="ro.jianhurenxinxi"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="监护人信息" prop="jianhurenxinxi">
              <el-input v-model="ruleForm.jianhurenxinxi" 
                placeholder="监护人信息" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item v-if="type!='info'"  label="联系方式" prop="lianxifangshi">
                <editor 
                    style="min-width: 200px; max-width: 600px;"
                    v-model="ruleForm.lianxifangshi" 
                    class="editor" 
                    action="file/upload">
                </editor>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.lianxifangshi" label="联系方式" prop="lianxifangshi">
                    <span v-html="ruleForm.lianxifangshi"></span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
      <el-form-item class="btn">
        <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
  data() {
    let self = this
    var validateIdCard = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isPhone(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
	  addEditForm: {"btnSaveFontColor":"#fff","selectFontSize":"14px","btnCancelBorderColor":"#DCDFE6","inputBorderRadius":"4px","inputFontSize":"14px","textareaBgColor":"#fff","btnSaveFontSize":"14px","textareaBorderRadius":"4px","uploadBgColor":"#fff","textareaBorderStyle":"solid","btnCancelWidth":"88px","textareaHeight":"120px","dateBgColor":"#fff","btnSaveBorderRadius":"20px","uploadLableFontSize":"14px","textareaBorderWidth":"1px","inputLableColor":"#606266","addEditBoxColor":"#fff","dateIconFontSize":"14px","btnSaveBgColor":"rgba(251, 0, 29, 0.73)","uploadIconFontColor":"#8c939d","textareaBorderColor":"#DCDFE6","btnCancelBgColor":"#ecf5ff","selectLableColor":"#606266","btnSaveBorderStyle":"solid","dateBorderWidth":"1px","dateLableFontSize":"14px","dateBorderRadius":"4px","btnCancelBorderStyle":"solid","selectLableFontSize":"14px","selectBorderStyle":"solid","selectIconFontColor":"#C0C4CC","btnCancelHeight":"44px","inputHeight":"40px","btnCancelFontColor":"#606266","dateBorderColor":"#DCDFE6","dateIconFontColor":"#C0C4CC","uploadBorderStyle":"solid","dateBorderStyle":"solid","dateLableColor":"#606266","dateFontSize":"14px","inputBorderWidth":"1px","uploadIconFontSize":"28px","selectHeight":"40px","inputFontColor":"#606266","uploadHeight":"148px","textareaLableColor":"#606266","textareaLableFontSize":"14px","btnCancelFontSize":"14px","inputBorderStyle":"solid","btnCancelBorderRadius":"20px","inputBgColor":"#fff","inputLableFontSize":"14px","uploadLableColor":"#606266","uploadBorderRadius":"4px","btnSaveHeight":"44px","selectBgColor":"#fff","btnSaveWidth":"88px","selectIconFontSize":"14px","dateHeight":"40px","selectBorderColor":"#DCDFE6","inputBorderColor":"#DCDFE6","uploadBorderColor":"#DCDFE6","textareaFontColor":"#606266","selectBorderWidth":"1px","dateFontColor":"#606266","btnCancelBorderWidth":"1px","uploadBorderWidth":"1px","textareaFontSize":"14px","selectBorderRadius":"4px","selectFontColor":"#606266","btnSaveBorderColor":"rgba(251, 0, 29, 0.73)","btnSaveBorderWidth":"1px"},
      id: '',
      type: '',
      ro:{
	ertongxingming : false,
	xingbie : false,
	nianling : false,
	zhaopian : false,
	jiatingzhuzhi : false,
	juzhutiaojian : false,
	jiatingzhuangkuang : false,
	jiatingshouru : false,
	shifouzaidu : false,
	xuexiaomingcheng : false,
	xuexiaolianxiren : false,
	xuexiaodizhi : false,
	nianji : false,
	banji : false,
	jiankangzhuangkuang : false,
	jianhurenxinxi : false,
	lianxifangshi : false,
      },
      ruleForm: {
        ertongxingming: '',
        xingbie: '',
        nianling: '',
        zhaopian: '',
        jiatingzhuzhi: '',
        juzhutiaojian: '',
        jiatingzhuangkuang: '',
        jiatingshouru: '',
        shifouzaidu: '',
        xuexiaomingcheng: '',
        xuexiaolianxiren: '',
        xuexiaodizhi: '',
        nianji: '',
        banji: '',
        jiankangzhuangkuang: '',
        jianhurenxinxi: '',
        lianxifangshi: '',
      },
          xingbieOptions: [],
          shifouzaiduOptions: [],
      rules: {
          ertongxingming: [
          ],
          xingbie: [
          ],
          nianling: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          zhaopian: [
          ],
          jiatingzhuzhi: [
          ],
          juzhutiaojian: [
          ],
          jiatingzhuangkuang: [
          ],
          jiatingshouru: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          shifouzaidu: [
          ],
          xuexiaomingcheng: [
          ],
          xuexiaolianxiren: [
          ],
          xuexiaodizhi: [
          ],
          nianji: [
          ],
          banji: [
          ],
          jiankangzhuangkuang: [
          ],
          jianhurenxinxi: [
          ],
          lianxifangshi: [
          ],
      }
    };
  },
  props: ["parent"],
  computed: {
  },
  created() {
	this.addEditStyleChange()
	this.addEditUploadStyleChange()
  },
  methods: {
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 初始化
    init(id,type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if(this.type=='info'||this.type=='else'){
        this.info(id);
      }else if(this.type=='cross'){
        var obj = this.$storage.getObj('crossObj');
        for (var o in obj){
          if(o=='ertongxingming'){
            this.ruleForm.ertongxingming = obj[o];
	    this.ro.ertongxingming = true;
            continue;
          }
          if(o=='xingbie'){
            this.ruleForm.xingbie = obj[o];
	    this.ro.xingbie = true;
            continue;
          }
          if(o=='nianling'){
            this.ruleForm.nianling = obj[o];
	    this.ro.nianling = true;
            continue;
          }
          if(o=='zhaopian'){
            this.ruleForm.zhaopian = obj[o];
	    this.ro.zhaopian = true;
            continue;
          }
          if(o=='jiatingzhuzhi'){
            this.ruleForm.jiatingzhuzhi = obj[o];
	    this.ro.jiatingzhuzhi = true;
            continue;
          }
          if(o=='juzhutiaojian'){
            this.ruleForm.juzhutiaojian = obj[o];
	    this.ro.juzhutiaojian = true;
            continue;
          }
          if(o=='jiatingzhuangkuang'){
            this.ruleForm.jiatingzhuangkuang = obj[o];
	    this.ro.jiatingzhuangkuang = true;
            continue;
          }
          if(o=='jiatingshouru'){
            this.ruleForm.jiatingshouru = obj[o];
	    this.ro.jiatingshouru = true;
            continue;
          }
          if(o=='shifouzaidu'){
            this.ruleForm.shifouzaidu = obj[o];
	    this.ro.shifouzaidu = true;
            continue;
          }
          if(o=='xuexiaomingcheng'){
            this.ruleForm.xuexiaomingcheng = obj[o];
	    this.ro.xuexiaomingcheng = true;
            continue;
          }
          if(o=='xuexiaolianxiren'){
            this.ruleForm.xuexiaolianxiren = obj[o];
	    this.ro.xuexiaolianxiren = true;
            continue;
          }
          if(o=='xuexiaodizhi'){
            this.ruleForm.xuexiaodizhi = obj[o];
	    this.ro.xuexiaodizhi = true;
            continue;
          }
          if(o=='nianji'){
            this.ruleForm.nianji = obj[o];
	    this.ro.nianji = true;
            continue;
          }
          if(o=='banji'){
            this.ruleForm.banji = obj[o];
	    this.ro.banji = true;
            continue;
          }
          if(o=='jiankangzhuangkuang'){
            this.ruleForm.jiankangzhuangkuang = obj[o];
	    this.ro.jiankangzhuangkuang = true;
            continue;
          }
          if(o=='jianhurenxinxi'){
            this.ruleForm.jianhurenxinxi = obj[o];
	    this.ro.jianhurenxinxi = true;
            continue;
          }
          if(o=='lianxifangshi'){
            this.ruleForm.lianxifangshi = obj[o];
	    this.ro.lianxifangshi = true;
            continue;
          }
        }
      }
      // 获取用户信息
      this.$http({
        url: `${this.$storage.get('sessionTable')}/session`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          var json = data.data;
        } else {
          this.$message.error(data.msg);
        }
      });
            this.xingbieOptions = "男,女".split(',')
            this.shifouzaiduOptions = "是,否".split(',')
    },
    // 多级联动参数
    info(id) {
      this.$http({
        url: `liushouertong/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
	this.ruleForm.lianxifangshi = this.ruleForm.lianxifangshi.replace(reg,'../../../ssmwy609/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    // 提交
    onSubmit() {
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}

















      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.$http({
            url: `liushouertong/${!this.ruleForm.id ? "save" : "update"}`,
            method: "post",
            data: this.ruleForm
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.parent.showFlag = true;
                  this.parent.addOrUpdateFlag = false;
                  this.parent.liushouertongCrossAddOrUpdateFlag = false;
                  this.parent.search();
                  this.parent.contentStyleChange();
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.liushouertongCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    zhaopianUploadChange(fileUrls) {
	this.ruleForm.zhaopian = fileUrls;
			this.addEditUploadStyleChange()
    },
	addEditStyleChange() {
	  this.$nextTick(()=>{
	    // input
	    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputFontColor
	      el.style.fontSize = this.addEditForm.inputFontSize
	      el.style.borderWidth = this.addEditForm.inputBorderWidth
	      el.style.borderStyle = this.addEditForm.inputBorderStyle
	      el.style.borderColor = this.addEditForm.inputBorderColor
	      el.style.borderRadius = this.addEditForm.inputBorderRadius
	      el.style.backgroundColor = this.addEditForm.inputBgColor
	    })
	    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputLableColor
	      el.style.fontSize = this.addEditForm.inputLableFontSize
	    })
	    // select
	    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectFontColor
	      el.style.fontSize = this.addEditForm.selectFontSize
	      el.style.borderWidth = this.addEditForm.selectBorderWidth
	      el.style.borderStyle = this.addEditForm.selectBorderStyle
	      el.style.borderColor = this.addEditForm.selectBorderColor
	      el.style.borderRadius = this.addEditForm.selectBorderRadius
	      el.style.backgroundColor = this.addEditForm.selectBgColor
	    })
	    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectLableColor
	      el.style.fontSize = this.addEditForm.selectLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
	      el.style.color = this.addEditForm.selectIconFontColor
	      el.style.fontSize = this.addEditForm.selectIconFontSize
	    })
	    // date
	    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateFontColor
	      el.style.fontSize = this.addEditForm.dateFontSize
	      el.style.borderWidth = this.addEditForm.dateBorderWidth
	      el.style.borderStyle = this.addEditForm.dateBorderStyle
	      el.style.borderColor = this.addEditForm.dateBorderColor
	      el.style.borderRadius = this.addEditForm.dateBorderRadius
	      el.style.backgroundColor = this.addEditForm.dateBgColor
	    })
	    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateLableColor
	      el.style.fontSize = this.addEditForm.dateLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
	      el.style.color = this.addEditForm.dateIconFontColor
	      el.style.fontSize = this.addEditForm.dateIconFontSize
	      el.style.lineHeight = this.addEditForm.dateHeight
	    })
	    // upload
	    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
	    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
	      el.style.width = this.addEditForm.uploadHeight
	      el.style.height = this.addEditForm.uploadHeight
	      el.style.borderWidth = this.addEditForm.uploadBorderWidth
	      el.style.borderStyle = this.addEditForm.uploadBorderStyle
	      el.style.borderColor = this.addEditForm.uploadBorderColor
	      el.style.borderRadius = this.addEditForm.uploadBorderRadius
	      el.style.backgroundColor = this.addEditForm.uploadBgColor
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.uploadHeight
	      el.style.color = this.addEditForm.uploadLableColor
	      el.style.fontSize = this.addEditForm.uploadLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
	      el.style.color = this.addEditForm.uploadIconFontColor
	      el.style.fontSize = this.addEditForm.uploadIconFontSize
	      el.style.lineHeight = iconLineHeight
	      el.style.display = 'block'
	    })
	    // 多文本输入框
	    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
	      el.style.height = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaFontColor
	      el.style.fontSize = this.addEditForm.textareaFontSize
	      el.style.borderWidth = this.addEditForm.textareaBorderWidth
	      el.style.borderStyle = this.addEditForm.textareaBorderStyle
	      el.style.borderColor = this.addEditForm.textareaBorderColor
	      el.style.borderRadius = this.addEditForm.textareaBorderRadius
	      el.style.backgroundColor = this.addEditForm.textareaBgColor
	    })
	    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
	      // el.style.lineHeight = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaLableColor
	      el.style.fontSize = this.addEditForm.textareaLableFontSize
	    })
	    // 保存
	    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
	      el.style.width = this.addEditForm.btnSaveWidth
	      el.style.height = this.addEditForm.btnSaveHeight
	      el.style.color = this.addEditForm.btnSaveFontColor
	      el.style.fontSize = this.addEditForm.btnSaveFontSize
	      el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
	      el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
	      el.style.borderColor = this.addEditForm.btnSaveBorderColor
	      el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnSaveBgColor
	    })
	    // 返回
	    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
	      el.style.width = this.addEditForm.btnCancelWidth
	      el.style.height = this.addEditForm.btnCancelHeight
	      el.style.color = this.addEditForm.btnCancelFontColor
	      el.style.fontSize = this.addEditForm.btnCancelFontSize
	      el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
	      el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
	      el.style.borderColor = this.addEditForm.btnCancelBorderColor
	      el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnCancelBgColor
	    })
	  })
	},
	addEditUploadStyleChange() {
		this.$nextTick(()=>{
		  document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
			el.style.width = this.addEditForm.uploadHeight
			el.style.height = this.addEditForm.uploadHeight
			el.style.borderWidth = this.addEditForm.uploadBorderWidth
			el.style.borderStyle = this.addEditForm.uploadBorderStyle
			el.style.borderColor = this.addEditForm.uploadBorderColor
			el.style.borderRadius = this.addEditForm.uploadBorderRadius
			el.style.backgroundColor = this.addEditForm.uploadBgColor
		  })
	  })
	},
  }
};
</script>
<style lang="scss">
.editor{
  height: 500px;
  
  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}
</style>
