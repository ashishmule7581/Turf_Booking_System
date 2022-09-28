package com.turf.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turf.dao.BookingTableDaoJPA;
import com.turf.dao.SystemUserDao;
import com.turf.dao.TurfDetailsDao;
import com.turf.pojos.DateAndTimeOfBookingDTO;
import com.turf.pojos.SystemUsers;
import com.turf.pojos.TurfDetails;

@Service
@Transactional
public class TurfDetailsServiceImpl implements TurfDetailsService{
	@Autowired
	private TurfDetailsDao turfDetailsDao;
	@Autowired
	private SystemUserDao systemUserDao;
	@Autowired
	private BookingTableDaoJPA bookingDao;
	
	
	public TurfDetailsServiceImpl() {
		System.out.println("In def constructor ... "+getClass().getName());
	}
	
	@Override
	public TurfDetails addTurf(TurfDetails turf) {
		try {
			SystemUsers savedUSer= systemUserDao.findByEmailAndPass(turf.getTurfManager().getEmail(),turf.getTurfManager().getPass());
			System.err.println("Validated USer for turf addition : "+savedUSer);
			//systemUserDao.delete(savedUSer);
			
//			savedUSer.getTurfList().add(turf);
//			savedUSer=systemUserDao.save(savedUSer);
//			System.out.println("Updated saved user after turf addition : "+savedUSer);
//			turf.setTurfManager(savedUSer);
			savedUSer.addTurf(turf);
			systemUserDao.save(savedUSer);
			return turfDetailsDao.save(turf);
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public Optional<TurfDetails> FindTurfById(int turfid) {
		
		return turfDetailsDao.existsById(turfid) ? turfDetailsDao.findById(turfid) : null;
	}

	@Override
	public List<TurfDetails> findAllTurf() {
		return turfDetailsDao.findAll();
	}

	@Override
	public List<TurfDetails> deleteTurf(int turfid) {
		
		turfDetailsDao.deleteById(turfid);
		return turfDetailsDao.findAll();
	}

	@Override
	public List<TurfDetails> finAllTurfs(DateAndTimeOfBookingDTO dateAndTimeDTO) {
		List<TurfDetails> allTurfs=null;
		try {
		List<TurfDetails> bookedTurfs =	bookingDao.findAll().stream().filter(x ->  (x.getBookingDate().isEqual(dateAndTimeDTO.getDate()) && 
				x.getTimeslot().equals(dateAndTimeDTO.getTimeSlot()))).map(x -> x.getTurf()).collect(Collectors.toCollection(ArrayList :: new));
	
		 allTurfs=turfDetailsDao.findAll() ;
		allTurfs.removeAll(bookedTurfs);
		return allTurfs;
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return allTurfs;
}

	
	

}
