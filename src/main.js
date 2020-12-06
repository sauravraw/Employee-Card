import { getProfile } from "./data.js";
import { renderEmployeeId } from "./components/employeeProfile.js";

const rootDiv = document.getElementById("root");
getProfile.then((employeeData) => {
	// console.log(employeeData);
	employeeData.forEach((employee) => {
		rootDiv.appendChild(renderEmployeeId(employee));
	});
});
