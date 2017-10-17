/**
 * Created by Administrator on 2017/10/14.
 */

function Bird(info){
    this.image = info.image;
    this.x = info.x;
    this.y = info.y
    this.canvas = info.canvas;
    this.context = info.context;
    this.num = 0;
    //小鸟的宽和高
    this.w = info.w;
    this.h = info.h;
    //计算小鸟下坠，加速度a，初始速度v，第一帧的时间startTime
    this.a = 0.0005;
    this.v = 0;
    this.startTime = new Date();
    this.maxspeed = 0.5;
    this.maxRadian = 45/180 * Math.PI;
}

Bird.prototype = {
    constructor: Bird,

    draw: function(){
        //计算小鸟扇动翅膀时，显示第index张图
        this.num ++;
        this.index = this.num % 3;

        //计算小鸟下坠过程
        var newTime = new Date();
        var time = newTime - this.startTime;

        var s = this.v * time + 0.5 * this.a * time * time;
        this.v = this.v + this.a * time;
        this.y += s;

        //计算小鸟倾斜的角度
        var percent = this.v / this.maxspeed;
        var radiant = percent * this.maxRadian;

        this.context.save();
        this.context.translate(this.x, this.y);

        this.context.rotate(radiant);


        //console.log(this.y);

        this.context.drawImage(this.image, this.w * this.index, 0, this.w, this.h, -this.w /2, -this.h / 2, this.w, this.h);
        this.context.restore();
        this.startTime = newTime;
    }
}