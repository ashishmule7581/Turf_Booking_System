package com.turf.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turf.dao.BookingTableDaoJPA;
import com.turf.pojos.BookingTable;
import com.turf.pojos.SystemUsers;

@Service
@Transactional
public class BookingServiceImp implements BookingService {
	
	@Autowired
	private BookingTableDaoJPA bookingTableJpa;
	
	public BookingServiceImp() {
		System.out.println("In booking service impls def constructor ...."+getClass().getName());
	}

	@Override
	public BookingTable bookTurf(BookingTable bookingTable) {
		try {
			bookingTable.setBookingstatus(false);
			bookingTable.setPaymentstatus(true);
			
			return bookingTableJpa.save(bookingTable);
		} catch (Exception e) {
			System.out.println("Booking Service Impl book turf catch block");
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<BookingTable> findAllBookings(int userId) {
		return bookingTableJpa.findAll().stream().filter(x -> (!x.isBookingstatus()) && x.isPaymentstatus())
			.filter(x-> x.getTurf().getTurfManager().getUserid() == userId ).collect(Collectors.toCollection(ArrayList :: new));
	}

	@Override
	public boolean confirmBooking(int id) {
		try {
		bookingTableJpa.findById(id).ifPresent(x -> x.setBookingstatus(true));
		return true;
		}catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public List<BookingTable> getAllRequestedTurfComfirmation(SystemUsers systemUser) {
		try {
		return bookingTableJpa.findAll().stream().filter(x -> x.getUser().getUserid() == systemUser.getUserid())
				.collect(Collectors.toCollection(ArrayList :: new));
		
		} catch (Exception e) {
			e.printStackTrace();
			return null ;
		}
	}
	
	
	
	

}
