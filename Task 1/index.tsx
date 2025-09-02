import { Component } from 'react';
import ThirdComponent from './Components/ThirdComponent';
import FourthComponent from './Components/FourthComponet';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

// functional component
const FirstComponent = ({ name, age }: IUser) => (
    <div>
        my name is {name}, my age is {age}
    </div>
);

// functional component
// Этот компонент является необязательным для выполнения задания, но продемонстрирует глубину знаний в React.
const SecondComponent = ({ user: { name, age } }: IProps) => (
    <div>
        my name is {name}, my age is {age}
    </div>
);

class ThFrComponent extends Component{
    render() {
        return (
            <div>
                <ThirdComponent name={this.props.name} age={this.props.age}/>
                <FourthComponent user={this.props.user.name}/>
            </div>
        )
    }
}


