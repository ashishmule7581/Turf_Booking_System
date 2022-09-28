package com.turf.pojos;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "time_slot_details")
public class TimeSlotDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer timeSlotId;
	@Transient
	private final List<String> allTurfsWithTimeSlot=Arrays.asList("12-3","3-6","6-9");
	@DateTimeFormat(pattern = "yyyy/mm/dd")
	@Column(name = "date")
	private LocalDate dates;
	
	public TimeSlotDetails() {
		// TODO Auto-generated constructor stub
		System.out.println("In time slot details def constru..");
	}

	public TimeSlotDetails(Integer timeSlotId, LocalDate dates) {
		super();
		this.timeSlotId = timeSlotId;
		this.dates = dates;
	}

	public Integer getTimeSlotId() {
		return timeSlotId;
	}

	public void setTimeSlotId(Integer timeSlotId) {
		this.timeSlotId = timeSlotId;
	}

	public LocalDate getDates() {
		return dates;
	}

	public void setDates(LocalDate dates) {
		this.dates = dates;
	}

	
	
	
}
