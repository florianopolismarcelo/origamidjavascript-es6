import ValidarCpf from "./validarcpf.js";

const cpf = document.querySelector("#cpf");
const validarCpf = new ValidarCpf(cpf).iniciar();

const validadorCPF = new ValidarCpf();

console.log(validarCpf.formatar("111-222 222 50"));
console.log(validarCpf.validar("111.222 222 50"));

console.log(validarCpf);
