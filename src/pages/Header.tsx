import UnipampaLogo from "../logos/UNIPAMPA_Logo_100.png"
import Tec1Logo from "../logos/Logo_Tec1_200.png"

const Header = () => {
    return (
        <header className="flex flex-col bg-[#DCEEEF] min-h-20 justify-between items-center md:grid md:grid-cols-3 md:gap-10 ">
            {/* Cabeçalho do site */}
            {/* TODO: Trabalhar na responsividade do header*/}
            <div className="ml-4 flex items-center gap-5">
                <a href="https://unipampa.edu.br/portal/" target="_blank" rel="noopener noreferrer">
                    <img src={UnipampaLogo} alt="Logo da Unipampa" className="ml-4"/>
                </a>
                <a href="https://rodrigoperaca.github.io/PETSaude-Tecnologia1/" target="_blank" rel="noopener noreferrer">
                    <img src={Tec1Logo} alt="Logo do grupo Tec 1 - Pet-Saúde I&SD" className="ml-4 h-30"/>
                </a>
            </div>
            
            <h1 className="font-black text-center text-3xl text-[#0A4D68] p-7 items-center"> 
                Cartilha de cuidados pós alta hospitalar
            </h1>            
        </header>
    )
}

export default Header;