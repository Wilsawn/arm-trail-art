var Arm = {
    x: 0,
    y: 0,
    length: 100,
    angle: 0,
    parent: null,

    create: function (x, y, length, angle) {
        var obj = Object.create(this);
        obj.init(x, y, length, angle);
        return obj;
    },

    init: function (x, y, length, angle) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.angle = angle;
        this.parent = null;
    },

    getEndX: function () {
        var angle = this.angle;
        var parent = this.parent;

        while (parent) {
            angle += parent.angle;
            parent = parent.parent;
        }

        return this.x + Math.cos(angle) * this.length;
    },

    getEndY: function () {
        var angle = this.angle;
        var parent = this.parent;

        while (parent) {
            angle += parent.angle;
            parent = parent.parent;
        }

        return this.y + Math.sin(angle) * this.length;
    },

    render: function (ctx) {
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.getEndX(), this.getEndY());
        ctx.stroke();
    }
};
