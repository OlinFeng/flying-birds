/**
 * Created by Administrator on 2017/10/14.
 */

//����һ��������գ���ʹ�����߱��������Ժ��Լ����ķ���
function Sky(info){
    this.x = info.x;
    this.canvas = info.canvas;
    this.context = info.context;
    this.image = info.image;
    this.speed = 2;
}

Sky.prototype = {
    contrubute: Sky,
    draw: function(){
            this.x -= this.speed;
            if(this.x <= -this.image.width){
                this.x = this.canvas.width;
            }
            this.context.drawImage(this.image, this.x, 0, this.image.width, this.image.height);

            }
}

