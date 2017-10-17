/**
 * Created by Administrator on 2017/10/14.
 */

//创建一个对象（天空），使得它具备所有属性和自己动的方法
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

