export const renderEmployeeId = (employee) => {
	let employeeCard = document.createElement("div");
	employeeCard.innerHTML = `
            <div class="employee-image" >
            <img src="${employee.imageUrl}" alt="" title=${employee.firstName}/></div>
            <h1 id="emp${employee.id}">${employee.firstName} ${employee.lastName}</h1>
            <h3>${employee.company}</h3>
            <p>${employee.email}</p>
            <br/>
            <span>${employee.skills}</span>            
            `;
	employeeCard.className = "employee-card";
	return employeeCard;
};
