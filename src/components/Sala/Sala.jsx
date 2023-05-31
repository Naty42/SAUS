import "./Sala.css"
import { useState } from "react";
import ModalReserva from "../ModalReserva/ModalReserva"
import ModalQueixa from "../ModalQueixa/ModalQueixa";

const Sala = ({ nome, bloco, disponivel, equipamentos }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleActiveClassroom = (sala) => {
        sala.parentElement.classList.toggle("ativo")
    }

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const qualModal = () => {
        if (disponivel) {
            return <ModalReserva isOpen={modalOpen} onClose={closeModal} />
        } else {
            return <ModalQueixa isOpen={modalOpen} onClose={closeModal} />
        }
    }

    return (
        <>
            <div className="sala">
                <header onClick={(event) => toggleActiveClassroom(event.target)}>
                    <h1>{nome}</h1>
                    <h1 className={disponivel ? "disponivel" : "indisponivel"}>{disponivel ? "disponivel" : "indisponivel"}</h1>
                </header>
                <aside>
                    <section>
                        <div>
                            <span>Materiais da sala</span>
                            <ul className="m-0 p-0">
                                {
                                    equipamentos.map((equipamento) => {
                                        return <li className="text-capitalize">{equipamento}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <span>Capacidade</span>
                            <p>45 pessoas</p>
                        </div>
                    </section>
                    {disponivel ? <button onClick={openModal}>Fazer Reserva</button> : <button style={{ backgroundColor: "#E55454" }} onClick={openModal}>Fazer Queixa</button>}
                </aside>
            </div>
            {qualModal()}
        </>
    )
}

export default Sala