import axios from 'axios';

export const registerUser = async(name, birthDate, email, address, password, cpf) => {

    //tirar esse data dps ou retornar algo dele
    const { data } = await axios.post(
        'http://localhost:8080/api/user/create',
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
        'http://localhost:8080/api/enterprise/create',
        { fantasyName, 
        cnpj,
        address },
    )
};