const AppReducer = (state, action) => {
	switch (action.type) {
		case "DELETE_TRANSACTION":
			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction.id !== action.payload
				),
			};

		case "ADD_TRANSACTION":
			return {
				...state,
				transacions: state.transactions.push(action.payload),
			};

		default:
			return state;
	}
};

export default AppReducer;
