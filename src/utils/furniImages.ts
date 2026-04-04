export const getFurniIcon = (classname: string, revision: number) => {
	return `https://images.habbo.com/dcr/hof_furni/${revision}/${classname}_icon.png`;
};

export const getFurniImage = (classname: string, revision: number, dir: number = 0, state: number = 0) => {
	return `https://habcat.net/media/furni2/${revision}/${classname}/${dir}_${state}.webp`;
};

export const getFurniAnimatedImage = (classname: string, revision: number, dir: number = 0, state: number = 100) => {
	return getFurniImage(classname, revision, dir, state);
}
