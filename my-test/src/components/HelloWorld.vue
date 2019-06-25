<template>
  <div class="hello">
    <img data-v-8dc7cce2="" src="static/portal.jpg" style="width: 100%;">
    <div class="mid">
      <mt-field id="mt" label="您真实姓名:" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="您的手机号:" placeholder="请输入手机号" v-model="phone"></mt-field>
      <mt-cell title="出生日期" @click.native="openPicker" class="title border-b-grey-d">
         <div class="van-cell__value"> <span>{{selectDate}}</span><!----></div>
      </mt-cell>
      <mt-cell title="选择性别">
      <label style="margin-right:20px;">男<input style="margin-left:10px;" type="radio" v-model="gender" value="man"/></label>
      <label style="margin-right:20px;">女<input style="margin-left:10px;" type="radio" v-model="gender" value="woman"/></label>
      </mt-cell>
    </div> 
    <mt-button size="normal" id = 'btn' @click.native="nextClick">下一步</mt-button>

      <mt-datetime-picker
      ref="picker"
      type="date"
      :startDate = 'startdate'
      v-model="pickerValue"
      @confirm="handleConfirm"
      >
      </mt-datetime-picker>
  </div> 

</template>

<script>
import { Field ,Cell ,Button,DatetimePicker,Toast} from 'mint-ui';


export default {
  name: 'HelloWorld',
  data () {
    return {
      username:'',
      phone:'',
      gender:'',
      startdate:new Date(1930,1,1),
      pickerDate:''
    }
  },
   computed: {
    selectDate: function () {
      if(this.pickerDate == ''){
        return '请选择 >'
      }
      return this.pickerDate
      
    }
  },
  components:{
    Field,
    Cell,
    Button,
    DatetimePicker
  },
   methods: {
      openPicker() {
        this.$refs.picker.open();
      },
      nextClick() {
        if(this.username == ''){
          Toast({
             message: '请输入您的姓名',
             position: 'center',
             duration: 2000
          });
        }else if(this.phone == ''){
          Toast({
             message: '请输入您的手机号',
             position: 'center',
             duration: 2000
          });
        }else if(this.pickerDate == ''){
          Toast({
             message: '请选择您的出生日期',
             position: 'center',
             duration: 2000
          });
        }
        else if(this.gender == ''){
          Toast({
             message: '请选择您的性别',
             position: 'center',
             duration: 2000
          });
        }
        else{
          this.$router.push({path:'/DetailPage'});
        }

      },

      handleConfirm(data){
        let date = this.$moment(data).format('YYYY-MM-DD')
        this.pickerDate = date;
      }

      
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  background:white;
}
.mid {
  width: 100%;
  /* border-radius:5px;
  border-color: red;
  background: #333333 */
}
a {
  /* background-color: cadetblue; */
  width: 100%;
  color: #333333;
  text-align:left;
  border-radius:5px;
  margin-right: 20px;
}

mt {
  .mint-cell-text{
    color:#333333;
    text-align:left;
    margin-right:20px;

  }
}
/* <button data-v-469af010="" class="mint-button mint-button--default mint-button--normal" id="btn"><!----> <label class="mint-button-text">下一步</label></button> */
.mint-button {
  width: 90%;
  height: 44px;
  background:green;
  color: white;
  margin-top: 20px;
}
</style>
