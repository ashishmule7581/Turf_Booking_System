package com.turf.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.turf.pojos.BookingTable;
import com.turf.pojos.SystemUsers;

public interface BookingTableDaoJPA extends JpaRepository<BookingTable, Integer> {
	
}
