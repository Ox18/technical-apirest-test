"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FechaRandom = void 0;
const FechaRandom = (min, max) => {
    const minTime = min.getTime();
    const maxTime = max.getTime();
    const randomTime = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
    return new Date(randomTime);
};
exports.FechaRandom = FechaRandom;
//# sourceMappingURL=fechaRandom.js.map