export default function Header() {
    return (
        <div className="header">
            <a href='#'>
                <img src="../images/nik.png" alt="logo" />    
            </a>

            <ul className="header-flex">
                <a href="#">
                    <li>
                        <p>Αρχική</p>
                    </li>
                </a>
                <a href="#">
                    <li>
                        <p>Κατάλογος</p>
                    </li>
                </a>
                <a href="#">
                    <li>
                        <p>Επικοινωνία</p>
                    </li>
                </a>
                <a href="#">
                    <li>
                        <p>Σχετικά Με Εμάς</p>
                    </li>
                </a>
            </ul>
        </div>
    )
}