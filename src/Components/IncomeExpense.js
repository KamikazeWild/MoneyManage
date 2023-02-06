import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionHistory = () => {
	const { transactions } = useContext(GlobalContext);

	const moneyPlus = transactions.map((transaction) =>
		transaction.amount > 0 ? transaction.amount : null
	);
	const totalIncome = moneyPlus
		.reduce((acc, currentVal) => acc + currentVal, 0)
		.toFixed(2);

	const moneyMinus = transactions.map((transaction) =>
		transaction.amount < 0 ? transaction.amount : null
	);
	const totalExpenses = moneyMinus
		.reduce((acc, currentVal) => acc + Math.abs(currentVal), 0)
		.toFixed(2);

	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p id="money-plus" className="money plus">
					+£{totalIncome}
				</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p id="money-minus" className="money minus">
					-£{totalExpenses}
				</p>
			</div>
		</div>
	);
};

export default TransactionHistory;
