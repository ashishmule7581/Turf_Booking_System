package com.turf.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.turf.pojos.BookingTable;
import com.turf.service.BookingService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/bookingcontroller")
public class BookingController {
	@Autowired
	private BookingService bookingService;
	
	public BookingController() {
		System.out.println("In booking controller def constructor ..."+getClass().getName());
	}
	
	@PostMapping("/bookTurf")
	public ResponseEntity<?> bookTurf(@RequestBody BookingTable bookingTable){
		System.out.println("Request received for booking tuef with details : "+ bookingTable);
		try {
			return new ResponseEntity<>(bookingService.bookTurf(bookingTable), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("In book turd constroller bookturf method catch block");
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/getRequestedBookings/{userid}")
	public ResponseEntity<?> findAllPendingBookingRequests(@PathVariable int userid){
		System.out.println("Received User id : "+userid);
		try {
			return new ResponseEntity<>(bookingService.findAllBookings(userid),HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.BAD_GATEWAY);
		}
	}
	
	@GetMapping("/confirmBooking/{bookingid}")
	public ResponseEntity<?> confirmBooking(@PathVariable int bookingid){
		System.out.println("Booking id : "+bookingid);
		try {
			return new ResponseEntity<>(bookingService.confirmBooking(bookingid), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	
	
	
	

}
