// -----initialState for data storing
const initialState = {
  allDetails: [],
};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        // -------loading data in state,according to action we can create logic
        allDetails: [
          ...state.allDetails,
          {
            fname: action.payload.fname,
            lname: action.payload.lname,
            email: action.payload.email,
            country: action.payload.country,
            street: action.payload.street,
            city: action.payload.city,
            state: action.payload.state,
            zip: action.payload.zip,
          },
        ],
      };
    default:
      return state;
  }
};
export default FormReducer;
