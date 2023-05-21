import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div className='selection'>
                <nav>
                    <ul>
                        <li>
                            <Link to={`russian-cities`}><div className="russia"></div></Link>
                        </li>
                        <li>
                            <Link to={`foreing-countries`}><div className="globus"></div></Link>
                        </li>

                        {/* можно с перезагрузкой (однако принцип spa нарушается) */}
                        {/* <li>
                                <a href={`/second`}>Вторая</a>
                            </li> */}
                    </ul>
                </nav>

            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
}