// Fluxo:
// Evento de submit no formulário disparado pelo botão
// captura do evento pelo search.addEventListen("submit", processar);
// o evento capturao valor input e coloca na url de requisição
// é feita a requisição e a resposta é capturada por response.json();

const search = document.getElementById("search");
const cityInput = document.getElementById("cityInput");
const h1 = document.getElementById("h1");
const img = document.getElementById("img");
const tempp1 = document.getElementById("tempp1");
const tempp2 = document.getElementById("tempp2");
const tempmin = document.getElementById("tempmin");
const tempmax = document.getElementById("tempmax");
const umidade = document.getElementById("umidade");
const vento = document.getElementById("vento");
const results = document.getElementById("results");

const processar = async (event) => {
  event.preventDefault();

  try {
    const cityName = cityInput.value;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        cityName
      )}&appid=${"5453218c03d1d546cab71d45c79125de"}&units=metric&lang=pt_br`
    );

    const data = await response.json();

    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    h1.textContent = data.name;
    tempp1.innerHTML = `${data.main.temp} <sup>Cº</sup>`;
    tempp2.innerHTML = data.weather[0].description;
    tempmax.innerHTML = `${data.main.temp_max} <sup>Cº</sup>`;
    tempmin.innerHTML = `${data.main.temp_min} <sup>Cº</sup>`;
    umidade.innerHTML = `${data.main.humidity} %`;
    vento.innerHTML = `${data.wind.speed} Km/h`;

    console.log(data);

    results.classList.add("visible");
  } catch (error) {
    console.log("Erro ao buscar dados", error);
  }
};

search.addEventListener("submit", processar);
