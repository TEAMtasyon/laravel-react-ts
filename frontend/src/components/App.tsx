import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';

interface IProps {
    history: {
        push: Function;
    };
}
const App: React.FC<IProps> = (props: IProps) => {
    return (
        <div className="App">
            SAMPLE REACT APP HERE{' '}
            <Button
                type="primary"
                onClick={() => props.history.push('/sample')}
            >
                Go to sample
            </Button>
        </div>
    );
};

export default withRouter(App);
