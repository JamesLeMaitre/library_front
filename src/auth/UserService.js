import { useAppDispatch } from '../hooks/app.ts';
import { setRayonItems } from '../redux/slicers/rayonSlicer.js';
import authHeader from './authHeader';

const API_RAYONS = 'http://localhost:8250/api/rayons/';
export default function UserService() {
  const dispatch = useAppDispatch();
  // Get All Rayons
  const getAllRayons = async () => {
    const rayonsData = await this.axios.get(`${API_RAYONS}list`, authHeader.config);
    const rayonsValue = rayonsData.data;
    console.log(rayonsValue);
    dispatch(setRayonItems(rayonsValue));
  };

  // async deleteRayons() {
  //   this.axios.delete(`${API_RAYONS}${id}`, authHeader.config);
  // }

  /* async getAllUsers() {
    return axios.get(API_BASE_URL + `list` + { headers: authHeader() });
  } */
}
