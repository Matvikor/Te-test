import { Fragment, memo, useCallback } from 'react';

const MainComponent = () => {
    const makeLog = useCallback(() => console.log('hi from MainComponent'),[]);
    return (
        <Fragment>
            <ChildComponent makeLog={makeLog}/>
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(function ({ makeLog }){
    return <button onClick={makeLog}>say Hi from ChildComponent</button>

});