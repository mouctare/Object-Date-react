import React, { Component } from 'react'
import Calendar from 'react-calendar';
//import Calendar from 'react-calendar';
// Dans ce tutot , on va voir la manupulation de l'objet Date avec react
export default class Picker extends Component {

        state = {
            date : new Date(),
            showDate: false // voir la date  sur la laquelle on a clické et au début on la met  à false
        }
        onChange=date => {
            this.setState({ // modification du state
                date
            })
        }
        validation = () => {
            this.setState({
                showDate:true // dés quon clic sur le buuton , il renvois true
            })
        }
        reset = () => {
            this.setState({
                showDate:false
            })
        }
    render() {
        return (
            // cette prémiere div englobe tout le composant
            <div style={{boxShadow:"5px 5px 25px" }}> 
                 <div onClick={this.reset}> 
                <Calendar
                onChange={this.onChange} // pour écouter le calendrier, c'est quand on clic sur le calendrier
                // l'affichage de la date ne marche tout de suite car il faut passer la date en string
                selectRange={true}// ici , on demarre avec la date du jour 
                // <p>Date choisie:{this.state.date.toLocaleDateString()}</p>

                value={this.state.date}
              
                />
                </div> 
                
               
                <button onClick={this.validation}>Valider</button>
                {this.state.showDate ?(
                    <div>
                        <p>Du : {this.state.date[0].toLocaleDateString()}</p> 
                        <p>Au : {this.state.date[1].toLocaleDateString()}</p>
                        </div> // si c'est true on mettre le paragraphe et si c'est false on renvois nul
                ) : null}  
            </div>
        )
    }
}
