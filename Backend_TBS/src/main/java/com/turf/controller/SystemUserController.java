package com.turf.controller;

import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.turf.dto.LoginDetails;
import com.turf.pojos.BookingTable;
import com.turf.pojos.SystemUsers;
import com.turf.service.BookingService;
import com.turf.service.SystemUserService;

import antlr.collections.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/authentication")
public class SystemUserController {

	@Autowired
	SystemUserService systemUserService;
	@Autowired
	BookingService bookingService;
	
	public SystemUserController() {
		System.err.println("In def consteuctor ..."+getClass().getName());
	}
	
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody SystemUsers user) {
		System.err.println("Received User for registration : "+user);
		try {
			return new ResponseEntity<>(systemUserService.registerUser(user), HttpStatus.OK);
			
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.BAD_GATEWAY);
		}
		
	}
	
	//Login method
	@PostMapping("/login")
	public ResponseEntity<?> validateLoginDetails(@RequestBody LoginDetails loginCred) {
		try {
			SystemUsers validUser = systemUserService.validateLoginDetails(loginCred);
			System.out.println("User validated : "+validUser);
			if(validUser==null) {
				System.err.println("No user exist with given credentioals ");
			}
			return new ResponseEntity<>(validUser, HttpStatus.OK);
		}catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	//
	
	@GetMapping("/getuser/{userID}")
	public ResponseEntity<?> getUser(@PathVariable int userID)
	{
		System.out.println("Received Id : "+userID);
		try {
			return new ResponseEntity<>(systemUserService.FindSystemUserById(userID), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("In system user controller get user catch block ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/getAllUsers")
	public ResponseEntity<?> getAllUsers(){
		System.out.println("In get all users of class "+getClass().getName());
		try {
			return new ResponseEntity<>(systemUserService.findAllUsers(), HttpStatus.OK);
		}catch (Exception e) {
			System.out.println("IN catch block of getAll users "+getClass().getName());
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/deleteuser/{userID}")
	public ResponseEntity<?> deleteUser(@PathVariable int userID)
	{
		System.out.println("Received Id : "+userID);
		try {
			return new ResponseEntity<>(systemUserService.FindSystemUserById(userID), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("In system user controller get user catch block ");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/bookedTurfCheckComfirmation")
	public ResponseEntity<?> getRequestedBookDetails(@RequestBody SystemUsers systemUser){
		System.out.println("User Details Received : "+systemUser );
		try {
			java.util.List<BookingTable> bookedTurfs = bookingService.getAllRequestedTurfComfirmation(systemUser);
			System.out.println("Confirmation of turfs for user turfs : "+bookedTurfs);
			return new ResponseEntity<>(bookedTurfs, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
}
