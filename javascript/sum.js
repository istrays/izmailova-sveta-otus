const sum = (i) => (j) => {
	if (typeof j === 'undefined') {
		return i;
	}
	return sum(i + j);
}