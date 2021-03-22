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
            sortOrder : ""
      
        }
        this.sortByFirstName = this.sortByFirstName.bind(this)
      

        this.apiService = new ApiService();

    }


    sortByFirstName() {


        const SortList = this.state.data.sort((a, b) => {
            if (b.name.first > a.name.first) {
                return -1
            }
            if (a.name.first > b.name.first) {
                return 1
            }
            return 0
        });
        if (this.state.sortOrder === "descend") {
            SortList.reverse()
            this.setState({ sortOrder: "ascend" })
        } else {
            this.setState({ sortOrder: "descend" })
        }
        this.setState({ data: SortList })

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
                        sortByFirstName={this.sortByFirstName}
                     
                   
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

