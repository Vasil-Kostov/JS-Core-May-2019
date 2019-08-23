function orderRectangles(input) {
    function comparator(width, height) {
        let rect = {
            width,
            height,
            area: () => rect.width * rect.height,
            compareTo: function (othe) {
                let result = othe.area() - rect.area();
                return result || (othe.width - rect.width);
            }
        };

        return rect;
    }

    let rectangles = [];

    for (const [width, height] of input) {
        let rectangle = comparator(width, height);
        rectangles.push(rectangle);
    }
    
    return rectangles.sort((a, b) => a.compareTo(b));
}

console.log(orderRectangles([[10,5], [3,20], [5,12]]))