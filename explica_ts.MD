//nomeDaVariavel: tipoDaVariavel

interface Usuario {
    name: string;
    email: string;
    phone?: number;
}

function enviarEmail({email, name, phone}: Usuario) {
    console.log(`Olá ${name}, seu email é ${email} e telefone ${phone}`);

}

enviarEmail({
    name: "Eduardo",
    email: "teste@mail.com"
});
