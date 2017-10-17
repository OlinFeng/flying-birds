/**
 * Created by Administrator on 2017/10/14.
 */
function Pipe(info){
    this.x = info.x;
    this.topImage = info.topImage;
    this.bottomImage = info.bottomImage;
    this.canvas = info.canvas;
    this.context = info.context;
    this.gap = info.gap;
    this.speed = 2;
    //表示底部管道距离画布底部的距离
    this.bottomOffset = info.bottomOffset;
    //初始化，分别设定上下管道高度
    this.topHeight = 0;
    this.bottomHeight = 0;
    //设定两个管道之间的距离
    this.space = 120;

    this.initHeight();
}

Pipe.prototype = {
    constructor: Pipe,

    draw: function(){
        this.x -= this.speed;
        if(this.x <= -this.topImage.width){
            this.initHeight();
            this.x = this.topImage.width * 5 + this.gap * 6;
        }
        this.context.drawImage(this.topImage, this.x, 0, this.topImage.width, this.topHeight);
        this.context.drawImage(this.bottomImage, this.x, this.canvas.height-this.bottomOffset-this.bottomHeight, this.bottomImage.width, this.bottomHeight);

        //画出管道的路径以用于判断是否碰撞到
        this.context.rect(this.x, 0, this.topImage.width, this.topHeight);
        this.context.rect(this.x, this.canvas.height-this.bottomOffset-this.bottomHeight, this.bottomImage.width, this.bottomHeight);


    },

    //定义计算管道各自的高度函数
    initHeight: function(){
        //设定：上半部分管道的高度为100~250之间
        this.topHeight = 100 + 150 * Math.random();
        this.bottomHeight = this.canvas.height - this.topHeight - this.space - this.bottomOffset;
    }

}

