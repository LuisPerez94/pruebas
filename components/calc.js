class Calc extends React.Component {
    constructor(props){
        super(props);
        this.state={
            number: 0,
            bgDisplayColor: 'white',
        }
    }

    operation = (operationType) => {
        const { number } = this.state;
        switch (operationType) {
            case 'add': {
                let newNumber = number+1;
                const mod = (newNumber+1) % 3;
                const bgDisplayColor = this.selectBGDisplayColor(mod);
                this.setState({ number: newNumber, bgDisplayColor})
                break;
            }
            case 'sustract': {
                let newNumber = number-2;
                const mod = (newNumber+1) % 3;
                const bgDisplayColor = this.selectBGDisplayColor(mod);
                this.setState({ number: newNumber, bgDisplayColor})
                break;
            }
            case 'divide': {
                let newNumber = number/3;
                const mod = (newNumber+1) % 3;
                const bgDisplayColor = this.selectBGDisplayColor(mod);
                this.setState({ number: newNumber, bgDisplayColor})
                break;
            }
            case 'reset': {
                this.setState({ number: 0, bgDisplayColor: 'white'})
                break;
            }
        }
    }
    selectBGDisplayColor = (number) => {
        let color = '';
            switch (number) {
                case 0: {
                    color='rojo';
                    break;
                }
                case 1: {
                    color='verde';
                    break;
                }
                case 2: {
                    color='azul';
                    break;
                }
        }
        return color;
    }
    render() {
        const { number, bgDisplayColor } = this.state;
        return(
            <div>
               <div style={{ textAlign: 'center'}}>
                   <button onClick={()=> { this.operation('add')}}>Add</button>
                   <button onClick={()=> { this.operation('sustract')}}>Sustract</button>
                   <button onClick={()=> { this.operation('divide')}}>Divide</button>
                   <button onClick={()=> { this.operation('reset')}}>Reset</button>
               </div>
               <div className={`display ${bgDisplayColor}`}>
                   {number}
               </div>
               <style jsx>
                   {`
                   button{
                    margin: 4px;
                    background-color: black;
                    color: white;
                    padding: 8px;
                    border-radius: 8px;
                    text-transform: uppercase;
                    padding-left: 32px;
                    padding-right: 32px;
                }
                .display {
                    height: 80px;
                    font-size: 70px;
                    width: 60px;
                    font-weight: bold;
                    text-align: center;
                    margin: 0 auto;
                }
                .white {
                    background-color: white;
                }
                .rojo{
                    background-color: red;
                }
                .azul{
                    background-color: blue;
                }
                .verde{
                    background-color: green;
                }
                   `}
               </style>
            </div>
        );

    }
}

export default Calc;