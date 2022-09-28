package com.turf.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "turf_details")
public class TurfDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int turfid;
	@Column(name = "city")
	String city;
	@Column(name = "address")
	String address;
	
	@ManyToOne
	@JoinColumn(name = "userid", nullable = false)
	SystemUsers turfManager ; 	
	@Column(name = "ground_name")
	String groundname;
	@Column(name = "rent_hour")
	double rentperhour;
	
	public TurfDetails() {
		super();
		System.out.println("In def constructor ... "+getClass().getName());
	}

	public TurfDetails(String city, String address, SystemUsers user, String groundname,
			double rentperhour) {
		super();
		System.out.println("In Paramterised constructor ..."+getClass().getName());
		this.city = city;
		this.address = address;
		this.groundname = groundname;
		this.rentperhour = rentperhour;
	}

	public int getTurfid() {
		return turfid;
	}

	public void setTurfid(int turfid) {
		this.turfid = turfid;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	

	public SystemUsers getTurfManager() {
		return turfManager;
	}

	public void setTurfManager(SystemUsers turfManager) {
		this.turfManager = turfManager;
	}

	public void setRentperhour(double rentperhour) {
		this.rentperhour = rentperhour;
	}

	public String getGroundname() {
		return groundname;
	}

	public void setGroundname(String groundname) {
		this.groundname = groundname;
	}

	

	@Override
	public String toString() {
		return "TurfDetails [turfid=" + turfid + ", city=" + city + ", address=" + address + ", turfManager="
				+ turfManager + ", groundname=" + groundname + ", rentperhour=" + rentperhour + "]";
	}



	
	
	
	

}
