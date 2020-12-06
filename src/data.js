// fetching Data and export the object

const url =
	"https://niravkpatel28.github.io/json-data-server/employees/employees.json";

export const getProfile = (async () => {
	let usersData = await axios.get(url);
	return usersData.data;
})();
