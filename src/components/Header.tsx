import UnipampaLogo from "../images/Logos/UNIPAMPA_Logo_100.png"
import Tec1Logo from "../images/Logos/Logo_Tec1_200.png"
import { useLocation } from 'react-router-dom'

export function InstitutionLogos({ onBlue = false }: { onBlue?: boolean }) {
    return (
        <div className={`flex w-fit shrink-0 items-center gap-5 ${onBlue ? '' : 'rounded bg-[#DCEEEF] px-4 py-2'}`}>
            <a href="https://unipampa.edu.br/portal/" target="_blank" rel="noopener noreferrer">
                <img src={UnipampaLogo} alt="Unipampa" className={onBlue ? 'w-24 brightness-0 invert' : 'w-24'} />
            </a>
            <a href="https://rodrigoperaca.github.io/PETSaude-Tecnologia1/" target="_blank" rel="noopener noreferrer">
                <img src={Tec1Logo} alt="PET Saúde Tecnologia I" className="h-16 w-auto" />
            </a>
        </div>
    )
}

const Header = () => {
    const { pathname } = useLocation()
    if (pathname === '/') return null

    return (
        <header className="flex flex-col bg-[#DCEEEF] min-h-20 justify-between items-center gap-4 px-4 py-4 md:flex-row md:gap-8 ">
            <InstitutionLogos />
            
            <h1 className="font-black text-center text-2xl text-[#0A4D68] p-3 leading-tight sm:text-3xl md:flex-1"> 
                Cartilha de Cuidados Pós-Alta Hospitalar
            </h1>            
        </header>
    )
}

export default Header;
