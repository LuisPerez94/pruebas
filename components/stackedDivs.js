class StackedDivs extends React.Component {
    constructor(props){
        super(props);
        this.state={
            initNumber: 0,
        }
    }

    handleInput= (e)=> {
        let inputValue = e.target.value;
        let value;
        if (isNaN(parseInt(inputValue)) || value === '') {
            value= 0;
        } else {
            value= parseInt(inputValue);
        }
        this.setState({ initNumber: value });
    }

    createStackedDivs = () => {
        const { initNumber} = this.state;
        let stackedDivs = [];
        for (let index = parseInt(initNumber); index < 100; index++) {
            const mod = (index+1) % 5;
            let backgroundColor = '';
            switch (mod) {
                case 0: {
                    backgroundColor='white';
                    break;
                }
                case 1: {
                    backgroundColor='red';
                    break;
                }
                case 2: {
                    backgroundColor='green';
                    break;
                }
                case 3: {
                    backgroundColor='blue';
                    break;
                }
                case 4: {
                    backgroundColor='black';
                    break;
                }
            }
            stackedDivs.push(<div key={`stackedDiv_${index}`} style={{ backgroundColor: backgroundColor}}>{index+1}</div>);
        }
        return stackedDivs;
    }

    render() {
        const { initNumber } = this.state;
        const { variante } = this.props;
        return(
            <div>
                {variante && (
                    <input type="text" onChange={(e) => this.handleInput(e)} value={initNumber} />
                )}
               {this.createStackedDivs()}
            </div>
        );

    }
};

export default StackedDivs;