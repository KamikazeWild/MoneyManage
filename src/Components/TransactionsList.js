import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionsList = () => {
	const { transactions } = useContext(GlobalContext);

	return (
		<div>
			<h2>History</h2>
			<ul className="list">
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</div>
	);
};

export default TransactionsList;
