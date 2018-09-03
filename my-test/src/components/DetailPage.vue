<template>
<div>
    <!-- 头部设置 -->
    <div>
     <img data-v-8dc7cce2="" src="static/blank.png" class="imgstyle">
     <span class="title">极速贷</span>
     <div class="test-line"> </div>
    </div>
    <!-- 中间 -->
    <div>
     <img data-v-8dc7cce2="" src="static/detail.png" class="detailstyle">
     <span class="span1">完善以下资料</span>
     <span class="span2">(可帮您更快获取贷款)</span>
    </div>
    <div style="clear:both"></div>

    <!-- 内容 -->
    <div class="list">
     <mt-field label="所在城市:" placeholder="请输入您所在的城市" v-model="username"></mt-field>
     <mt-field label="单位名称:" placeholder="请输入您所在的单位名称" v-model="danwei"></mt-field>
     <mt-field label="单位电话:" placeholder="请输入您的单位电话" v-model="dianhua"></mt-field>
     <mt-field label="单位地址:" placeholder="请输入您的单位地址" v-model="dizhi"></mt-field>
     <mt-cell title="单位性质:" @click.native="subjectSel([
                 {
                    flex: 1,
                    values: ['私企','国企','部队及公安','检察院','个体工商户','其他',],
                    className: 'slot1',
                    textAlign: 'center'
        },
            ])" >
        <div class=""> <span>{{selectxinzhi}}</span><!----></div>
     </mt-cell>
     <mt-cell title="芝麻信用分:" @click.native="subjectSel([
                 {
                    flex: 1,
                    values: ['300分以下','300-500分','500-600分','600-750分','750分以上',],
                    className: 'slot2',
                    textAlign: 'center'
        },
            ])"  >
        <div class=""> <span>{{selectzhima}}</span><!----></div>
     </mt-cell>
     <mt-cell title="花呗额度:" @click.native="subjectSel([
                 {
                    flex: 1,
                    values: ['1000元以下','1000-2500元','2500-10000元','10000-50000元','50000元以上',],
                    className: 'slot3',
                    textAlign: 'center'
        },
            ])" >
        <div class=""> <span>{{selecthuabei}}</span><!----></div>
     </mt-cell>
     <mt-cell title="借呗额度:" @click.native="subjectSel([
                 {
                    flex: 1,
                    values: ['2000元以下','2000-5500元','5500-30000元','30000-100000元','100000元以上',],
                    className: 'slot4',
                    textAlign: 'center'
        },
            ])" >
        <div class=""> <span>{{selectjiebei}}</span><!----></div>
     </mt-cell>
     <mt-cell title="信用卡额度:" @click.native="subjectSel([
                 {
                    flex: 1,
                    values: ['5000元以下','5000-10000元','10000-50000元','50000元以上',],
                    className: 'slot5',
                    textAlign: 'center'
        },
            ])"  >
        <div class=""> <span>{{selectxinyongka}}</span><!----></div>
     </mt-cell>
     <mt-cell title="近三个月网贷平台申请次数:" @click.native="subjectSel([
                 {
                    flex: 1,
                    values: ['0次','0-2次','2-5次','5次以上',],
                    className: 'slot6',
                    textAlign: 'center'
        },
            ])"  >
        <div class=""> <span>{{selectcishu}}</span><!----></div>
     </mt-cell>
     <mt-cell title="有无逾期:" @click.native="subjectSel([
                 {
                    flex: 1,
                    values: ['无','有',],
                    className: 'slot7',
                    textAlign: 'center'
        },
            ])"  >
        <div class=""> <span>{{selectyuqi}}</span><!----></div>
     </mt-cell>
         <mt-button size="normal" id = 'btn' @click.native="nextClick">下一步</mt-button>
    </div>

    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
     <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
</div>
</template>
<script>
import { Field ,Cell ,Button,Picker,Popup,Toast} from 'mint-ui';
export default {
    data(){
      return{
            username:'',
            danwei:'',
            dianhua:'',
            dizhi:'',
            xinzhi:'',
            zhima:'',
            huabei:'',
            jiebei:'',
            xinyongka:'',
            cishu:'',
            yuqi:'',
            slots:[
            
            ],
            popupVisible: false,

      dateSlots: [ 
      ],
      }  
    },
    
    name:'DetailPage',

    computed:{
    selectxinzhi:function () {
      if(this.xinzhi == ''){
        return '请选择您的单位性质 >'
      }
      return this.xinzhi
    },
    selectzhima:function () {
      if(this.zhima == ''){
        return '请选择您的芝麻信用分 >'
      }
      return this.zhima
    },
    selecthuabei:function () {
      if(this.huabei == ''){
        return '请选择您的花呗额度 >'
      }
      return this.huabei
    },
    selectjiebei:function () {
      if(this.jiebei == ''){
        return '请选择您的借呗额度 >'
      }
      return this.jiebei
    },
    selectxinyongka:function () {
      if(this.xinyongka == ''){
        return '请选择您的信用卡额度 >'
      }
      return this.xinyongka
    },
    selectcishu:function () {
      if(this.cishu == ''){
        return '申请次数 >'
      }
      return this.cishu
    },
    selectyuqi:function () {
      if(this.yuqi == ''){
        return '有无逾期 >'
      }
      return this.yuqi
    },
    },

    components:{
        Cell,
        Field,
        Button,
        Picker,
        Popup
    },
    methods:{
     nextClick() {
         if(this.username == ''){
          Toast({
             message: '请输入您的所在城市',
             position: 'center',
             duration: 2000
          });
        }else if(this.danwei == ''){
          Toast({
             message: '请输入您的单位名称',
             position: 'center',
             duration: 2000
          });
        }else if(this.dianhua == ''){
          Toast({
             message: '请输入您的单位电话',
             position: 'center',
             duration: 2000
          });
        }else if(this.dizhi == ''){
          Toast({
             message: '请输入您的单位地址',
             position: 'center',
             duration: 2000
          });
        }else if(this.xinzhi == ''){
          Toast({
             message: '请选择您的单位性质',
             position: 'center',
             duration: 2000
          });
        }else if(this.zhima == ''){
          Toast({
             message: '请选择您的芝麻信用分',
             position: 'center',
             duration: 2000
          });
        }
        else if(this.huabei == ''){
          Toast({
             message: '请选择您的花呗额度',
             position: 'center',
             duration: 2000
          });
        }else if(this.jiebei == ''){
          Toast({
             message: '请选择您的借呗额度',
             position: 'center',
             duration: 2000
          });
        }else if(this.xinyongka == ''){
          Toast({
             message: '请选择您的信用卡额度',
             position: 'center',
             duration: 2000
          });
        } else if(this.cishu == ''){
          Toast({
             message: '请选择您的申请次数',
             position: 'center',
             duration: 2000
          });
        }else if(this.yuqi == ''){
          Toast({
             message: '请选择是否存在逾期',
             position: 'center',
             duration: 2000
          });
        }
        else{
             this.$router.push({path:'/LastPage'});
        }

      },
      subjectSel(arr){
          this.popupVisible = true;
          this.slots = arr;
      },
      onValuesChange(picker,values){
        if(this.popupVisible){
            //判断哪里来的数据就好了 
           if(['私企','国企','部队及公安','检察院','个体工商户','其他',].includes(values[0])){
               this.xinzhi = values[0];
           }else if(['300分以下','300-500分','500-600分','600-750分','750分以上',].includes(values[0])){
               this.zhima = values[0];
           }else if(['1000元以下','1000-2500元','2500-10000元','10000-50000元','50000元以上',].includes(values[0])){
               this.huabei = values[0];
           }else if(['2000元以下','2000-5500元','5500-30000元','30000-100000元','100000元以上',].includes(values[0])){
               this.jiebei = values[0];
           }else if(['5000元以下','5000-10000元','10000-50000元','50000元以上',].includes(values[0])){
               this.xinyongka = values[0];
           }else if(['0次','0-2次','2-5次','5次以上',].includes(values[0])){
               this.cishu = values[0];
           }else if(['无','有',].includes(values[0])){
               this.yuqi = values[0];
           }

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
.list{
    margin-left: 10px;
    margin-top: 10px
}

a {
  /* background-color: cadetblue; */
  width: 100%;
  color: #333333;
  text-align:left;
  border-radius:5px;
  margin-right: 80px;
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
/* .mint-cell-text{
    color:#722239;
    text-align:left;
    margin-left:20px;
  } */

</style>


