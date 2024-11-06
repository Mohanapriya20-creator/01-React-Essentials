//forwarding props to wrapped element
//children is a special prop that contains the children of the component
//props is an object that contains all the props passed to the component
// all the props passed to the component are available in props object
export default function Section({...props}){
    return <section {...props}>
        <h2>
           {props.title} 
        </h2>
        {props.children}
    </section>
}