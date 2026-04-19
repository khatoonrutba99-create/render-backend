import axios from 'axios';

async function test() {
  const url = 'http://localhost:4000/api/v1';
  try {
    const res1 = await axios.post(url + '/message/send', {
      firstName: "Test", lastName: "Test", email: "t@t.com", phone: "12345678900", message: "hi"
    });
    console.log("Message:", res1.status);
  } catch(e) { console.log("Message Error:", e.response?.status, e.response?.data) }

  try {
    const res2 = await axios.post(url + '/user/patient/register', {
      firstName: "Patient", lastName: "Test", email: "t2@t.com", phone: "12345678900", nic: "123456789012", dob: "1990-01-01", gender: "Male", password: "password", role: "Patient"
    });
    console.log("Register:", res2.status);
  } catch(e) { console.log("Register Error:", e.response?.status, e.response?.data) }

  try {
    const res3 = await axios.post(url + '/appointment/post', {
      firstName: "Patient", lastName: "Test", email: "t2@t.com", phone: "12345678900", nic: "123456789012", dob: "1990-01-01", gender: "Male", appointment_date: "2024-05-05", department: "Pediatrics", doctor_firstName: "doc", doctor_lastName: "doc", hasVisited: false
    });
    console.log("Appointment:", res3.status);
  } catch(e) { console.log("Appointment Error:", e.response?.status, e.response?.data) }
}
test();
