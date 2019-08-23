function solve(requirements) {
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    const carriages = [
        { type: 'hatchback', color: requirements.color },
        { type: 'coupe', color: requirements.color }
    ];

    const wheelSize = requirements.wheelsize % 2 !== 0
        ? requirements.wheelsize
        : requirements.wheelsize--;

    const car = {
        model: requirements.model,
        engine: engines.filter(e => e.power >= requirements.power)[0],
        carriage: carriages.filter(c => c.type === requirements.carriage)[0],
        wheels: Array(4).fill(requirements.wheelsize)
    };

    return car;
}