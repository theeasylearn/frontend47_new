import React from "react";
import DinningTable from "./dinning_table";
class Resturant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tables: []
        }
    }
    createTable = (event) => {
        event.preventDefault();
        this.setState({
            tables: [...this.state.tables, { name: this.state.name, tableno: this.state.tableno }],
            name: '',
            tableno: ''
        })
    }

    updateState = (event) => {
        this.setState({
            [event.target.name]: event.target.value,

        });
    }

    onTableClose = (tableNo) => {
        alert('received table no ' + tableNo);
        this.setState({
            tables: this.state.tables.filter(table => table.tableno !== tableNo)
        },()=>{
            console.log(this.state.tables); 
        });
    }
    render() {
        return (
            <>
                <div className="container-fluid d-flex justify-content-between p-3 bg-light shadow">
                    <h1>Shreeji Resturant</h1>
                    <form className="row g-3" onSubmit={this.createTable}>
                        <div className="col-auto">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="name" placeholder="Guest Name" required name="name"
                                    value={this.state.name} onChange={this.updateState} />
                                <label htmlFor="name">Guest Name</label>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="form-floating">
                                <input type="number" className="form-control" id="tableno" placeholder="Table No" required name="tableno"
                                    value={this.state.tableno} onChange={this.updateState} />
                                <label htmlFor="tableno">Table No</label>
                            </div>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Add Table</button>
                        </div>
                    </form>
                </div>

                <div className="container mt-4">
                    <div className="row">
                        {
                            this.state.tables.map((item) => {
                                // console.log(item);
                                return <DinningTable 
                                key={item.tableno}
                                name={item.name} 
                                tableno={item.tableno} 
                                tableClose={this.onTableClose} />
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}
export default Resturant