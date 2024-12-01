import "./style.css";
import med1 from "./Images/medico1.jpg";

const App = () => {
    const names = {
        doc1: 'Médico 1',
        doc2: 'Médico 2',
        doc3: 'Médico 3'
    }

    const styles = () => {
        return {
            width: '1000px',
            margin: 'auto',
            border: '2px solid #ccc',
            backgroundColor: "#f9f9f9",
            borderRadius: '16px',
            padding: '16px',
            textAlign: 'center'
        };
    }

    return (
        <div style={styles()}>
            <h2>Profissionais</h2>
            <div style={{
                margin: '0px',
                border: '2px solid #DDD',
                borderRadius: '8px',
                padding: '8px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>

                <div className="profissional">
                    <img src={med1}/>
                    <p>{names.doc1}</p>
                </div>
                <div className="profissional">
                    <img src={process.env.PUBLIC_URL + "medico2.jpg"}/>
                    <p>{names.doc2}</p>
                </div>
                <div className="profissional">
                    <img src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p>{names.doc3}</p>
                </div>
            </div>
        </div>
    )
}

export default App