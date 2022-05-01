export const FechaRandom = (min: Date, max: Date): Date => {
	const minTime = min.getTime();
	const maxTime = max.getTime();
	const randomTime = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
	return new Date(randomTime);
};
