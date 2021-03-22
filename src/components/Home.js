import React from 'react';
import ApiService from "../service/ApiService";
import EmployeeTable from "./EmployeeTable";
import Header from "./Header"


export default class Home extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            data: [],
            initialData: [],
            name: "",
      
        }
        this.sortBy = this.sortBy.bind(this)
      

        this.apiService = new ApiService();

    }


    sortBy() {

        let list = this.state.data
      

        list.sort((a, b) => {
            let [a1, b1] = [a.name.first.toLowerCase(), b.name.first.toLowerCase()];
            return a1.localeCompare(b1);
        })
       

        this.setState({
            data: list,
       
        })

    }




    render() {
        return (
            <>
                <Header></Header>
                <div className="container">
                    <div style={{ textAlign: 'center', margin: '50px' }}>
                        <input type="text" onChange={(e) => this.__onChange(e)} />
                    </div>

                    <EmployeeTable data={this.state.data}
                        sortBy={this.sortBy}
                     
                   
                    />
                  
                </div>

            </>
        );
    }


    componentDidMount() {
        this.apiService.getOnlinePeoples().then(res => {
            this.setState({ data: res, initialData: res })
        })
    }

    __onChange = (e) => {
        let value = e.target.value;
        let result = [];
        if (value !== '') {
            this.state.data.forEach(elem => {
                if (elem.name.first.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
                    result.push(elem);
                }
            })
        }
        result = result.length > 0 ? result : this.state.initialData;
        this.setState({
            data: result
        });
    }
}

