const TransactionsList = () => {
	return (
		<div>
			<h2>History</h2>
			<ul className="list">
				<li className="minus">
					Cash withdrawal <span>-￡400</span>
					<button className="delete-btn">x</button>
				</li>
			</ul>
		</div>
	);
};

export default TransactionsList;
