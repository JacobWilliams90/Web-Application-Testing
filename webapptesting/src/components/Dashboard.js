import React from 'react';

const Dashboard = (props) => {
	const handleBall = () => {
		props.ball >= 3 ? props.setBall(0) : props.setBall(props.ball + 1);
	};

	const handleStrike = () => {
        if (props.out === 2 && props.strike === 2 ) {
            handleReset()
        } else { 
            props.strike >= 2 ? props.setStrike(0) || props.setOut(props.out + 1) : props.setStrike(props.strike + 1);
    }
	};

	const handleFoul = () => {
		if (props.strike === 0 || props.strike === 1) {
			props.setStrike(props.strike + 1);
		} else {
			props.setStrike(2);
		}
	};

	const handleReset = () => {
        props.setStrike(0);
        props.setBall(0);
        props.setOut(0);
    };
    

	return (
		<div>
			<button onClick={handleStrike}>Strike</button>
			<button onClick={handleBall}>Ball</button>
			<button onClick={handleFoul}>Foul</button>
			<button onClick={handleReset}>Hit</button>
		</div>
	);
};

export default Dashboard;