import React from 'react';

const Dashboard = (props) => {
	const handleBall = () => {
		props.ball >= 3 ? props.setBall(0) : props.setBall(props.ball + 1);
	};

	const handleStrike = () => {
		props.strike >= 2 ? props.setStrike(0) || props.setOut(props.out + 1) : props.setStrike(props.strike + 1);
	};

	const handleFoul = () => {
		if (props.strike === 0 || props.strike === 1) {
			props.setStrike(props.strike + 1);
		} else {
			props.setStrike(2);
		}
	};

	const handleHit = () => {
		props.setStrike(0);
		props.setBall(0);
    };
    
    const handleOuts = () => {
        props.setStrike(0);
        props.setBall(0);
        props.setOut(0);
    }

	return (
		<div>
			<button onClick={handleStrike}>Strike</button>
			<button onClick={handleBall}>Ball</button>
			<button onClick={handleFoul}>Foul</button>
			<button onClick={handleHit}>Hit</button>
            <button onClick={handleOuts}>Reset</button>
		</div>
	);
};

export default Dashboard;