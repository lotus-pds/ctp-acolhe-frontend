export function Footer(){
    return (
        <footer
            className="
                w-full
                absolute
                bottom-0 left-o
                flex items-center justify-around
                bg-gradient-to-r from-purple-100  to-purple-300
                font-medium
                p-2
            "
        >
            <img src="src/assets/img/ctp-footer.png"
            className="w-[120px]" alt="" />
            <span>CTP Acolhe - Todos os Direitos Reservados</span>
            <span>Criado por <strong>Lotus</strong> | Todos os Direitos Reservados</span>
        </footer>
    );
}