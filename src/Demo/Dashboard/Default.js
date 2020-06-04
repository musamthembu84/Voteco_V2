import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

import Web3 from "web3";
import Election from '../../../build/contracts/Election'

class Dashboard extends React.Component {
    componentWillMount(){
        this.loadBlockchainData();
    }

    async loadBlockchainData(){
        const web3  = new Web3(Web3.givenProvider || "http://localhost:8545");
        const accounts  = await web3.eth.getAccounts();
        this.setState({account: accounts[0]});
        console.log("-------Accounts----" + accounts);

        const networkID = await web3.eth.net.getId();
        const networkData = Election.networks[networkID];

        console.log("haha" + networkData);
        const election = web3.eth.Contract(Election.abi,networkData.address);

    }

    constructor(props){
        super(props);
        this.state = {
            account: '',
            candidateCount:0,
            candidates:[],
            voterID:''
        }
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Total Registered Students</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 25000</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">50%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Total Candidates</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-5"/> 5</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">36%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Number of campuses</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> 4</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">70%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={8}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h5'>Eligible Candidates</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <tbody>
                                    <tr className="unread">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">SASCO</h6>
                                            <p className="m-0">Future Leaders</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>3 Votes</h6>
                                        </td>
                                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12">Read Manifesto</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Vote</a></td>
                                    </tr>
                                    <tr className="unread">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">EFFSC</h6>
                                            <p className="m-0">Leadership Command</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>0 votes</h6>
                                        </td>
                                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12">Read Manifesto</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Vote</a></td>
                                    </tr>
                                    <tr className="unread">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">DASO</h6>
                                            <p className="m-0">Student Movement</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>2 votes</h6>
                                        </td>
                                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12">Read Manifesto</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Vote</a></td>
                                    </tr>
                                    <tr className="unread">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">IFP</h6>
                                            <p className="m-0">Student Command Council</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted f-w-300"><i className="fa fa-circle text-c-red f-10 m-r-15"/>7 votes</h6>
                                        </td>
                                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12">Read Manifesto</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Vote</a></td>
                                    </tr>
                                    <tr className="unread">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">BFF</h6>
                                            <p className="m-0">Black leaders council</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>5 votes</h6>
                                        </td>
                                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12">Read Manifesto</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Vote</a></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className='card-event'>
                            <Card.Body>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col">
                                        <h5 className="m-0">Upcoming Event</h5>
                                    </div>
                                    <div className="col-auto">
                                        <label className="label theme-bg2 text-white f-14 f-w-400 float-right">34%</label>
                                    </div>
                                </div>
                                <h2 className="mt-2 f-w-300">45<sub className="text-muted f-14">Competitors</sub></h2>
                                <h6 className="text-muted mt-3 mb-0">You can participate in event </h6>
                                <i className="fa fa-angellist text-c-purple f-50"/>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className='border-bottom'>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-zap f-30 text-c-green"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">235</h3>
                                        <span className="d-block text-uppercase">total ideas</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-map-pin f-30 text-c-blue"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">26</h3>
                                        <span className="d-block text-uppercase">total locations</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4}>
                    </Col>
                    <Col xl={4}>
                    </Col>
                    <Col md={6} xl={4}>
                    </Col>
                    <Col md={6} xl={8} className='m-b-30'>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;
