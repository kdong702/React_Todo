import React,{Component} from "react";
import { connect } from "react-redux";
import Week from "../components/Week";
import { changeDay } from "../store/modules/week";

class WeekContainer extends Component{
    handleSelect = day => {
        const {changeDay} = this.props;
        changeDay(day);
    };
    render(){
        const {day} = this.props;
        return <Week onSelect = {this.handleSelect} selected={day}/>
    }
}

const mapStateToProps = state => ({
    day: state.week.day,
});

const mapDispatchToProps = dispatch => ({
    changeDay: day => dispatch(changeDay(day)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeekContainer);