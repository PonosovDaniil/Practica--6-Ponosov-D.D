const fetchData = async () => {
    try {
      const response = await fetch(
        `https://date.nager.at/api/v3/PublicHolidays/${god.value}/${strana_cod.value}`
      );
      const data = await response.json();
      console.log(data);
      getValue(data);
    } catch (e) {
      throw new Error(`pokazat => ${response.status} ${e}`);
    }
  };
  
  function getValue(json) {
    const newObj = [];
  
    json.sort((e) => {
      if (e.date.split("-")[1] == `05`) {
        console.log(e.date.split("-")[1]);
        newObj.push(e);
      }
    });

    return console.log(newObj);
  }
