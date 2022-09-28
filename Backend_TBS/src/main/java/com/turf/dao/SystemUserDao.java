package com.turf.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.turf.pojos.SystemUsers;

public interface SystemUserDao extends JpaRepository<SystemUsers, Integer> {
	public SystemUsers findByEmailAndPass(String email, String pass);


}
