new Vue({
    el: '#app',
    data() {
        return {
            week:'',
            date_show:'',
            time_show:'',      
        };
    }, 
    methods: { 
        getdatatime(){
            let wk = new Date().getDay()
            let yy = new Date().getDay()
            let mm = new Date().getDay()
            let dd = new Date().getDay()
            let weeks = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
            this .week = weeks[wk]
            this .date_show = yy + "年" + mm + "月" + dd +"日"
        },
        getnewTime(){
            let hh = new Date().getHours();
            let mf =
              new Date().getMinutes() < 10
              ? "0" + new Date().getMinutes()
              : new Date().getMinutes();
            let ss =
              new Date().getSeconds() < 10
              ? "0" + new Date().getSeconds()
              : new Date().getSeconds();
            this.time_show = hh + ":" + mf + ":" + ss;
        }
    },
    watch: {
    },
    mounted() {
    }
})

