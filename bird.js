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
    //С��Ŀ�͸�
    this.w = info.w;
    this.h = info.h;
    //����С����׹�����ٶ�a����ʼ�ٶ�v����һ֡��ʱ��startTime
    this.a = 0.0005;
    this.v = 0;
    this.startTime = new Date();
    this.maxspeed = 0.5;
    this.maxRadian = 45/180 * Math.PI;
}

Bird.prototype = {
    constructor: Bird,

    draw: function(){
        //����С���ȶ����ʱ����ʾ��index��ͼ
        this.num ++;
        this.index = this.num % 3;

        //����С����׹����
        var newTime = new Date();
        var time = newTime - this.startTime;

        var s = this.v * time + 0.5 * this.a * time * time;
        this.v = this.v + this.a * time;
        this.y += s;

        //����С����б�ĽǶ�
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