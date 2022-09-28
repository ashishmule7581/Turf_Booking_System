package com.turf.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.turf.pojos.TurfDetails;

public interface TurfDetailsDao extends JpaRepository<TurfDetails, Integer> {
	
}
