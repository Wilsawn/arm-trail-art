window.onload = function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var trail = document.getElementById("trail");
    var tctx = trail.getContext("2d");

    var width = canvas.width = trail.width = window.innerWidth;
    var height = canvas.height = trail.height = window.innerHeight;

    var arm1 = Arm.create(width / 2, height / 2, 120, 0);
         arm2 = Arm.create(arm1.getEndX(), arm1.getEndY(), 100, 1.3);
         arm3 = Arm.create(arm2.getEndX(), arm2.getEndY(), 100, 1.3);

    arm2.parent = arm1;
    arm3.parent = arm2;

    var angle = 0;

    var lastX = null;
    var lastY = null;

    function update() {
        ctx.clearRect(0, 0, width, height);
        arm1.angle = Math.sin(angle * 0.739085133) * 2.7;     
        arm2.angle = Math.cos(angle * Math.sqrt(3)) * 1.91;
        arm3.angle = Math.sin(angle * Math.PI) * 3.17;       
        arm2.x = arm1.getEndX();
        arm2.y = arm1.getEndY();
        arm3.x = arm2.getEndX();
        arm3.y = arm2.getEndY();
        var x = arm3.getEndX();
        var y = arm3.getEndY();

        if (lastX !== null) {
            tctx.strokeStyle = "rgba(0,0,0,0.12)";
            tctx.lineWidth = 1;
            tctx.beginPath();
            tctx.moveTo(lastX, lastY);
            tctx.lineTo(x, y);
            tctx.stroke();
        }
        lastX = x;
        lastY = y;

        arm1.render(ctx);
        arm2.render(ctx);
        arm3.render(ctx);

        angle +=0.02;
        requestAnimationFrame(update);
    }

    update();
};
