import React, { Component } from 'react';
import './Popup.css';
import RecurringRequestController from './Recurring/RecurringRequestController';
import close from '../../icons/cross-out.svg';
import { NotificationType, NotificationCategory } from '../../Enums';
import RecurringRequestCancelled from './Recurring/RecurringRequestCanceled';
import { NotificationMap } from './NotificationMap';
import RecurringRequestConfirmed from './Recurring/RecurringRequestConfirmed';

class NotificationDetailsController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {
                status: '',  // Enums.RequestStatus
                startTimestamp: '',  // start date + start hour
                endTimestamp: '',    // end date + end hour
                endCriteria: {
                },
                repeats: '',	// values in Enums.RequestRepeatType
                primaryContact: '',  // uid-key of a donating-agency-member
                notes: '',
                umbrella: '',  // uid-key of a umbrella
                donatingAgency: '',  // autogen-key of a donating-agency
                requester: '',  // name of a donating-agency-member
                receivingAgency: {
                },
                // ADDED FOR DUMMY DATA
                daInfo: {
                    name: '',
                    primaryContact: { 
                    },
                    address: {
                        street1: '',
                        street2: '',
                        city: '',
                        state: '',
                        zipcode: '',
                        officeNo: ''
                    }
                },
                raInfo: {
                    // ADDED FOR DUMMY DATA
                    name: '',
                    address: {
                    },
                    primaryContact: {
                    }
                },
                delivererGroup: {
                    claimed: '',  // uid-key of a DG (once a DG claims)
                },
                dgInfo:{
                },
                requestTimeStamp: '',
                spawnedDeliveries: [
                    // individual deliveries that were created to fulfill this delivery request
                    '-L5RkIS0CSPuXpkewaqA'
                ]
            
            }
        };
    }

    componentDidMount(){
        //TODO: Query for notification based on {this.props.notifcation.content}
        let category = NotificationMap[this.props.notification.type].category;
        var details = {};
        if (category === NotificationCategory.RECURRING_PICKUP) {
            // backend TODO: fetch notification detail content
            details = {
                status: 'pending',  // Enums.RequestStatus
                startTimestamp: 1519826400,  // start date + start hour
                endTimestamp: 1527688800,    // end date + end hour
                endCriteria: {
                    type: 'date',  // Enums.RequestEndCriteriaType
                    value: '2018-02-09'  // a date for "date" or a number for "num_occurrences"
                },
                repeats: 'weekly',	// values in Enums.RequestRepeatType
                primaryContact: 'dhA03LwTp3cibXVUcb3nQqO34wj1',  // uid-key of a donating-agency-member
                notes: 'Enter through the back door.',
                umbrella: 'RheaQY1WxJT03sTPQICFZ4STpfm1',  // uid-key of a umbrella
                donatingAgency: '-K9HdKlCLjjk_ka82K0s',  // autogen-key of a donating-agency
                requester: 'Andrea Benson',  // name of a donating-agency-member
                receivingAgency: {
                    // Depending on the status of the request, this
                    // map will have 1 out of the 3 possible fields:
                    // "requested", "pending" (list), "claimed"
                    requested: 'uGOFJ8NqHjbZhKAYzSZFRs1dSKD3',  // uid-key of a RA
                    // OR
                    pending: [  
                        'uGOFJ8NqHjbZhKAYzSZFRs1dSKD3',  // uid-key of all RAs
                    ],
                    // OR
                    claimed: 'uGOFJ8NqHjbZhKAYzSZFRs1dSKD3',  // uid-key of a RA (once a RA claims)
                },
                // ADDED FOR DUMMY DATA
                daInfo: {
                    name: 'Local Point',
                    primaryContact: { // primaryContact of the request not the DA
                        name: 'Andrea Benson',
                        email: 'AndreaIsCool@uw.edu',
                        phone: '206-586-9876',
                        position: 'Manager'
                    },
                    address: {
                        street1: '1201 NE Campus Pkwy',
                        street2: '',
                        city: 'Seattle',
                        state: 'WA',
                        zipcode: 98105,
                        officeNo: '220'
                    }
                },
                raInfo: {
                    // ADDED FOR DUMMY DATA
                    name: 'Seattle Gospel Union Mission',
                    address: {
                        street1: '3802 South Othello Street',
                        street2: '',
                        city: 'Seattle',
                        state: 'WA',
                        zipcode: 98118,
                        officeNo: ''
                    },
                    primaryContact: {
                        name: 'Amy Powell',
                        email: 'amy.powell@uw.edu',
                        phone: '206-333-2343',
                        position: 'Manager'
                    }
                },
                delivererGroup: {
                    claimed: 'R8BAHrxdkfQoAmfWvGa1OJmjQP43',  // uid-key of a DG (once a DG claims)
                },
                dgInfo:{
                    name: 'Green Greeks',
                    address: {
                        street1: '1410 NE Campus Parkway',
                        street2: '',
                        city: 'Seattle',
                        state: 'WA',
                        zipcode: 98195,
                        officeNo: ''
                    },
                    primaryContact: {
                        name: 'Johnny Appleseed',
                        email: 'greengreeks@uw.edu',
                        phone: '206-420-6666',
                        position: 'Manager'
                    }
                },
                requestTimeStamp: 1518753363763,
                spawnedDeliveries: [
                    // individual deliveries that were created to fulfill this delivery request
                    '-L5RkIS0CSPuXpkewaqA'
                ]
            };
        }
        this.setState({details: details});
    }

    showDetail(){
        switch(NotificationMap[this.props.notification.type].color){
        // default color is green
        default:
            return <div className="popup-wrapper recurring">
                <img className="close" src={close} alt="close" onClick={this.props.closePopUp} />
                {
                    this.props.notification.type === NotificationType.RECURRING_PICKUP_REQUEST && 
                <RecurringRequestController
                    details={this.state.details}
                    closePopUp={this.props.closePopUp.bind(this)}
                    accountType={this.props.account.accountType}/>
                }
                {
                    this.props.notification.type === NotificationType.RECURRING_PICKUP_CONFIRMED &&
                <RecurringRequestConfirmed
                    details={this.state.details}
                    closePopUp={this.props.closePopUp.bind(this)}
                    accountType={this.props.account.accountType}/>
                }
            </div>;
        
        case 'grey':
            return <div className="popup-wrapper recurring-canceled">
                <img className="close" src={close} alt="close" onClick={this.props.closePopUp} />
                <RecurringRequestCancelled
                    notification={this.props.notification}
                    details={this.state.details}
                    closePopUp={this.props.closePopUp.bind(this)}/>
            </div>;
        }
    }

    render() {
        return (
            <div>
                {this.showDetail()}
            </div>
        );
    }
}

export default NotificationDetailsController;