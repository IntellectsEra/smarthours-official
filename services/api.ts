import axios from 'axios';

const BASE_URL = 'https://api.smarthours.in/v1';

export const enrollStudent = async (data: any) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api-services/admin/student`,
      data,
      { withCredentials: true }
    );
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error(
      'Failed to enroll student:',
      error?.response?.data || error.message
    );
    return { success: false, error: error?.response?.data || error.message };
  }
};
