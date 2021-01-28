import React, { Component } from "react";
import hstyles from '../styles/hotels.module.css';

class hotels extends Component{

    constructor(props) {
        super(props);
        this.state = {
         conta: require('../database/hotels.json')
        }
    }

    gotoOrder = (i) => {
        this.props.history.push(`/order/${i}`);
    }

    render() {
        return (
            <div>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat|Bebas+Neue&display=swap" rel="stylesheet"/>
                    <link rel='stylesheet' type='text/css' href='./foods.css' />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>Foods</title>
                    <div className={hstyles.container}>
                        <div className={hstyles.navbar}>
                            <h1 className={hstyles.navtitle}> &nbsp;&nbsp;&nbsp;Foodie </h1>
                            <div className={hstyles.flex} style={{paddingRight: 20}}>
                                <h1 className={hstyles.stitle}> Sidra </h1>&nbsp;&nbsp;&nbsp;
                                <img className={hstyles.profile} src="https://res.cloudinary.com/azizcloud/image/upload/t_equla/v1578847794/blog/B612_20190512_161749_660_20190513154325455_gmrxka.jpg"/>
                            </div>
                            <div className={hstyles.bread} style={{paddingRight: 8}}>
                                <h1 className={hstyles.stitle} style={{fontSize: 28}}> ☰ </h1>&nbsp;&nbsp;&nbsp;
                            </div>
                        </div>
                        <h1 className={hstyles.navtitle} style={{color: '#2c4d6c', padding: 16, marginBottom: -12}}>Hotels</h1>
                        <div className={hstyles.box1}>

                        {this.state.conta.hotelnames.map((data, index) =>
                            <div className={hstyles.card} key={index}>
                                <center><img className={hstyles.cardimg} src={data.image}/></center>
                                <h4 className={hstyles.stitle}>{data.hotel}</h4>
                                <h4 className={hstyles.subtitle}>{data.htype}</h4>
                        <h5  style={{margin: 0}} className={hstyles.subtitle}>{'★'.repeat(data.stars)}</h5>
                                <h5  style={{marginTop: 10}} className={hstyles.subtitle}>📍 {data.Location}</h5>
                                  <a href={data.page}>Order Now!</a>
                            </div>
                        )}

                        </div>
                        <div className={hstyles.navfoo}>
                            <h4 className={hstyles.navtitle}> Designed and Developed by Sidra</h4>
                        </div>
                    </div>
            </div>
        )
    }
}

export default hotels;
