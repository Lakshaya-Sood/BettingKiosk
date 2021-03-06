import React, { Component } from 'react';
import QrCode from '../../components/QrCode';
import QrReader from 'react-qr-scanner';
import autobind from 'react-autobind';
import { hostname } from 'os';

class SessionPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 100,
      qrData:"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",
      result: null,
      errorState:false,
    };
    autobind(this);
  }

  moveToNextScreen() {
    const { history } = this.props;
    history.push('/dashboard');
  }

  handleScan(data){
    console.log(data);
    if(data) {
    const { history } = this.props;
    fetch('http://192.168.43.61:8000/getSession', {
      method: 'POST',
      body: JSON.stringify({kioskUserQrInfo: data}),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(json => {console.log(json);history.push({pathname:'/dashboard',
    state: {email:json.email,kioskId:json.kioskId, sessionId:json.sessionId}
  })})
    .catch(err => {console.log(err);this.setState({errorState: true})})
  }
  }

  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 400,
      width: 350,
      margin: 'auto',
    }
    // setTimeout(this.moveToNextScreen, 20000);
    if(this.state.errorState) {
      return <div><h3>Authentication Failed</h3></div>
    }
    return(
      <div>
        {!this.state.result && <div>
            <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
              />
              </div>}
        {this.state.result &&
        <QrCode base64Str={this.state.qrData} />}
      </div>
    )
  }
}

export default SessionPage;
