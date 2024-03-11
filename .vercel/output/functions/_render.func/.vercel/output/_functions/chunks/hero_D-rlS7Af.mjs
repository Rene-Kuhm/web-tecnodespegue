const hero = new Proxy({"src":"/_astro/hero.D0-9_4zY.png","width":1600,"height":939,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/rkdev/Downloads/astrowind-main/src/assets/images/hero.png";
							}
							
							return target[name];
						}
					});

export { hero as default };
