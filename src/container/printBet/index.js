import React, { Component } from 'react';
import QrCode from '../../components/QrCode';

class PrintBet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      qrData: props.location.state.qrData,
    };
    this.downloadQR = this.downloadQR.bind(this);
  }

  componentWillReceiveProps(newProps){
    console.log(newProps);
    this.setState({
      qrData: newProps.location.state.qrData,
    })
  }

  downloadQR() {
    var blob = this.base64toBlob(this.state.qrData, { type: 'image/png', encoding: 'utf-8' });
    // var blob = new Blob([window.atob(this.state.qrData)], { type: 'image/png', encoding: 'utf-8' });
    const filename = 'download.png'
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
  }

  base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}

  render() {
    return(
      <div>
        {this.state.qrData && <QrCode base64Str={this.state.qrData} />}
        {this.state.qrData && <div onClick={this.downloadQR}>Print</div>}
        {/* <a download="download.png" href={`data:image/png;base64,${this.state.base64Str}`}>Print</a> */}
      </div>
    );
  }
}

export default PrintBet;
