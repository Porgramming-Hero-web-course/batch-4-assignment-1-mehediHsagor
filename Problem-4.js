{
    function calculateShapeArea(shape) {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius * shape.radius;
        }
        else if (shape.shape === "rectangle") {
            return shape.height * shape.width;
        }
        else {
            throw new Error("Invalid shape type");
        }
    }
    var circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);
    var rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea);
}
