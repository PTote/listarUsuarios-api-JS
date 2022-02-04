const urlUsuario = "https://reqres.in/api/users?page=2";

const obtenerUsuario = async () => {
  const respuesta = await fetch(urlUsuario);
  const { data } = await respuesta.json();
  console.log(data);
  return data;
};

export { obtenerUsuario };
