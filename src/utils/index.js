import axios from 'axios';
function getEnterprises() {
  return axios.get('https://socent.cezarneaga.eu/api/v1/enterprises?status=neq|10')
}
function getEnterprise(id) {
  return axios.get(`https://socent.cezarneaga.eu/api/v1/enterprises/${id}`)
}
function getEnterprisesPublic() {
  return axios.get('/public')
}
export default { getEnterprises, getEnterprisesPublic, getEnterprise }
