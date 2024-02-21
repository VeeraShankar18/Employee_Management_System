package com.project1.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project1.www.Exception.ResourceNotFoundException;
import com.project1.www.model.Employee;
import com.project1.www.repo.EmployeeRepository;

@Service
public class EmployeeService 
{
	@Autowired
	EmployeeRepository employeeRepository;
	
	
	
	public String addEmployeeDetails(Employee employee)
	{
		employeeRepository.save(employee);
		return "Records Inserted SuccessFully";
	}
	
	public String addAllEmployeeDetails(List<Employee> employee)
	{
		employeeRepository.saveAll(employee);
		return "All Records Inserted SuccessFully";
	}
	
	public Object getEmployeeDetailsByID(long id)
	{
		return employeeRepository.findById(id);
	}
	
	public List<Employee> getAllEmployeeDetails()
	{
		return employeeRepository.findAll();
	}
	
	public String updateEmployeeDetailsById(Employee employee,long id)
	{
		Employee details=employeeRepository.findById(id).get();
		details.setId(employee.getId());
		details.setFirstName(employee.getFirstName());
		details.setLastName(employee.getLastName());
		details.setEmail(employee.getEmail());
		
		employeeRepository.save(details);
		return "Records Updated SuccessFully";
	}
	
	public String deleteEmployeeDetailsById(long id)
	{
		Employee result=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Id Not Found"));
		employeeRepository.delete(result);
		return "Record Deleted SuccessFully";
	}
	
	public String deleteAllEmployeeDetails()
	{
		employeeRepository.deleteAll();
		return "All Records Deleted SuccessFully";
	}
}
