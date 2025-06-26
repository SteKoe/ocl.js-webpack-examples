import './App.css'

import {OclExamples} from "./OclExamples.tsx";

import img from "./assets/images/uml-example.png";


function App() {
    return (
        <div className="container">
            <h1>OCL.js</h1>
            <p>
                The OCL ist a language used in Meta-Modelling to add additional constraints to the meta model which
                can't be
                expressed by the given meta modelling language. Since there do exist implementations in Java
                (e.g. Eclipse Modelling Framework EMF), this is a basic OCL implementation in JavaScript.
            </p>

            <hr/>

            <h2>Examples</h2>
            <picture className="uml-example-picture">
                <img src={img} alt="UML Example" className="uml-example"/>
            </picture>
            <p>
                The following paragraphs contain some OCL constraints which are evaluated live while this page loads.
                To create a use case, the image shows two connected classes which describe the following:
                A person can own multiple cars.
                A car belongs to just one person.
                A car has a color.
                A person has a name as well as its age.
            </p>

            <OclExamples/>

            <p className="">
                &copy; Stephan Köninger
            </p>
        </div>
    )
}

export default App


