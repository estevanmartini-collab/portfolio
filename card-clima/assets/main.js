angular.module('weatherApp', [])
  .controller('WeatherController', function($scope, $http) {
    const apikey = '4d29db6eded5ce8c3e01b1e52e5e6cb4';
    const lang = 'pt_br';
    const units = 'metric';

    $scope.cityInput = localStorage.getItem('ultimaCidade') || 'São Paulo';

    $scope.weather = null;

    $scope.buscarClima = function () {
      const city = $scope.cityInput.trim() || 'São Paulo';

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}&lang=${lang}`;

      $http.get(url).then(function (response) {
        const data = response.data;
        const iconPosition = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconPosition}@4x.png`;

        $scope.weather = {
          city: data.name,
          icon: iconUrl,
          temp: Math.round(data.main.temp),
          feelsLike: Math.round(data.main.feels_like),
          tempMin: Math.round(data.main.temp_min),
          tempMax: Math.round(data.main.temp_max),
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          windDeg: data.wind.deg
        };

        localStorage.setItem('ultimaCidade', city);

      }, function (error) {
        alert("Erro ao buscar clima. Verifique a cidade digitada.");
        console.error(error);
      });
    };

    $scope.checkEnter = function (event) {
      if (event.key === "Enter") {
        $scope.buscarClima();
      }
    };

    // buscar de cara
    $scope.buscarClima();
  });
