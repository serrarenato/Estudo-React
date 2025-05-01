const Events = () => {
    const handleMyEvent = (e) => {console.log(e)};
    const renderSomething = (x)=>{
        if(x){
            return <h1>Render true</h1>
        }else{
            return <h1>Render false</h1>
        }
    }
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click here</button>
            </div>
            <div>
                <button onClick={()=>console.log("Clicou")}>Escrever Clicou no console</button>
            </div>
            {renderSomething(false)}
            {renderSomething(true)}
        </div>
    );
}
export default Events;