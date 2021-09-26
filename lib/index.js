/* eslint-disable no-prototype-builtins */

/**
 * Deeply merge two or more objects
 * @module @eartharoid/deep-merge
 * @copyright 2021 Isaac Saunders
 * @license MIT
 */

/**
 * Deeply merge two or more objects
 * @param  {...object} objects - Objects to merge
 */
const deepMerge = (...objects) => {
	let target = {};
	const merge = (obj) => {
		for (let prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				if (typeof obj[prop] === 'object' && !(obj[prop] instanceof Array)) {
					target[prop] = deepMerge(target[prop], obj[prop]);
				} else {
					target[prop] = obj[prop];
				}
			}
		}
	};
	objects.forEach(object => merge(object));
	return target;
};

module.exports = deepMerge;