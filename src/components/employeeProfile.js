export const renderEmployeeId = (employee) => {
	let employeeCard = document.createElement("div");
	employeeCard.innerHTML = `
            <div class="employee-image" >
            <img src="${employee.imageUrl}" alt="" title=${employee.firstName}/></div>
            <h2 id="emp${employee.id}">${employee.firstName} ${employee.lastName}</h2>
            <h3 title="Company Name">${employee.company}</h3>
            <p title="Mail Id">Mail:${employee.email}</p>
            <br/>
            <span title="Skills">Skills: ${employee.skills}</span>            
            `;
	employeeCard.className = "employee-card";
	return employeeCard;
};
