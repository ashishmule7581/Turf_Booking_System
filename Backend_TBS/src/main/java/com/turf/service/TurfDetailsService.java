package com.turf.service;
import java.util.List;
import java.util.Optional;

import com.turf.pojos.DateAndTimeOfBookingDTO;
import com.turf.pojos.TurfDetails;

public interface TurfDetailsService {
		// register Turf 
		TurfDetails addTurf(TurfDetails turf);
		
		// getting Turf by id 
		Optional<TurfDetails> FindTurfById(int turfid);
		
		// find all Turf 
		List<TurfDetails> findAllTurf();
		
		//Delete Turf by ID
		List<TurfDetails> deleteTurf(int turfid);
		
		// find unbooked turfs 
		
		List<TurfDetails> finAllTurfs(DateAndTimeOfBookingDTO dateAndTimeDTO);
		


}
