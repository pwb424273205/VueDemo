<template>
   <div>
     <div>
        <img data-v-8dc7cce2="" src="static/blank.png" class="imgstyle">
        <span class="title">极速贷</span>
        <div class="test-line"> </div>
    </div>
    <!-- 中间 -->
    <div>
         <img data-v-8dc7cce2="" src="static/phone.png" class="detailstyle">
         <span class="span1">紧急联系人信息</span>
         <span class="span2">(可帮您更快获取贷款)</span>
    </div>
    <div style="clear:both"></div>

    <div class="list">   
        <mt-field label="姓名:" placeholder="请输入紧急联系人姓名" v-model="jinjiXM"></mt-field>
        <mt-field label="电话:" placeholder="请输入紧急联系人电话" v-model="jinjiDH"></mt-field>
        <mt-cell title="关系:" @click.native="subjectSel([
                 {
                    flex: 1,
                    values: ['父母','配偶','其他亲属',],
                    className: 'slot3',
                    textAlign: 'center'
        },
            ])" >
        <div class=""> <span>{{selectjinji}}</span><!----></div>
        </mt-cell>
    </div>
    <div>
         <img data-v-8dc7cce2="" src="static/user.png" class="detailstyle">
         <span class="span1">一般联系人信息</span>
         <span class="span2">(可帮您更快获取贷款)</span>
    </div>
     <div style="clear:both"></div>
     <div class="list2">   
        <mt-field label="姓名:" placeholder="请输入一般联系人姓名" v-model="lianxiXM"></mt-field>
        <mt-field label="电话:" placeholder="请输入一般联系人电话" v-model="lianxiDH"></mt-field>
        <mt-cell title="关系:" @click.native="subjectSel([
                 {
                    flex: 1,
                    values: ['同事','朋友','同学','其他',],
                    className: 'slot3',
                    textAlign: 'center'
        },
            ])" >
        <div class=""> <span>{{selectlianxi}}</span><!----></div>
        </mt-cell>
    </div>
    <mt-button size="normal" id = 'btn' @click.native="nextClick">完成</mt-button>
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
     <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
   </div>
</template>
<script>
import { Field ,Cell ,Button,Picker,Popup,Toast,MessageBox} from 'mint-ui';
export default {
    name:'LastPage',
    data(){
    return{
       jinjiDH:'',
       lianxiDH:'',
       jinjiXM:'',
       lianxiXM:'',
       jinji:'',
       lianxi:'',
       popupVisible:false, 
       slots:[]
    }
    },
     computed:{
    selectjinji:function () {
      if(this.jinji == ''){
        return '请选择与紧急联系人关系 >'
      }
      return this.jinji
    },
    selectlianxi:function () {
      if(this.lianxi == ''){
        return '请选择与一般联系人关系 >'
      }
      return this.lianxi
    },},
    components:{
        Cell,
        Field,
        Button,
        Picker,
        Popup,
        Toast,
        MessageBox
    },
    methods:{
        subjectSel(arr){
          this.popupVisible = true;
          this.slots = arr;
        },

        onValuesChange(picker,values){
           if(this.popupVisible){
            if(['同事','朋友','同学','其他',].includes(values[0])){
               this.lianxi = values[0];
           }else{
               this.jinji = values[0];
           }} 
         },
        nextClick(){
             if(this.jinjiXM == ''){
          Toast({
             message: '请输入您的紧急联系人姓名',
             position: 'center',
             duration: 2000
          });
        }else if(this.jinjiDH == ''){
          Toast({
             message: '请输入您的紧急联系人电话',
             position: 'center',
             duration: 2000
          });
        }else if(this.jinji == ''){
          Toast({
             message: '请选择您与紧急联系人关系',
             position: 'center',
             duration: 2000
          });
        }else if(this.lianxiXM == ''){
          Toast({
             message: '请输入您的一般联系人姓名',
             position: 'center',
             duration: 2000
          });
        }else if(this.lianxiDH == ''){
          Toast({
             message: '请输入您的一般联系人姓名',
             position: 'center',
             duration: 2000
          });
        }else if(this.lianxi == ''){
          Toast({
             message: '请选择您与一般联系人关系',
             position: 'center',
             duration: 2000
          });
        }else{
            MessageBox.alert('请等待审核人员与您联系','申请成功').then(action => {
             this.$router.push({path:'/'});
            });   
        }
    }

    }
}
</script>
<style scoped>
.test-line{
     background-color: #C82620;
     /* position: absolute; */
     height: 4px;
     margin-top:64px;
     margin-left:10px;
     width: 100%;

}

.detailstyle{
    position: absolute;
    margin-top: 10px;
    width: 30px;
    height: 30px;
    left:30px; 
}
.imgstyle{
    position: absolute;
    width: 40px;
    height: 40px;
    /* padding-top: 10px; */
    top:20px;
    left:10px;
}
.title{
    position: absolute;
    top:30px;
    left:50px;
    text-align: left;
    font-weight:bold;
    font-size: 18px;
    color: #C82620;
}
.span1{
    float: left;
    margin-left: 60px;
    margin-top: 18px;
    font-weight:bold;
    font-size: 14px;
    color: #C82620;
}
.span2{
    float: left;
    margin-left: 5px;
    margin-top: 20px;
    font-size: 11px;
    color: #C82620;
}
a {
  /* background-color: cadetblue; */
  width: 100%;
  color: #333333;
  text-align:left;
  border-radius:5px;
  margin-right: 80px;
}
.list{
    margin-left: 10px;
    margin-top: 10px
}
.list2{
    margin-left: 10px;
    margin-top: 10px
}
.mint-button {
  width: 90%;
  height: 44px;
  background:green;
  color: white;
  margin-top: 20px;
}
.mint-popup{
    width:100%;
}

</style>
