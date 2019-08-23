(() => {

    return {
        add: (v1, v2) => {
            return [v1[0] + v2[0], v1[1] + v2[1]];
        },
    
        multiply: (v1, scalar) => {
            return [v1[0] * scalar, v1[1] * scalar];
        },
    
        length: (v1) => {
            return Math.sqrt([v1[0] ** 2 + v1[1] ** 2]);
        },
    
        dot: (v1, v2) => {
            return v1[0] * v2[0] + v1[1] * v2[1];
        },
    
        cross: (v1, v2) => {
            return (v1[0] * v2[1]) - (v1[1] * v2[0]);
        }
    }
})();