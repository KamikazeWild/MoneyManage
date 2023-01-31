import { useState } from "react";

const NewTransaction = () => {
	const [text, setText] = useState();
	const [amount, setAmount] = useState();

	return (
		<div>
			<h3>Add new transaction</h3>
			<form>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Enter text.."
					></input>
				</div>
				<div className="form-control">
					{" "}
					<label htmlFor="amount">
						Amount <br />
						<small>negative - expense, positive - income</small>
					</label>
					<input
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder="enter amount"
					></input>
				</div>
				<button className="btn">Add Transaction</button>
			</form>
		</div>
	);
};

export default NewTransaction;
