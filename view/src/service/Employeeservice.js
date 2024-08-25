import axios from 'axios';

const SB_URL = "http://localhost:9090/emp";
class Employeeservice {
  saveEmployee(employee) {
    return axios.post(SB_URL, employee);
  }

  getEmployees() {
    return axios.get(SB_URL);
  }

  deleteEmployeebyId(id) {
    return axios.delete(SB_URL + "/" + id);
  }

  updateEmployee(id,employee) {
    return axios.put(SB_URL + "/" + id,employee);
  }
}

export default new Employeeservice();