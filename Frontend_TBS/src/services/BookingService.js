import axios from "axios";

const TURF_BOOKING_REST_URL="http://localhost:8080/turf";

class BookingService{

    getTurfs(){
        return axios.get(TURF_BOOKING_REST_URL+"/get");
    }

    makeBooking(booking)
    {
        return axios.post(TURF_BOOKING_REST_URL+"/bookingcontroller/bookTurf", booking);
    }

}

export default new BookingService();