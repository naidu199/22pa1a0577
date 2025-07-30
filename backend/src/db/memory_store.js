
export const urlStore = {};


export const isExpired = (shortcode) => {
	const entry = urlStore[shortcode];
	if (!entry) return true;
	return new Date() > new Date(entry.expiry);
};


export const cleanExpiredUrls = () => {
	const now = new Date();
	Object.keys(urlStore).forEach(shortcode => {
		if (new Date(urlStore[shortcode].expiry) < now) {
			delete urlStore[shortcode];
		}
	});
};
