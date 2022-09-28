package com.turf.pojos;

import java.time.LocalDate;

public class DateAndTimeOfBookingDTO {
	private LocalDate date;
	private String timeSlot;
	
	public DateAndTimeOfBookingDTO() {
		System.out.println("In def constructor ...");
	}

	public DateAndTimeOfBookingDTO(LocalDate date, String timeSlot) {
		super();
		this.date = date;
		this.timeSlot = timeSlot;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getTimeSlot() {
		return timeSlot;
	}

	public void setTimeSlot(String timeSlot) {
		this.timeSlot = timeSlot;
	}
	
	

}
