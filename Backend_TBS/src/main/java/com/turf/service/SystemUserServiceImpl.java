package com.turf.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turf.dao.SystemUserDao;
import com.turf.dto.LoginDetails;
import com.turf.pojos.SystemUsers;

@Service
@Transactional
public class SystemUserServiceImpl implements SystemUserService{

	@Autowired
	SystemUserDao systemUserDao;
	
	public SystemUserServiceImpl() {
		System.out.println("In def constructor ... "+getClass().getName());
	}
	
	
	@Override
	public Optional<SystemUsers> FindSystemUserById(int id) {		
		return systemUserDao.existsById(id) ? systemUserDao.findById(id) : null;
	}


	@Override
	public SystemUsers registerUser(SystemUsers user) {
		try {
			return systemUserDao.save(user);
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}


	@Override
	public List<SystemUsers> findAllUsers() {
		return systemUserDao.findAll();
	}


	@Override
	public List<SystemUsers> deleteUser(int id) {
	
		systemUserDao.deleteById(id);
		return systemUserDao.findAll();
	}


	@Override
	public SystemUsers validateLoginDetails(LoginDetails loginCred) {
		List<SystemUsers> registerUser = systemUserDao.findAll();
		
		for(SystemUsers user : registerUser) {
			if(user.getEmail().equals(loginCred.getEmail()) && user.getPass().equals(loginCred.getPass())) {
				return user;
			}
		}
		return null;
	}


	

	
}
