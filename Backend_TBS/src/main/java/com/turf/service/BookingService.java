package com.turf.service;

import java.util.List;

import com.turf.pojos.BookingTable;
import com.turf.pojos.SystemUsers;

public interface BookingService {
	// method to add the booling table
	public BookingTable bookTurf(BookingTable bookingTable);
	
	// method to find all bookings
	public List<BookingTable> findAllBookings(int userId);
	
	public boolean confirmBooking(int id);
	
	// method to confirm final booking 
	
	public List<BookingTable> getAllRequestedTurfComfirmation(SystemUsers systemUser) ;
	
	
}
