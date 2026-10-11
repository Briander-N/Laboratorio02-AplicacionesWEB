async function getData() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();

      //Estableciendo numero de consulta
      const numeroConsulta = document.getElementById("usrId")

      numeroConsulta.textContent = "0001"

      // Cambiando la imagen
      const imagen = document.getElementById("userPFP")

      imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wM7g7dgB5Q5KfBPrvOg2tJf7uVhyA5qr5xsgOH7X_g&s"

      //Estableciendo informacion
      const nickname = document.getElementById("nickName")
      nickname.textContent = result.name

      const userName = document.getElementById("userName")
      userName.textContent = result.username

      const userEmail = document.getElementById("userEmail")
      userEmail.textContent = result.email

      const userCompany = document.getElementById("userCompany")
      userCompany.textContent = result.company.name

      const userCity = document.getElementById("userCity")
      userCity.textContent = result.address.city

      const userWebsite = document.getElementById("userWebsite")
      userWebsite.textContent = result.userWebsite


      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  }


getData();