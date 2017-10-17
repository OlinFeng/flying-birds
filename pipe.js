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
    //��ʾ�ײ��ܵ����뻭���ײ��ľ���
    this.bottomOffset = info.bottomOffset;
    //��ʼ�����ֱ��趨���¹ܵ��߶�
    this.topHeight = 0;
    this.bottomHeight = 0;
    //�趨�����ܵ�֮��ľ���
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

        //�����ܵ���·���������ж��Ƿ���ײ��
        this.context.rect(this.x, 0, this.topImage.width, this.topHeight);
        this.context.rect(this.x, this.canvas.height-this.bottomOffset-this.bottomHeight, this.bottomImage.width, this.bottomHeight);


    },

    //�������ܵ����Եĸ߶Ⱥ���
    initHeight: function(){
        //�趨���ϰ벿�ֹܵ��ĸ߶�Ϊ100~250֮��
        this.topHeight = 100 + 150 * Math.random();
        this.bottomHeight = this.canvas.height - this.topHeight - this.space - this.bottomOffset;
    }

}

