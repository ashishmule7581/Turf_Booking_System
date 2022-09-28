package com.turf.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "booking_table")
public class BookingTable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int bookingid;
	
	@OneToOne
	@JoinColumn(name = "userid")
	private SystemUsers user ; 
	
	@OneToOne
	@JoinColumn(name = "turfid")
	private TurfDetails turf ;
	
	@Column(name = "timeslot",length = 10)
	private String timeslot ; 
	
	@DateTimeFormat(pattern = "yyyy/MM/dd")
	@Column(name = "booking_date")
	private LocalDate bookingDate;
	
	@Column(name = "pay_status")
	private boolean paymentstatus;
	
	@Column(name = "booking_status")
	private boolean bookingstatus;
	
	
	public BookingTable() {
		super();
		System.out.println("In def constructor ..."+getClass().getName());
	}


	public BookingTable(SystemUsers user, TurfDetails turf, String timeslot, LocalDate bookingDate,
			boolean paymentstatus, boolean bookingstatus) {
		super();
		this.user = user;
		this.turf = turf;
		this.timeslot = timeslot;
		this.bookingDate = bookingDate;
		this.paymentstatus = paymentstatus;
		this.bookingstatus = bookingstatus;
	}


	public int getBookingid() {
		return bookingid;
	}


	public void setBookingid(int bookingid) {
		this.bookingid = bookingid;
	}


	public SystemUsers getUser() {
		return user;
	}


	public void setUser(SystemUsers user) {
		this.user = user;
	}


	public TurfDetails getTurf() {
		return turf;
	}


	public void setTurf(TurfDetails turf) {
		this.turf = turf;
	}


	public String getTimeslot() {
		return timeslot;
	}


	public void setTimeslot(String timeslot) {
		this.timeslot = timeslot;
	}


	public LocalDate getBookingDate() {
		return bookingDate;
	}


	public void setBookingDate(LocalDate bookingDate) {
		this.bookingDate = bookingDate;
	}


	public boolean isPaymentstatus() {
		return paymentstatus;
	}


	public void setPaymentstatus(boolean paymentstatus) {
		this.paymentstatus = paymentstatus;
	}


	public boolean isBookingstatus() {
		return bookingstatus;
	}


	public void setBookingstatus(boolean bookingstatus) {
		this.bookingstatus = bookingstatus;
	}


	@Override
	public String toString() {
		return "BookingTable [bookingid=" + bookingid + ", user=" + user + ", turf=" + turf + ", timeslot=" + timeslot
				+ ", bookingDate=" + bookingDate + ", paymentstatus=" + paymentstatus + ", bookingstatus="
				+ bookingstatus + "]";
	}

	

}
