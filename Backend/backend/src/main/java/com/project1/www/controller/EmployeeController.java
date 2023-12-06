package com.project1.www.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project1.www.model.Employee;
import com.project1.www.service.EmployeeService;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins="*")
public class EmployeeController 
{
	@Autowired
	EmployeeService employeeService;
	
	@PostMapping("/add")
	public String addEmployeeDetails(@RequestBody Employee employee)
	{
		return employeeService.addEmployeeDetails(employee);
	}
	
	@PostMapping("/addAll")
	public String addAllEmployeeDetails(@RequestBody List<Employee> employee)
	{
		return employeeService.addAllEmployeeDetails(employee);
	}
	
	@GetMapping("/get/{id}")
	public Object getEmployeeDetailsByID(@PathVariable long id)
	{
		return employeeService.getEmployeeDetailsByID(id);
	}
	
	@GetMapping("/getAll")
	public List<Employee> getAllEmployeeDetails()
	{
		return employeeService.getAllEmployeeDetails();
	}
	
	@PutMapping("/update/{id}")
	public String updateEmployeeDetailsById(@RequestBody Employee employee,@PathVariable long id)
	{
		return employeeService.updateEmployeeDetailsById(employee,id);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteEmployeeDetailsByID(@PathVariable long id)
	{
		return employeeService.deleteEmployeeDetailsById(id);
	}
	
	@DeleteMapping("/deleteAll")
	public String deleteAllEmployeeDetails()
	{
		return employeeService.deleteAllEmployeeDetails();
	}
}
