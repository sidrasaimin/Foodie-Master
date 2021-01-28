import React, { Component } from "react";
import ostyles from '../styles/order.module.css';

class order extends Component{

    constructor(props) {
        super(props);
        this.state = {
         foods: (require('../database/foods.json')),
         id: ""
        }
    }

    componentWillMount(){
        const hotel = this.props.history.location.pathname.slice(7)
        this.setState({
            id: hotel,
        })
    }

    render() {
        const a = this.state.id
        return (
            <div>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat|Bebas+Neue&display=swap" rel="stylesheet"/>
                    <link rel='stylesheet' type='text/css' href='./order.css' />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>Order</title>
                    <div className={ostyles.container}>
                        <div className={ostyles.navbar}>
                            <h1 className={ostyles.navtitle}> &nbsp;&nbsp;&nbsp;Foodie </h1>
                            <div className={ostyles.flex} style={{paddingRight: 20}}>
                                <h1 className={ostyles.stitle}> SidraStark </h1>&nbsp;&nbsp;&nbsp;
                                <img className={ostyles.profile} src="https://res.cloudinary.com/azizcloud/image/upload/t_equla/v1578847794/blog/B612_20190512_161749_660_20190513154325455_gmrxka.jpg"/>
                            </div>
                            <div className={ostyles.bread} style={{paddingRight: 8}}>
                            <h1 className={ostyles.stitle} style={{fontSize: 28}}> ☰ </h1>&nbsp;&nbsp;&nbsp;
                            </div>
                        </div>
                        <div className={ostyles.box1}>
                        <div className={ostyles.slot1}>
                                <div className={ostyles.headbar}>
                                     <h1 className={ostyles.navtitle} style={{margin: 0}}> &nbsp;&nbsp;&nbsp;{this.state.id}</h1>
                                    <h5 style={{margin: 3,color: '#fff', fontSize: 14}} className={ostyles.subtitle}> &nbsp;&nbsp;&nbsp;📍 Melur, Madurai</h5>
                                </div>
                                <div className={ostyles.list}>
                                    <h1 className={ostyles.navtitle} style={{color: '#2c4d6c', padding: 16, marginBottom: -12}}>Order Now</h1>

                                {
                                this.state.foods[this.state.id].map((data, index) => 
                                    <div className={ostyles.bar} key={index}>
                                        <h3 className={ostyles.stitle}>{data.Food}</h3>
                                        <div className={ostyles.row}>
                                            <h3 className={ostyles.subtitle} style={{margin: 0}}>{data.Description}</h3> 
                                            <input className={ostyles.butt} type="button" value='Add' />
                                        </div>
                                        <h4 style={{marginTop: 6}} className={ostyles.subtitle}>{data.Rate}</h4>
                                    </div>
                                )}

                                <br/>
                                </div>
                        </div>
                        <div className={ostyles.slot2}>
                                <h1 className={ostyles.navtitle} style={{color: '#2c4d6c', padding: 16,marginBottom: -12}}>My cart</h1>
                                <div className={ostyles.bar}>
                                    <h3 className={ostyles.stitle}>Chilli Parotta</h3>
                                    <div className={ostyles.row}>
                                        <input type="number" value='1' className={ostyles.numinput}/>
                                        <h4 style={{margintop: 10, color: '#2c4d6c'}} className={ostyles.stitle}>₹ 100</h4>
                                    </div>
                                </div>


                                <center><input className={ostyles.butt} style={{width: '80%', height: 40}} type="button" value='Pay Now' /></center>
                        </div>
                    </div>
                    <div className={ostyles.navfoo}>
                            <h4 className={ostyles.navtitle}> Designed and developed by SidraStark</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default order;