import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    // State, sadece class component le kullanılabilir ve component oluşturulduğu anda çağrılmalıdır.
    constructor(props) {
        super(props); //React ile gelen componentin constructorunu ezdik fakat tüm özelliklerin kullanbilmesi için super(props) yazıyoruz.

        this.state = { latitude: null, errorMessage: null }; //State'i oluşturduk.

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude })
            },
            (error) => {
                this.setState({ errorMessage: error.message })
            }
        );
    }

    render() {
        if (this.state.errorMessage) {
            return <div>Hata: {this.state.errorMessage}</div>
        }

        if (this.state.latitude) {
            return <div>{this.state.latitude}</div>
        } else {
            return <div>Konum belirleniyor...</div>
        }

    }
}

ReactDOM.render(<App />, document.getElementById("root"));