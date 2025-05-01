
// Exemplo de variavel 
const TenplateExpressions = () => {
    const name = "Renato  Serra";
    const data = { age :27, job : "Dev"};
    return (
        <div>
            <h1>Ola {name}, tudo bem?</h1>
            <p>Profissao = {data.job}</p>
        </div>
    );
}

export default TenplateExpressions;