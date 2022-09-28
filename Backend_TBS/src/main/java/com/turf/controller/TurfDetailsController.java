package com.turf.controller;

import java.time.LocalDate;
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

import com.turf.pojos.DateAndTimeOfBookingDTO;
import com.turf.pojos.TurfDetails;
import com.turf.service.TurfDetailsService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/turfcontroller")
public class TurfDetailsController {

@Autowired
TurfDetailsService turfDetailsService;

public TurfDetailsController() {
	System.err.println("In def consteuctor ..."+getClass().getName());
}


@PostMapping("/addturf")
public ResponseEntity<?> addTurf(@RequestBody TurfDetails turf) {
	System.err.println("Turf has been added from addturf : "+turf);
	
	try{
		return new ResponseEntity<>(turfDetailsService.addTurf(turf), HttpStatus.OK);		
	}catch (Exception e) {
		e.printStackTrace();
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	}
		
}


@GetMapping("/getturf/{turfID}")
public ResponseEntity<?> getTurf(@PathVariable int turfID)
{
	System.out.println("Received Id : "+turfID);
	try {
		return new ResponseEntity<>(turfDetailsService.FindTurfById(turfID), HttpStatus.OK);
	} catch (Exception e) {
		System.out.println("In turf Details controller get turf catch block ");
		e.printStackTrace();
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}

@GetMapping("/getAllTurf")
public ResponseEntity<?> getAllTurf(){
	System.out.println("In get all turf of class "+getClass().getName());
	try {
		return new ResponseEntity<>(turfDetailsService.findAllTurf(), HttpStatus.OK);
	}catch (Exception e) {
		System.out.println("IN catch block of getAll turf "+getClass().getName());
		e.printStackTrace();
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
}

@DeleteMapping("/deleteturf/{turfID}")
public ResponseEntity<?> deleteTurf(@PathVariable int turfID)
{
	System.out.println("Received Id : "+turfID);
	try {
		return new ResponseEntity<>(turfDetailsService.deleteTurf(turfID), HttpStatus.OK);
	} catch (Exception e) {
		System.out.println("In turf Details controller get turf catch block ");
		e.printStackTrace();
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}

@GetMapping("/getUnbookedTurfs")
public ResponseEntity<?> findUnBookedTurfs(@RequestBody DateAndTimeOfBookingDTO dateAndTimeDTO ){
	System.out.println(" Received date and time : "+dateAndTimeDTO.getTimeSlot()+" Date  : "+dateAndTimeDTO.getDate());
	try {
		return new ResponseEntity<>(turfDetailsService.finAllTurfs(dateAndTimeDTO),HttpStatus.OK);
	} catch (Exception e) {
		e.printStackTrace();
		return new ResponseEntity<>(HttpStatus.BAD_GATEWAY);
	}
}



}
	
	
	
