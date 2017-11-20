import axios from "axios";
export const addStudent = firstName => {
  return async dispatch => {
    const res = await axios.post(
      "https://webdxd-student-api.herokuapp.com/student",
      { firstName }
    );
    console.log(res);
    console.log("I am herename ");
    console.log(res.data);
    const newStudent = { _id: res._id, firstName };
    dispatch({
      type: "ADD_STUDENT",
      payload: newStudent
    });
  };
  // return {
  //   type: "ADD_STUDENT",
  //   firstName
  // };
};

export const fetchStudents = () => {
  // return axios.get('/user?ID=12345').then(res => {
  //   res....
  // })
  return async dispatch => {
    const res = await axios.get(
      "https://webdxd-student-api.herokuapp.com/student"
    );
    console.log(res);
    console.log("I am herename ");
    console.log(res.data);
    dispatch({
      type: "FETCH_STUDENTS",
      payload: res.data
    });
  };
};
