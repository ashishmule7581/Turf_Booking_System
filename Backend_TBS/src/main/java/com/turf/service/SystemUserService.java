package com.turf.service;


import java.util.List;
import java.util.Optional;

import com.turf.dto.LoginDetails;
import com.turf.pojos.SystemUsers;



public interface SystemUserService {
	
	// register user 
	SystemUsers registerUser(SystemUsers user);
	
	// getting user by id 
	Optional<SystemUsers> FindSystemUserById(int id);
	
	// find all users 
	List<SystemUsers> findAllUsers();
	
	//Delete User by ID
	List<SystemUsers> deleteUser(int id);
	
	//Login user 
	SystemUsers validateLoginDetails(LoginDetails loginCred);
	
}
