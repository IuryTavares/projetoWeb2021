import axios from 'axios';

export const registerUser = async(name, birthDate, email, address, password, cpf) => {

    //tirar esse data dps ou retornar algo dele
    const { data } = await axios.post(
        'http://localhost:8080/api/register/user',
        { name, 
        birthDate,
        email, 
        address, 
        password, 
        cpf },
    )
};

export const registerEnterprise = async(fantasyName, cnpj, address) => {

    //tirar esse data dps ou retornar algo dele
    const { data } = await axios.post(
        'http://localhost:8080/api/register/enterprise',
        { fantasyName, 
        cnpj,
        address },
    )
};