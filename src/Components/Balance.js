import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
	const { transactions } = useContext(GlobalContext);

	const amount = transactions.map((transaction) => transaction.amount);
	const balance = amount
		.reduce((acc, currentVal) => acc + currentVal, 0)
		.toFixed(2);

	return (
		<div>
			<h4>Balance</h4>
			<h1 id="balance">￡{balance}</h1>
		</div>
	);
};

export default Balance;
