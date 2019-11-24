import React from 'react'
import s from './Profile.module.css'
import {Icon, Input} from "antd";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
        showColors: false,
        currentColor: 'black',
        colors: ['red', 'blue', 'green', 'black']
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    };

    deactivateEditMode() {
        this.setState({
            editMode: false
        });
        this.props.updateProfileStatus(this.state.status);
    }

    onChangeInput = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    toggleShowsColors = () => {
        this.setState((currentState) => ({
           showColors: !currentState.showColors
        }));
    };

    setNewColor = (e) => {
        this.setState({
            currentColor: e.target.style["background-color"]
        })
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });

        }

    }

    render() {
        return (
            <div className={s.wrap_status}>
                {!this.state.editMode &&
                <div onClick={this.activateEditMode}>
                    <span style={{color: `${this.state.currentColor}`}}>{this.props.status !== '' ? this.props.status : 'Pleas enter your status'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <Input
                        onChange={this.onChangeInput}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode.bind(this)}
                        type="text"
                        value={this.state.status}/>
                </div>
                }
                <div className={s.changeColor}>
                    <Icon onClick={this.toggleShowsColors} className={s.btnChangeColor} type="bg-colors"/>
                    {this.state.showColors &&
                    <div className={s.wrap_colors}>
                        {
                            this.state.colors.map(color => {
                                return <div onClick={this.setNewColor} style={{backgroundColor: `${color}`}} className={s.color_cub}> </div>
                            })
                        }
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default ProfileStatus;