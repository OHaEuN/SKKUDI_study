const wm = new WeakMap();


function Area (height, width) {
    // this.height = height;
    // this.width = width;
    wm.set(this, {height, width});
}

Area.prototype.getArea= function(){
    // return this.height * this.width;
    const {height, width} = wm.get(this);
    return height*width;
}

let myarea = new Area(10,20);
console.log(myarea.getArea()); //200

myarea = null;
console.log(wm.has(myarea)); //false