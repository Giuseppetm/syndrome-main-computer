import SuperOmnidroidFrame from "../Components/SuperOmnidroidFrame";

const Supers = () => {
    return (
        <section id="supers">
            {/*
                Struttura json:
                [
                    {
                        super: {
                            name: string,
                            threatRating: number,
                            powers: string,
                            img: path,
                            terminated: boolean,
                        },
                        omnidroid: {
                            name: string // x1, x2 ecc.
                            features: string,
                            img: path,
                            terminated: boolean
                        }
                    }
                ]

                Loop sull'array, timeout di tot secondi che cambia il contenuto della visualizzazione del componente.
                Per ogni elemento va visualizzato super e relativo omnidroid.
                Nel caso uno dei due sia terminated ci va un'animazione che mette su il frame TERMINATED.

            */}

            <SuperOmnidroidFrame />
            
        </section>
    );
};

export default Supers;