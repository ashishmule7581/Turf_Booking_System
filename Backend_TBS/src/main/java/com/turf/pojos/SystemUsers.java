package com.turf.pojos;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.*;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import antlr.collections.List;

@Entity
@Table(name="system_user")
public class SystemUsers {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userid;
	@Column(name = "fname",length = 20)
	private String firstname;
	@Column(name = "lname", length = 20)
	private String lastname;
	@Column(name = "email", nullable = false, unique = true)
	private String email;
	@Column(name = "pass",nullable = false)
	private String pass;
	@Column(name = "mob_num")
	private String mob;
	@Column(name = "role")
	String role;
	@JsonIgnore
	@OneToMany(mappedBy = "turfManager", cascade = CascadeType.ALL, orphanRemoval = true )
	private java.util.List<TurfDetails> turfList=new ArrayList<>();
	
	public SystemUsers() {
		super();
		System.out.println("In def constructor .."+getClass().getName());
	}


	public SystemUsers(String firstname, String lastname, String email, String pass, String mob,
			String role) {
		super();
		System.out.println("in paramterised constructor ..."+getClass().getName());
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.pass = pass;
		this.mob = mob;
		this.role = role;
	}


	public int getUserid() {
		return userid;
	}


	public void setUserid(int userid) {
		this.userid = userid;
	}


	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPass() {
		return pass;
	}


	public void setPass(String pass) {
		this.pass = pass;
	}


	public String getMob() {
		return mob;
	}


	public void setMob(String mob) {
		this.mob = mob;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}
	
	

	public java.util.List<TurfDetails> getTurfList() {
		return turfList;
	}


	public void setTurfList(java.util.List<TurfDetails> turfList) {
		this.turfList = turfList;
	}

	
	// helper method to add turf
	public boolean addTurf(TurfDetails turfDetails) {
		try {
		this.turfList.add(turfDetails);
		turfDetails.setTurfManager(this);
		return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
	}
	
	@Override
	public String toString() {
		return "SystemUsers [userid=" + userid + ", firstname=" + firstname + ", lastname=" + lastname + ", email="
				+ email + ", pass=" + pass + ", mob=" + mob + ", role=" + role + "]";
	}
}
